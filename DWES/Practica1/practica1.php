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



</body>

</html>