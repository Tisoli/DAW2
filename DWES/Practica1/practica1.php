<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        echo "<td>" . $ciudades[$j] . "</td>";
        for ($i = 0; $i < $numDias; $i++) {
            echo "<td>" . $temperaturas[$j][$i] . "</td>";
        }
        echo "<td>" . round($promedios[$j], 1) . "</td>";



        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";

    ?>

</body>

</html>