<?php
include "./ejercicioArrays.php";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>biblioteca</title>
</head>

<body>
    <?php
    // 1) Mostrar el título del segundo libro de "Ciencia Ficción"
    echo $biblioteca["Ciencia Ficción"][1]["titulo"];
    ?>
    <br>
    <?php
    // 2) Muestra el autor de "Sapiens" (recuerda que "autores" es un array,aunque en este caso solo tenga un elemento).
    
    echo $biblioteca["Historia"][0]["autores"][0];
    ?>
    <br>
    <?php
    // 3) Muestra cuántos ejemplares hay en la sede "Norte" del libro "Fundación".
    
    echo $biblioteca["Ciencia Ficción"][0]["ejemplares"]["Norte"];
    ?>
    <br>
    <?php
    // 4) Muestra la nota que puso el usuario "pedro22" en su reseña de "Sapiens" (accede directamente por posición dentro del array de reseñas).
    
    echo $biblioteca["Historia"][0]["resenas"][1]["nota"];
    ?>

    <?php
    $resenas = $biblioteca["Historia"][0]["resenas"];

    foreach ($resenas as $resena) {
        if ($resena["usuario"] === "pedro22") {
            echo $resena["nota"];
            break;
        }
    }
    ?>
    <br>
    <?php
    // 5) Comprueba si "Neuromante" tiene la clave "resenas" definida. Muestra un mensaje distinto según el resultado.
    $libro = $biblioteca["Ciencia Ficción"][1]; // Neuromante
    
    if (isset($libro["resenas"])) {
        echo "El libro tiene reseñas.";
    } else {
        echo "El libro no tiene reseñas.";
    }
    ?>
    <br>
    <?php
    // 6) Comprueba si "Veinte poemas de amor" tiene la clave "ejemplares". Si no la tiene, añádele una con 0 ejemplares en "Central".
    
    $libro =& $biblioteca["Poesía"][0];
    if (isset($libro["ejemplares"])) {
        echo "Si";
    } else {
        $libro["ejemplares"] = ["Central" => 0];
    }
    print_r($biblioteca["Poesía"][0]);

    unset($libro); // importante: cortar la referencia para no romper los foreach de después
    ?>
    <br>
    <?php
    // Cambia el año de publicación de "Neuromante" a 1984 → 1985 (modifica directamente el array $biblioteca).
    
    /*$libro =& $biblioteca["Ciencia Ficción"][1];
    $libro =["anio" => 1985];
    print_r($biblioteca["Ciencia Ficción"][1]);*/
    $biblioteca["Ciencia Ficción"][1]["anio"] = 1985;

    ?>
    <br>
    <?php
    // 8) Recorre todas las categorías y, dentro de cada una, muestra el título de cada libro, con el formato:"Ciencia Ficción -> Fundación"
    
    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $tituloLibro) {
            echo $categoria . " -> " . $tituloLibro["titulo"] . "<br>";
        }
    }
    ?>
    <br>
    <?php
    // 9) Recorre todo el array y muestra únicamente los libros publicados ANTES del año 1980, junto con su categoría.
    
    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $libroActual) {
            if ($libroActual["anio"] < 1980) {
                echo $categoria . " -> " . $libroActual["titulo"] . " (" . $libroActual["anio"] . ")<br>";
            }
        }
    }
    ?>
    <br>
    <?php
    // 10)Recorre todos los libros y, para los que tengan "ejemplares", suma el total de ejemplares en todas las sedes y muéstralo así: "Sapiens: 15 ejemplares en total"
    
    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $libroActual) {
            if (isset($libroActual["ejemplares"])) {
                $total = array_sum($libroActual["ejemplares"]);
                echo $libroActual["titulo"] . ": " . $total . "<br>";
            }
        }
    }
    ?>
    <br>
    <?php
    // 11) Recorre todos los libros y detecta si alguna sede tiene 0 ejemplares de algún libro. Muestra avisos con el formato:"Fundación no tiene ejemplares en Sur"
    

    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $libroActual) {
            if (isset($libroActual["ejemplares"]["Sur"]) && $libroActual["ejemplares"]["Sur"] === 0) {
                echo $libroActual["titulo"] . " no tiene ejemplares en Sur<br>";
            }
        }
    }
    ?>
    <br>
    <?php
    // 12) Recorre todos los libros que tengan "resenas" y calcula la nota media de cada uno (redondeada a 1 decimal). Muestra: "Sapiens - nota media: 4.0"
    
    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $libroActual) {
            if (isset($libroActual["resenas"])) {
                $suma = 0;
                $numeroResenas = count($libroActual["resenas"]);

                foreach ($libroActual["resenas"] as $resena) {
                    $suma += $resena["nota"];
                }

                $media = round($suma / $numeroResenas, 1);
                echo $libroActual["titulo"] . " - nota media: " . $media . "<br>";
            }
        }
    }
    ?>
    <br>
    <?php
    // 13) Recorre TODO el array (categorías, libros y reseñas) y cuenta cuántas reseñas en total tienen nota igual o superior a 4, mostrando el total al final junto con el título del libro que acumula más reseñas de ese tipo.
    foreach ($biblioteca as $categoria => $libros) {
        foreach ($libros as $libroActual) {
            if (isset($libroActual["resenas"])) {
                $suma = 0;
                foreach ($libroActual["resenas"] as $resena) {
                    if($resena["nota"] >= 4){
                        $suma  ++;

                    }

                }
                echo $libroActual["titulo"] . " hay ". $suma . " resenas mas que 4<br>";
            }
        }
    }
    ?>
</body>

</html>