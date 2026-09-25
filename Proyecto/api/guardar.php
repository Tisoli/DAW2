<?php
/*

==========================================
Bigfatfish - 后端：保存前端输入的消息
==========================================

前端 POST（JSON）字段：
  message     : string  用户输入的文字
  max_tokens  : int     可选
  temperature : float   可选
  user        : string  可选，当前登录用户名

返回 JSON：
  { "ok": true,  "guardado": {...} }
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

/* 读取前端发来的 JSON 数据 */
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

/* 如果前端不是用 JSON（比如表单），回退到 $_POST */
if (!is_array($data)) {
    $data = $_POST;
}

/* 取出并清洗字段 */
$message     = isset($data['message']) ? trim((string) $data['message']) : '';
$maxTokens   = isset($data['max_tokens']) ? (int) $data['max_tokens'] : null;
$temperature = isset($data['temperature']) ? (float) $data['temperature'] : null;
$user        = isset($data['user']) ? trim((string) $data['user']) : '';

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

/* 组装新记录 */
$nuevo = [
    'fecha'       => date('Y-m-d H:i:s'),
    'usuario'     => $user,
    'mensaje'     => $message,
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
    'ok'       => true,
    'guardado' => $nuevo,
    'total'    => count($mensajes)
], JSON_UNESCAPED_UNICODE);
