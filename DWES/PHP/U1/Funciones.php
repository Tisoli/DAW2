<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>

<body>
    <?php

    // funcion que reciba un array de notas y devuelve la cantidad de personas aprobadas
    
    function aprobadas(array $notas): int
    {
        $num = 0;
        foreach ($notas as $n) {
            if ($n >= 5) {
                $num++;
            }

        }
        return $num;
    }

    $sihao = [4.0, 5.1, 3.1, 7.8, 9.4];
    echo aprobadas($sihao);
    var_dump(aprobadas($sihao))

        ?>
    <br>
    <?php
    // funcion que reciba dos strings y devuelva la concatenacion de los dos
    
    function concatenacion($a, $b)
    {
        return $a . $b;
    }
    $nombre = "sihao";
    $apellido = "li";
    echo concatenacion($nombre, $apellido);
    ?>
    <br>
    <?php
    function saludo($nombre, $saludo = "Hola")
    {
        return $saludo . " " . $nombre;
    }
    echo "<br>";
    echo saludo("Juan");
    echo "<br>";
    echo saludo("Juan", "Buenos dias");

    ?>
    <br>
    <?php
    function ordel(array $arr, bool $boo = false): array
    {
        if ($boo) {
            sort($arr); 
        } else {
            rsort($arr); 
        }
        return $arr;
    }

    var_dump(ordel([1, 5, 8, 2, 3, 7, 9, 10, 25, 4]));
    
    echo "\n";

    var_dump(ordel([1, 5, 8, 2, 3, 7, 9, 10, 25, 4], true));
    ?>
    <br>
    <?php
        function suma (...$nums){
            return array_sum($nums);
        }


    echo suma (1,5,231,141,141,123,52145,235421,14,143);




    ?>
</body>

</html>