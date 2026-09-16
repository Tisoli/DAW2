<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
    <p>La siguiente linea esta hecha en PHP</p>
    <?php
        echo "<p>Hello world!</p>";
    ?>

    <p>Esta linea tambien:</p>
    <p>
        <?php 
        echo "Hola mundo";
        echo "<br>";
        echo "akdajl";
        
        // Variable:
        /* hello */

        $name = "asdf";
        $surname ="Li";
        echo "<br>";
        echo $name . " - " . $surname;
        echo "<br>";
        echo "$name ---- $surname";
        echo "<br>";

        $age = 20;
        $suma = 21;
        echo "<p> Tengo $age años<p>";
        echo "<br>";
        var_dump($suma);

        define("IVA_GENERAL",0.21);
        const IVA_REDUCIDO = 0.08;
        $precio = 99.7;
        echo "<p>El precio IVA es :" . $precio * IVA_GENERAL . "</p>";
        echo "<p>El precio con IVA es :" . $precio + $precio * IVA_GENERAL . "</p>";
        echo "<p>El precio con IVA reducido es :" . $precio + $precio * IVA_REDUCIDO . "</p>";
        


        ?>


    </p>
</body>
</html>