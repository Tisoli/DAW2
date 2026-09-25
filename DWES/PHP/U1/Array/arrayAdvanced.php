<?php
include "./restaurante.php";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Array de restaurante</h1>
    <p>La direccion de Carpaccion es:
        <?php
        echo $p[0]["address"];
        ?>
    </p>
    <p>
        El numero de camareros de luigi es:
        <?= $p[1]["employees"][1]; ?>
    </p>
    <p>
        El numero de bebida de Carpaccion es:
        <?php
        echo $p[0]['quantity']['drinks'];
        ?>
    </p>
    <p>
        El nombre de los dos restaurante obtenidos con un bucle es :
    <ul>
        <li>
            <?php
            foreach ($p as $r) {
                echo $r["name"] . "<br>" . " ";
            }
            ?>
        </li>
    </ul>
    </p>
    <p>Los empleados de ambos restaurante:</p>
    <?php
    foreach ($p as $r) {
        echo $r["name"] . ":";
        if (isset($r["employees"])) {
            foreach ($r["employees"] as $k) {

                echo " " . $k . ". ";
            }
            echo "<br>";
        }
    }
    ?>
    <p>Tabla de restaurantes y empleados</p>

    <table border="1">
        <tr>
            <th>Nombre</th>
            <th>Empleados</th>
        </tr>
        <?php foreach ($p as $e): ?>
            <?php
            echo "<tr>";
            echo "<td>" . $e["name"] . ":</td>";
            echo "<td>";
            if (isset($e["employees"])) {
                foreach ($e["employees"] as $k) {
                    echo $k . ". ";
                }
            }
            echo "</td>";
            echo "</tr>";
            ?>
        <?php endforeach; ?>

    </table>
    <!-- funcion que reciba un array asociativo e imprima en ina tabla las claves y el tipo del valor que tiene -->
            <?php
        function clavesYTipos($array): string
        {
            $ret = '<table border="1">';
            $ret .= "<tr>
                <th>Nombre</th>
                <th>Tipo</th>
            </tr>";
            foreach ($array as $p){
                foreach($p as $key => $value){
                    $ret .= "<tr>
                    <td>$key</td>
                    <td>.". gettype($value) ."</td>
                    </tr>";
                }
            }

            $ret .="</table>";
            return $ret;
        }
            echo clavesYTipos($p)
        ?>
</body>

</html>