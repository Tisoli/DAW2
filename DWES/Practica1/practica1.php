<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">

    <title>Document</title>
</head>

<body>
    <?php
    $nombre = ord('S') - ord('A') + 1;
    $apellido = ord('L') - ord('A') + 1;

    $rows = ($nombre % 8) + 4;
    $cols = ($apellido % 6) + 5;

    echo "<h2>Valores: rows = $rows, cols = $cols</h2>";

    echo "<pre>";
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            echo "* ";
        }
        echo "\n";
    }
    echo "</pre>";

    echo "<br>";


    echo "<pre>";
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            if ($i == 0 || $i == $rows - 1 || $j == 0 || $j == $cols - 1) {
                echo "* ";
            } else {
                echo "  ";
            }
        }
        echo "\n";
    }
    echo "</pre>";

    echo "<br>";

    echo "<pre>";
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            if (($j + $i) % 2 == 0) {
                echo "* ";
            } else {
                echo "  ";
            }
        }
        echo "\n";
    }
    echo "</pre>";
    ?>

    <br>

    <?php
    $dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    $ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Zaragoza"];
    $numDias = 7;
    $numCiudades = 6;
    $temperaturas = [];
    for ($i = 0; $i < $numDias; $i++) {
        for ($j = 0; $j < $numCiudades; $j++) {
            $temperaturas[$j][$i] = rand(-10, 45);
        }
    }
    $promedios = [];
    for ($j = 0; $j < $numCiudades; $j++) {
        $promedios[$j] = array_sum($temperaturas[$j]) / $numDias;
    }

    $todas = [];
    foreach ($temperaturas as $fila) {
        foreach ($fila as $t) {
            $todas[] = $t;
        }
    }
    $minGlobal = min($todas);
    $maxGlobal = max($todas);

    $indiceMayorPromedio = array_search(max($promedios), $promedios);

    echo "<table border='1'>";
    echo "<thead>";
    echo "<tr>";
    echo "<th>Ciudad \\ Fecha</th>";
    for ($i = 0; $i < $numDias; $i++) {
        echo "<th>" . $dias[$i] . "</th>";
    }
    echo "<th>" . "Medio" . "</th>";
    echo "</tr>";
    echo "</thead>";

    echo "<tbody>";
    for ($j = 0; $j < $numCiudades; $j++) {
        echo "<tr>";
        // Nombre de la ciudad: si su promedio es el más alto → fondo amarillo claro
        echo "<td class=\"<?php
            if ($j == $indiceMayorPromedio) echo 'amarillo-claro';
        ?>\">" . $ciudades[$j] . "</td>";
        for ($i = 0; $i < $numDias; $i++) {
            $t = $temperaturas[$j][$i];
            echo "<td class=\"";
            if ($t < 0)
                echo "azul ";
            if ($t > 35)
                echo "rojo ";
            if ($t == $minGlobal)
                echo "negrita-subrayado ";
            if ($t == $maxGlobal)
                echo "marron-cursiva ";
            if ($i == 5 || $i == 6)
                echo "verde-claro ";
            echo "\">" . $t . "</td>";
        }
        // Promedio: también con fondo amarillo si es el mayor
        echo "<td class=\"";
        if ($j == $indiceMayorPromedio)
            echo "amarillo-claro";
        echo "\">" . round($promedios[$j], 1) . "</td>";



        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";


    $todas = [];
    foreach ($temperaturas as $j => $fila)
        foreach ($fila as $i => $t)
            $todas[] = [$t, $ciudades[$j], $dias[$i]];
    usort($todas, fn($a, $b) => $a[0] <=> $b[0]);
    echo "<p>Mínima: {$todas[0][0]}°C ({$todas[0][1]}, {$todas[0][2]})</p>";
    echo "<p>Máxima: " . end($todas)[0] . "°C (" . end($todas)[1] . ", " . end($todas)[2] . ")</p>";

    $maxDif = -1;
    $diaDif = "";
    for ($i = 0; $i < $numDias; $i++) {
        $col = array_column($temperaturas, $i);
        $dif = max($col) - min($col);
        if ($dif > $maxDif) {
            $maxDif = $dif;
            $diaDif = $dias[$i];
        }
    }
    echo "<p>Mayor diferencia: {$diaDif} ({$maxDif}°C)</p>";

    ?>

</body>

</html>