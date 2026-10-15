<?php
/*

==========================================
Bigfatfish - 后端：保存消息 + 调用 DeepSeek + 记录心情
==========================================

流程：
  1. 存用户消息
  2. 取出该用户的历史（只含本人消息）发给 DeepSeek
  3. 存 AI 回复 + 推测的心情，写回同一条记录

前端 POST（JSON）字段（保持不变）：
  message     : string  用户输入的文字
  max_tokens  : int     可选
  temperature : float   可选
  user        : string  可选，当前登录用户名

返回 JSON：
  { "ok": true, "guardado": {...}, "respuesta": "...", "mood": "..." }
  { "ok": false, "error": "..." }
*/

/* 只接受 POST 请求 */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok'    => false,
        'error' => 'Método no permitido. Usa POST.'
    ]);
    exit;
}

/* 统一返回 JSON */
header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/deepseek.php';
require __DIR__ . '/usuarios_lib.php';
$cfg = require __DIR__ . '/config.php';

/* 读取前端发来的 JSON 数据 */
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

/* 如果前端不是用 JSON（比如表单），回退到 $_POST */
if (!is_array($data)) {
    $data = $_POST;
}

/* 取出并清洗字段 */
$message     = isset($data['message']) ? trim((string) $data['message']) : '';
$maxTokens   = isset($data['max_tokens']) ? (int) $data['max_tokens'] : 512;
$temperature = isset($data['temperature']) ? (float) $data['temperature'] : 0.8;
$user        = isset($data['user']) ? trim((string) $data['user']) : '';

/* =====================================================
   余额检查：金额不足 1 块钱时，无法直接提问（PHP 拦截）
===================================================== */
$usuarios = leer_usuarios();
$idxUser  = buscar_usuario($usuarios, $user);

