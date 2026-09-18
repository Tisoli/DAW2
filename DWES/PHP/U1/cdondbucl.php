<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicionales y bucles</title>
</head>

<body>
    <h2>Condicionales</h2>
    <?php
    //Si la edad es manor a 18 que nuestres eres menor edad
    
    $age = 17;
    if ($age >= 18) {
        echo "<p>Eres mayor edad </p> ";

    } else {

        echo "<p>Eres menor edad </p> ";
    }
    $mensaje = $age >= 18 ? "mayor" : "menor";
    echo $mensaje;

    echo "<br>";

    $dia = 2;
    switch ($dia) {
        case 1:
            echo "Lunes";
            break;
        case 2:
            echo "Martes";
            break;
        case 3:
            echo "Miercoles";
            break;
        default:
            echo "Otro dia";
            break;
    }

    echo "<br>";

    $nombre = match ($dia) {
        1 => "Lunes",
        2 => "Martes",
        3 => "Miercoles",
        4 => "Jueves",
        5 => "Viernes",
        6, 7 => "Fin de semana",
        default => "No valido"

    };

    echo $nombre;

    echo "<br>";

    for ($i = 0; $i <= 10; $i++) {
        echo $i;
        if ($i < 10) {
            echo ", ";
        }
    }

    echo "<br>";

    for ($i = 0; $i <= 100; $i++) {
        if ($i % 5 == 0 && $i % 7 == 0) {
            echo $i . ",";
        }
    }

    echo "<br>";

    $i = 1;
    while ($i <= 100) {
        if ($i % 5 == 0 && $i % 7 == 0) {
            echo $i . ",";
        }
        $i++;

    }

    echo "<br>";

    $cars = array("seat", "audi", "BMW");
    $food = ["tomates", "avocados", "carrots"];
    $food[3] = "eggplants";
    foreach ($food as $as) {
        echo "$as <br>";
    }

    echo count($cars);


    $capitals = [
        "Ecuador" => "Quito",
        "Spain" => "Madrid",
        "Norway" => "Oslo"
    ];
    echo "<p>La capital de Noruega es " . $capitals['Norway'] . "</p>"; //Oslo
    //echo "<p>La capital de Noruega es " . $capitals[2] . "</p>";    //Error
    echo count($capitals);  //3
    //Meto un elemento nuevo: Colombia - Bogotá
    $capitals['Colombia'] = 'Bogotá';
    $capitals["Georgia"] = "Tbilisi";
    echo "<br>";
    echo "<br>";
    foreach ($capitals as $capita) {
        echo $capita . ".<br>";
    }

    foreach ($capitals as $c => $capital) {
        echo "La capital de $c es $capital<br>";
    }
    //Para borrar datos de variables
    unset($capitals["Colombia"]);
    var_dump($capitals);

    if (isset($capitals["Georgia"])) {
        echo "La capital de Georgia es " . $capitals["Georgia"] . "<br>";
    } else {
        echo "No tiene xd<br>";
    }

    ?>

    <h2>Funciones con arrays</h2>

    <?php

    $notas = [9.0, 6.9, 7.5, 5.2];
    $suma = array_sum($notas);
    echo $suma;
    echo "<br>";
    $numeroDeNotas = count($notas);
    echo $numeroDeNotas;

    //ORGANIZARLO sort => menor a mayor rsort => mayor a menos
    sort($notas);
    var_dump($notas);

    //REVOLVER
    shuffle($notas);
    var_dump($notas);

    //Nota mas alta
    rsort($notas);
    echo $notas[0];

    //BUSCAR UN ELEMENTO
    var_dump(in_array(9.0, $notas));
    var_dump(in_array(9.1, $notas));

    //IMPLODE
    echo implode(",", $notas);

    $nombres = "Si#Hao#Li";
    $arrayNombre = explode("#", $nombres);
    var_dump($arrayNombre);

    $p = [
        "Pedro" => "Presidente",
        "Pilar" => "Educacion",
        "Oscar" => "Transporte",
        "Marlaska" => "Interior"
    ];

    var_dump($p);
    //ORDENAR POR VALOR ASCENDENTE
    
    asort($p);
    var_dump($p);
    //ORDENAR POR DESCENDENTE
    
    arsort($p);
    var_dump($p);
    //POR CLAVE ASCENDENTE
    ksort($p);
    var_dump($p);

    //POR CLAVE DESCENDENTE
    krsort($p);
    var_dump($p);

    foreach(array_keys($p) as $solo){
        echo "$solo , ";
    }
    ?>

</body>

</html>