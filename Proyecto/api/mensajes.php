<?php
/*

==========================================
Bigfatfish - 后端：读取已保存的消息
==========================================

GET /api/mensajes.php            → 返回全部消息
GET /api/mensajes.php?usuario=X  → 只返回某个用户的消息
*/

header('Content-Type: application/json; charset=utf-8');

$archivo = __DIR__ . '/mensajes.json';

$mensajes = [];
if (file_exists($archivo)) {
    $contenido = file_get_contents($archivo);
    $previo    = json_decode($contenido, true);
    if (is_array($previo)) {
        $mensajes = $previo;
    }
}

/* 可选：按用户名过滤 */
$usuario = isset($_GET['usuario']) ? trim((string) $_GET['usuario']) : '';

if ($usuario !== '') {
    $mensajes = array_values(array_filter($mensajes, function ($m) use ($usuario) {
        return isset($m['usuario']) && $m['usuario'] === $usuario;
    }));
}

echo json_encode([
    'ok'       => true,
    'total'    => count($mensajes),
    'mensajes' => $mensajes
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
