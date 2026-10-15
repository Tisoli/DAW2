<?php
/*

==========================================
Bigfatfish - 用户库（读取/写入 usuarios.json）
==========================================

提供公共函数，供 registrar.php / saldo.php / guardar.php 复用：
  - leer_usuarios()            → 返回用户数组
  - guardar_usuarios($lista)   → 写回 usuarios.json（加锁）
  - buscar_usuario(&$lista,$u) → 返回用户下标（不区分大小写），找不到返回 -1
*/

/* usuarios.json 位于 api/ 的上一级 */
function usuarios_path(): string
{
    return __DIR__ . '/../usuarios.json';
}

function leer_usuarios(): array
{
    $archivo = usuarios_path();

    if (!file_exists($archivo)) {
        return [];
    }

    $previo = json_decode(file_get_contents($archivo), true);

    return is_array($previo) ? $previo : [];
}

function guardar_usuarios(array $lista): bool
{
    $json = json_encode(
        $lista,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );

    return @file_put_contents(usuarios_path(), $json, LOCK_EX) !== false;
}

/* 返回用户下标（不区分大小写），找不到返回 -1 */
function buscar_usuario(array $lista, string $username): int
{
    $username = strtolower(trim($username));

    foreach ($lista as $i => $u) {
        if (isset($u['username']) &&
            strtolower((string) $u['username']) === $username) {
            return $i;
        }
    }

    return -1;
}
