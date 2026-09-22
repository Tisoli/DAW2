<?php

function comparaPalabras(string $a, string $b): string
{
    if (strlen($a) > strlen($b)) {
        return "positivo";
    } elseif (strlen($a) < strlen($b)) {
        return "negativo";
    } else {
        return "0";
    }
}

function cuentaVocales(string $palabra ,$x=false, $letras): int
{
    if(!$x){
    $vocales = ['a', 'e', 'i', 'o', 'u'];
    $contador = 0;

    foreach (str_split(strtolower($palabra)) as $letra) {
        if (in_array($letra, $vocales)) {
            $contador++;
        }
    }

    return $contador;
    }
    else{

    }
}
