<?php
function textStats(...$palabras)
{
    if (count($palabras) === 0) {
        return false;
    }

    $total = count($palabras);
    $longest = $palabras[0];
    $shortest = $palabras[0];
    $chars = 0;

    foreach ($palabras as $palabra) {
        $chars += strlen($palabra);
        if (strlen($palabra) > strlen($longest)) {
            $longest = $palabra;
        }
        if (strlen($palabra) < strlen($shortest)) {
            $shortest = $palabra;
        }
    }
    $avg = $chars / $total;

    $resutal = [
        "total" => $total,
        "longest" => $longest,
        "shortest" => $shortest,
        "chars" => $chars,
        "avg" => $avg
    ];
    return $resutal;
}

function esPrimo($n)
{
    if ($n < 2) {
        return false;
    }
    for ($i = 2; $i * $i <= $n; $i++) {
        if ($n % $i == 0) {
            return false;
        }
    }
    return true;
}
function filterNumbers($array, $tipo)
{
    $resultado = [];
    foreach ($array as $n) {
        $incluir = false;
        switch ($tipo) {
            case "par":
                $incluir = ($n % 2 == 0);
                break;
            case "impar":
                $incluir = ($n % 2 != 0);
                break;
            case "primo":
                $incluir = esPrimo($n);
                break;
            case "positivo":
                $incluir = ($n > 0);
                break;
            case "negativo":
                $incluir = ($n < 0);
                break;
            default:
                $incluir = false;
        }
        if ($incluir) {
            $resultado[] = $n;
        }
    }
    return $resultado;
}

?>