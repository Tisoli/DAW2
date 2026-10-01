<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExTables</title>
    <link rel="stylesheet" href="styles/style.css">

</head>

<body>
    <table border="1">
        <tr>
            <th>a</th>
            <th>b</th>
            <th>c</th>
        </tr>
        <?php
        $a = 5;
        for ($b = 0; $b <= 10; $b++) {
            echo "<tr>";
            echo "<td>" . $a . "</td>";
            echo "<td>" . $b . "</td>";
            echo "<td>" . ($a * $b) . "</td>";
            echo "</tr>";
        }
        ?>
    </table>

    <br>
    <?php
    $numero1 = 0;
    $numero2 = 1;
    $fibonacci = [];
    for ($i = 0; $i < 20; $i++) {
        $fibonacci[] = $numero1;
        $memoria = $numero1 + $numero2;
        $numero1 = $numero2;
        $numero2 = $memoria;
    }
    echo implode(",", $fibonacci);
    ?>


    <br>
    <?php
    $rows = 15;
    $columns = 3;

    for ($i = 0; $i < $columns; $i++) {
        echo "<br>";
        for ($j = 0; $j < $rows; $j++) {
            echo " * ";
        }
    }
    ?>

    <br>

    <?php
    $numero = 25;

    for ($i = 0; $i <= $numero; $i++) {
        for ($j = 0; $j <= $i; $j++) {
            echo $j;

            if ($j < $i) {
                echo ",";
            }
        }
        echo "<br>";
    }
    ?>

    <br>
    <table border="1">
        <thead class="green">
            <tr>
                <th class="X">X</th>
                <?php
                for ($i = 0; $i < 10; $i++) {
                    echo "<th>" . $i . "</th>";
                }
                ?>
            </tr>
        </thead>
        <tbody class="body">
            <?php
            for ($j = 0; $j <= 9; $j++) {
                echo "<tr>";
                echo "<td class ='greenyello'>" . $j . "</td>";

                for ($i = 0; $i <= 9; $i++) {
                    echo "<td>" . ($j * $i) . "</td>";
                }

                echo "</tr>";
            }
            ?>
        </tbody>
    </table>

    <br>
    <?php
    $ramdon = [];
    for ($i = 0; $i < 20; $i++) {
        $ramdon[] = rand(10, 50);
    }
    $sum = array_sum($ramdon);
    $count = count($ramdon);
    $medio = $sum / $count;
    $max = max($ramdon);
    $min = min($ramdon);

    echo "<p> la numero total es: " . $sum . "</p>";
    echo "<p> la numero medio es: " . $medio . "</p>";
    echo "<p> la numero maximo es: " . $max . "</p>";
    echo "<p> la numero minimo es: " . $min . "</p>";


    ?>
    <br>

    <?php
    $students = [
        ["nombre" => "Ana García", "matematicas" => 8.5, "historia" => 7.0, "programacion" => 9.0],
        ["nombre" => "Luis Martínez", "matematicas" => 6.0, "historia" => 8.5, "programacion" => 7.5],
        ["nombre" => "Marta Rodríguez", "matematicas" => 9.0, "historia" => 6.5, "programacion" => 8.0],
        ["nombre" => "Carlos López", "matematicas" => 7.5, "historia" => 9.0, "programacion" => 6.5],
        ["nombre" => "Elena Torres", "matematicas" => 8.0, "historia" => 7.5, "programacion" => 9.5]
    ];

    for ($i = 0; $i < count($students); $i++) {
        $sumM = $students[$i]["matematicas"] + $students[$i]["historia"] + $students[$i]["programacion"];
        $promM = $sumM / 3;
        $students[$i]["media"] = $promM;
    }

    $mejor = $students[0];
    foreach ($students as $student) {
        if ($student["media"] > $mejor["media"]) {
            $mejor = $student;
        }
    }
    echo "Mejor almuno es " . $mejor["nombre"] . " :   " . $mejor["media"];

    echo "<br>";
    foreach ($students as $student) {
        if ($student['matematicas'] >= 7) {
            $bienMate++;
        }
        if ($student['historia'] >= 7) {
            $bienHist++;
        }
        if ($student['programacion'] >= 7) {
            $bienProg++;
        }
    }
    echo "Los matematica hay " . $bienMate . " , historia hay" . $bienHist . " , programacion hay" . $bienProg;

    $mermoriaMate = 0;
    $mermoriaHist = 0;
    $mermoriaProg = 0;

    foreach ($students as $student) {
        if ($student["matematicas"] > $mermoriaMate) {
            $mermoriaMate = $student['matematicas'];
        }
        if ($student["historia"] > $mermoriaHist) {
            $mermoriaHist = $student['historia'];
        }
        if ($student["programacion"] > $mermoriaProg) {
            $mermoriaProg = $student['programacion'];
        }
    }

    $notaAltoCada = [
        "matematicas" => $mermoriaMate,
        "historia" => $mermoriaHist,
        "programacion" => $mermoriaProg
    ];

    echo "<pre>";
    print_r($notaAltoCada);
    echo "</pre>";


    $medias = array_column($students, "media");
    arsort($medias);

    echo "<table border='1'>";
    echo "<tr><th>Nombre</th><th>Media</th></tr>";
    foreach ($medias as $indice => $media) {
        $alumno = $students[$indice];
        echo "<tr><td>" . $alumno["nombre"] . "</td><td>" . $media . "</td></tr>";
    }
    echo "</table>";
    ?>




</body>

</html>