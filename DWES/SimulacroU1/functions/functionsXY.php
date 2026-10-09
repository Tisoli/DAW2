<?php
//Este fichero no tiene la cabecera de HTML!!
/*En functionsXY.php, crea la unción basicStatistics. Recibe
                entre 0 y n parámetros. Devuelve un array asociativo con las siguientes claves:
                ● sum: la suma de todos los números
                ● max: el máximo
                ● min: el mínimo
                ● avg: la media
                ● neg: la cantidad de números negativos
                ● odd: un array con todos los números impares
                Si ha recibido 0 parámetros, devuelve false.
                Desde el fichero principal (exU1XYParte2.php) llama a la función e imprime los resultados
                en una lista no ordenada (<ul>). 
                */
function basicStatistics(...$nums)
{
    //$nums dentro de esta función es un array con todos los números que ha recibido
    $sum = array_sum($nums);    //Función devuelve la suma de los números de un array
    $max = max($nums);
    $min = min($nums);
    $avg = $sum / count($nums);
    $neg = 0;
    foreach ($nums as $num) {
        if ($num < 0) {
            $neg++;
        }
    }
    $odd = [];
    foreach ($nums as $num) {
        if ($num % 2 != 0) {
            //El número es impar
            $odd[] = $num;  //Con esto se añade el número al final del array
        }
    }
    //Construyo el array asociativo que tengo que devolver:
    $res = [
        "sum" => $sum,
        "max" => $max,
        "min" => $min,
        "avg" => $avg,
        "neg" => $neg,
        "odd" => $odd,
    ];
    return $res;
}

/*
En functionsXY.php, crea la función operations que recibe los
siguientes parámetros:
1. $numbers (array, obligatorio): array con números con los que operar.
2. $operation (string, opcional, por defecto “order”): indica la operación, puede ser
“order” (devuelve el array ordenado de mayor a menor o de menor a mayor), “sum”
(devuelve la suma de los números) o “product” (devuelve el producto).
3. $incremental (boolean, opcional, por defecto true): solo se tendrá en cuenta si la
operación es order. Si incremental es true, se ordenará de menor a mayor; si es
false, se ordenará de mayor a menor.
Desde el fichero principal (exU1XYParte2.php) prueba la función que acabas de crear. Por
ejemplo:
● operations([15, 6, 8.3, 4]); // [4, 6, 8.3, 15]
● operations([15, 6, 8.3, 4], "order", false); // [15, 8.3, 6, 4]
● operations([15, 6, 8.3, 4], "sum"); // 33.3
● operations([15, 6, 8.3, 4], "product"); // 2988
*/
// ... existing code ...

function operations($numbers, $operation = "order", $incremental = true)
{
    // ... existing code ...
}

/*
En functionsXY.php, crea la función textStats. La función recibe entre 0 y n
palabras (strings) como parámetros. Devuelve un array asociativo con las claves:
● total: el número de palabras recibidas.
● longest: la palabra más larga. En caso de empate, la primera que aparezca.
● shortest: la palabra más corta. En caso de empate, la primera que aparezca.
● chars: el número total de caracteres de todas las palabras.
● avg: la longitud media de las palabras.
Si no recibe ningún parámetro, devuelve false.
Desde el fichero principal (exU1XY.php) llama a la función e imprime los
resultados en una lista no ordenada (<ul>).
*/
function textStats(...$words)
{
    //Si no se ha recibido ninguna palabra, devolvemos false
    if (count($words) == 0) {
        return false;
    }

    $total = count($words);
    $longest = $words[0];
    $shortest = $words[0];
    $chars = 0;

    foreach ($words as $word) {
        $chars += strlen($word);    //Voy sumando los caracteres de cada palabra

        //Si la palabra actual es más larga que la que tenía guardada, la actualizo.
        //Uso ">" (estricto) para que en caso de empate se quede la primera.
        if (strlen($word) > strlen($longest)) {
            $longest = $word;
        }
        //Si la palabra actual es más corta que la que tenía guardada, la actualizo.
        //Uso "<" (estricto) para que en caso de empate se quede la primera.
        if (strlen($word) < strlen($shortest)) {
            $shortest = $word;
        }
    }

    $avg = $chars / $total;

    //Construyo el array asociativo que tengo que devolver:
    $res = [
        "total" => $total,
        "longest" => $longest,
        "shortest" => $shortest,
        "chars" => $chars,
        "avg" => $avg,
    ];
    return $res;
}
{
    //operation puede ser order, sum, product
    switch ($operation) {
        case 'order':
            //Si incremental es true, se ordenará de menor a mayor; si es false, se ordenará de mayor a menor.
            if ($incremental) {
                sort($numbers);
            } else {
                rsort($numbers);
            }
            return $numbers;
            break;
        case 'sum':
            return array_sum($numbers);
            break;
        case 'product':
            $product = 1;
            foreach ($numbers as $number) {
                $product *= $number;
            }
            return $product;
            break;

        default:
            return false;
            break;
    }
}