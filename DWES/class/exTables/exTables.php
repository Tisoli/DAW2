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
<thead>
    <tr>
        <th>X</th>
        <?php
        for($i = 0; $i < 10; $i++){
            echo "<th>" . $i . "</th>";
        }
        ?>
    </tr>
</thead>
<tbody>
    <?php
    for ($j = 0; $j <= 9; $j++) {
        echo "<tr>";
        echo "<td>" . $j . "</td>";

        for ($i = 0; $i <= 9; $i++) {
            echo "<td>" . ($j * $i) . "</td>";
        }

        echo "</tr>";
    }
    ?>
</tbody>
</table>




</body>

</html>