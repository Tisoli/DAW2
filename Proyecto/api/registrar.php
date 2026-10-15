<?php
/*

==========================================
Bigfatfish - 后端：注册新用户
==========================================

前端 POST（JSON）字段：
  username : string  用户名（账号）
  password : string  密码
  email    : string  邮箱

返回 JSON：
  { "ok": true, "usuario": {...} }
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

require __DIR__ . '/usuarios_lib.php';

/* 新用户初始余额（欧元） */
const SALDO_INICIAL = 5;

/* 读取前端发来的 JSON 数据 */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

/* 如果前端不是用 JSON（比如表单），回退到 $_POST */
if (!is_array($data)) {
    $data = $_POST;
}

/* 取出并清洗字段 */
$username = isset($data['username']) ? trim((string) $data['username']) : '';
$password = isset($data['password']) ? (string) $data['password'] : '';
$email    = isset($data['email'])    ? trim((string) $data['email']) : '';

/* 验证：三个字段都不能为空 */
if ($username === '' || $password === '' || $email === '') {
    http_response_code(400);
    echo json_encode([
        'ok'    => false,
        'error' => 'Debes rellenar usuario, contraseña y correo.'
    ]);
    exit;
}

/* 验证：邮箱格式 */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'ok'    => false,
        'error' => 'El correo electrónico no es válido.'
    ]);
    exit;
}

/* 读取已有用户；文件不存在或损坏则从空数组开始 */
$usuarios = leer_usuarios();

/* 检查：用户名是否已被注册（不区分大小写） */
if (buscar_usuario($usuarios, $username) >= 0) {
    http_response_code(409);
    echo json_encode([
        'ok'    => false,
        'error' => 'El nombre de usuario ya está registrado.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/* 组装新用户（带初始余额） */
$nuevo = [
    'username' => $username,
    'password' => $password,
    'email'    => $email,
    'saldo'    => SALDO_INICIAL
];

$usuarios[] = $nuevo;

/* 写回文件（加锁，避免并发覆盖；美化输出，不转义中文/斜杠） */
if (!guardar_usuarios($usuarios)) {
    http_response_code(500);
    echo json_encode([
        'ok'    => false,
        'error' => 'No se pudo guardar el usuario.'
    ]);
    exit;
}

/* 成功 */
echo json_encode([
    'ok'      => true,
    'usuario' => $nuevo
], JSON_UNESCAPED_UNICODE);