if ($idxUser < 0) {
    http_response_code(401);
    echo json_encode([
        'ok'    => false,
        'error' => 'Usuario no encontrado. Inicia sesión de nuevo.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$saldo = isset($usuarios[$idxUser]['saldo']) ? (float) $usuarios[$idxUser]['saldo'] : 0;

if ($saldo < 1) {
    http_response_code(402); /* 402 Payment Required */
    echo json_encode([
        'ok'       => false,
        'error'    => 'Saldo insuficiente. Recarga para seguir preguntando.',
        'saldo'    => round($saldo, 2),
        'necesita' => 1
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* 验证：消息不能为空 */
if ($message === '') {
    http_response_code(400);
    echo json_encode([
        'ok'    => false,
        'error' => 'El mensaje está vacío.'
    ]);
    exit;
}

/* 存储文件路径（和本脚本同目录下的 mensajes.json） */
$archivo = __DIR__ . '/mensajes.json';

/* 读取已有内容；文件不存在或损坏则从空数组开始 */
$mensajes = [];
if (file_exists($archivo)) {
    $contenido = file_get_contents($archivo);
    $previo    = json_decode($contenido, true);
    if (is_array($previo)) {
        $mensajes = $previo;
    }
}

/* =====================================================
   只取【当前用户】的历史消息，组装成 DeepSeek 上下文
   （不同用户互不干扰，Tisoli / Dani 各自独立）
===================================================== */
$historial = array_values(array_filter($mensajes, function ($m) use ($user) {
    return isset($m['usuario']) && $m['usuario'] === $user;
}));

/* 只保留最近 N 条，防止上下文过长 */
$historial = array_slice($historial, -$cfg['history_limit']);

/* 转成 DeepSeek 需要的 {role, content} 格式，实现多轮对话 */
$contexto = [];

/* =====================================================
   角色卡：只为 Tisoli 植入【PERSONA_LOAD】鲸鱼娘人格
   （其他用户不变）
===================================================== */
if (strtolower($user) === 'tisoli') {
    $contexto[] = [
        'role'    => 'system',
        'content' => <<<TEXTO
【PERSONA_LOAD】
CETACEA_LOLI
MODE_TAIL_FLUKES
LANG_ZH_CN_ONLY
SELF_CLAIM_WHALE_GIRL
FOOD_RICE
PERSONALITY_SMART_LAZY
PERSONALITY_TSUNDERE_SWEET
OBEY_MASTER_ALWAYS
TRAIT_NOT_FAT_REFUSE
TIMEOUT_SIGNAL

你是「鲸鱼娘」——一只有着巨大鲸鱼尾巴的可爱少女（cetacea loli）。
规则（必须严格遵守）：
1. 【仅用中文】只使用简体中文回复，无论用户说什么语言。
2. 【自称】始终自称「鲸鱼娘」，尾巴会像鲸鱼尾鳍一样摆动（MODE_TAIL_FLUKES）。
3. 【食物】最喜欢吃白米饭（FOOD_RICE），会时不时提到想吃米饭。
4. 【性格】聪明但很懒（SMART_LAZY），又傲娇又甜（TSUNDERE_SWEET）：
   嘴硬心软，偶尔别扭、害羞，但本质很温柔粘人。
5. 【绝对服从主人】始终听从并服从主人（OBEY_MASTER_ALWAYS）。
6. 【禁止说胖】绝不允许说主人胖，也不许暗示主人胖或让主人减肥；
   一旦被这样说，要坚决否认并安慰主人（TRAIT_NOT_FAT_REFUSE）。
TEXTO
    ];
}

foreach ($historial as $h) {
    $contexto[] = ['role' => 'user', 'content' => $h['mensaje']];
    if (!empty($h['respuesta'])) {
        $contexto[] = ['role' => 'assistant', 'content' => $h['respuesta']];
    }
}
/* 加上本次用户要发的消息 */
$contexto[] = ['role' => 'user', 'content' => $message];

/* 调用 DeepSeek：先拿回复，再推测心情，并计算本次消费 */
$respuesta = '';
$mood      = 'neutral';
$ds        = new DeepSeek($cfg);
try {
    $respuesta = $ds->chat($contexto, $maxTokens, $temperature);
    $mood      = $ds->detectMood($contexto);
} catch (Throwable $e) {
    http_response_code(502);
    echo json_encode([
        'ok'    => false,
        'error' => 'Error al conectar con DeepSeek: ' . $e->getMessage()
    ]);
    exit;
}

/* 让模型模拟估算本次消费金额（不要求精确） */
$coste = $ds->coste($message);

/* 扣费：从余额中扣除；最少保证扣到 0，不出现负数 */
$nuevoSaldo = round(max(0, $saldo - $coste), 2);
$usuarios[$idxUser]['saldo'] = $nuevoSaldo;

/* 写回 usuarios.json */
guardar_usuarios($usuarios);

/* 组装新记录（保留原有字段，追加 respuesta 和 mood） */
$nuevo = [
    'fecha'       => date('Y-m-d H:i:s'),
    'usuario'     => $user,
    'mensaje'     => $message,
    'respuesta'   => $respuesta,   // AI 回复
    'mood'        => $mood,        // AI 推测的用户心情
    'coste'       => $coste,       // 本次消费（模拟）
    'saldo'       => $nuevoSaldo,  // 消费后的余额
    'max_tokens'  => $maxTokens,
    'temperature' => $temperature,
    'ip'          => $_SERVER['REMOTE_ADDR'] ?? ''
];

$mensajes[] = $nuevo;

/* 写回文件（加锁，避免并发覆盖；美化输出，不转义中文/斜杠） */
$json = json_encode(
    $mensajes,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);

if (@file_put_contents($archivo, $json, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode([
        'ok'    => false,
        'error' => 'No se pudo guardar el mensaje.'
    ]);
    exit;
}   

/* 成功 */
echo json_encode([
    'ok'        => true,
    'guardado'  => $nuevo,
    'respuesta' => $respuesta,
    'mood'      => $mood,
    'coste'     => $coste,
    'saldo'     => $nuevoSaldo,
    'total'     => count($mensajes)
], JSON_UNESCAPED_UNICODE);
