<?php
/*

==========================================
Bigfatfish - 后端：查询 / 充值 余额
==========================================

用法：
  GET  /api/saldo.php?usuario=Tisoli
       → { "ok": true, "usuario": "...", "saldo": 4.5 }

  POST /api/saldo.php  (JSON)
       { "usuario": "Tisoli", "importe": 10 }
       → 充值成功后 { "ok": true, "usuario": "...", "saldo": 14.5 }

  充值金额只允许固定档位（不可自定义）。
*/

header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/usuarios_lib.php';

/* 允许的固定充值档位（不能自定义） */
const IMPORTES_PERMITIDOS = [5, 10, 20, 50];

/* =====================================================
   GET：查询余额
===================================================== */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $usuario = isset($_GET['usuario']) ? trim((string) $_GET['usuario']) : '';

    if ($usuario === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Falta el parámetro usuario.']);
        exit;
    }

    $usuarios = leer_usuarios();
    $i = buscar_usuario($usuarios, $usuario);

    if ($i < 0) {
        http_response_code(404);
        echo json_encode(['ok' => false, 'error' => 'Usuario no encontrado.']);
        exit;
    }

    $saldo = isset($usuarios[$i]['saldo']) ? (float) $usuarios[$i]['saldo'] : 0;

    echo json_encode([
        'ok'      => true,
        'usuario' => $usuarios[$i]['username'],
        'saldo'   => round($saldo, 2)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* =====================================================
   POST：充值
===================================================== */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $raw  = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        $data = $_POST;
    }

    $usuario = isset($data['usuario']) ? trim((string) $data['usuario']) : '';
    $importe = isset($data['importe']) ? (float) $data['importe'] : 0;

    if ($usuario === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Falta el usuario.']);
        exit;
    }

    /* 只允许固定档位（比较时忽略 int/float 差异） */
    $permitido = false;
    foreach (IMPORTES_PERMITIDOS as $ok) {
        if (abs($importe - $ok) < 0.001) {
            $permitido = true;
            break;
        }
    }

    if (!$permitido) {
        http_response_code(400);
        echo json_encode([
            'ok'    => false,
            'error' => 'Importe no permitido. Elige una cantidad disponible.'
        ]);
        exit;
    }

    $usuarios = leer_usuarios();
    $i = buscar_usuario($usuarios, $usuario);

    if ($i < 0) {
        http_response_code(404);
        echo json_encode(['ok' => false, 'error' => 'Usuario no encontrado.']);
        exit;
    }

    $saldo = isset($usuarios[$i]['saldo']) ? (float) $usuarios[$i]['saldo'] : 0;
    $saldo += $importe;
    $usuarios[$i]['saldo'] = round($saldo, 2);

    if (!guardar_usuarios($usuarios)) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'No se pudo guardar la recarga.']);
        exit;
    }

    echo json_encode([
        'ok'      => true,
        'usuario' => $usuarios[$i]['username'],
        'saldo'   => $usuarios[$i]['saldo'],
        'importe' => $importe
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* 其它方法不允许 */
http_response_code(405);
echo json_encode(['ok' => false, 'error' => 'Método no permitido.']);
