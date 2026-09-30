<?php
/*

==========================================
Bigfatfish - 总结某用户最近一个月的心情
==========================================

用法：
  GET /api/resumen.php?usuario=Tisoli

返回 JSON：
  {
    "ok": true,
    "usuario": "Tisoli",
    "desde": "2026-08-25",
    "total": 12,
    "conteo": { "feliz": 5, "triste": 2, ... },
    "resumen": "Durante el último mes..."
  }
*/

header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/deepseek.php';
$cfg = require __DIR__ . '/config.php';

$usuario = isset($_GET['usuario']) ? trim((string) $_GET['usuario']) : '';
if ($usuario === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Falta el parámetro usuario.']);
    exit;
}

$archivo  = __DIR__ . '/mensajes.json';
$mensajes = [];
if (file_exists($archivo)) {
    $previo = json_decode(file_get_contents($archivo), true);
    if (is_array($previo)) {
        $mensajes = $previo;
    }
}

/* 只取该用户、且最近一个月内的记录 */
$haceUnMes = strtotime('-1 month');

$filtrados = array_values(array_filter($mensajes, function ($m) use ($usuario, $haceUnMes) {
    if (!isset($m['usuario']) || $m['usuario'] !== $usuario) {
        return false;
    }
    $t = strtotime($m['fecha'] ?? '');
    return $t !== false && $t >= $haceUnMes;
}));

if (count($filtrados) === 0) {
    echo json_encode([
        'ok'      => true,
        'usuario' => $usuario,
        'desde'   => date('Y-m-d', $haceUnMes),
        'total'   => 0,
        'conteo'  => new stdClass(),
        'resumen' => 'No hay mensajes en el último mes.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* 统计每种心情出现次数 */
$conteo = [];
foreach ($filtrados as $m) {
    $mood = $m['mood'] ?? 'neutral';
    $conteo[$mood] = ($conteo[$mood] ?? 0) + 1;
}
arsort($conteo);

/* 拼出文字摘要给 DeepSeek 做总结 */
$texto = '';
foreach ($filtrados as $m) {
    $texto .= '[' . ($m['mood'] ?? 'neutral') . '] ' . $m['mensaje'] . "\n";
}

/* 让 DeepSeek 生成一段温柔的中文/西文总结 */
$resumen = '';
try {
    $ds = new DeepSeek($cfg);
    $resumen = $ds->chat([
        [
            'role'    => 'system',
            'content' => 'Eres un asistente empático. Resume cómo se ha sentido el usuario '
                . 'durante el último mes a partir de sus mensajes y estados de ánimo. '
                . 'Escribe un párrafo breve y cálido en español, sin listas.',
        ],
        ['role' => 'user', 'content' => $texto],
    ], 400, 0.7);
} catch (Throwable $e) {
    $resumen = 'No se pudo generar el resumen: ' . $e->getMessage();
}

echo json_encode([
    'ok'      => true,
    'usuario' => $usuario,
    'desde'   => date('Y-m-d', $haceUnMes),
    'total'   => count($filtrados),
    'conteo'  => $conteo,
    'resumen' => $resumen
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
