<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Simulacro</h1>
    </header>
    <main>
        <article>
            <h2>Ejercicio 1</h2>
            <?php
            /*
            EJERCICIO 1. (1,5 puntos) En exU1XY.php, crea el array bidimensional de 4 filas y 5
            columnas llamado $parImpar. En cada posición, pon el string "par" si la suma de fila +
            columna es par, e "impar" si es impar. Consideramos que filas y columnas empiezan por 0.
            Una vez creado el array, recórrelo e imprímelo para que aparezca:
            par, impar, par, impar, par
            impar, par, impar, par, impar
            par, impar, par, impar, par
            impar, par, impar, par, impar
            */

            use function PHPSTORM_META\type;

            $bid = [];
            $rows = 4;
            $cols = 5;
            for ($i = 0; $i < $rows; $i++) {
                for ($j = 0; $j < $cols; $j++) {
                    if (($i + $j) % 2 == 0) {
                        //Si es par
                        $bid[$i][$j] = "par";
                    } else {
                        //Impar
                        $bid[$i][$j] = "impar";
                    }
                }
            }

            //En cada iteración de este bucle, $value es cada una de las filas (es decir, un array)
            foreach ($bid as $value) {
                echo implode(", ", $value) . "<br>";
            }
            echo "<hr>";
            for ($i = 0; $i < sizeof($bid); $i++) {
                for ($j = 0; $j < sizeof($bid[$i]); $j++) {
                    echo $bid[$i][$j] . ", ";
                }
                echo "<br>";
            }
            ?>
        </article>
        <article>
            <h2>Ejercicio 2</h2>
            <?php
            /*En functionsXY.php, crea la unción basicStatistics. Recibe
                entre 0 y n parámetros. Devuelve un array asociativo con las siguientes claves:
                ● sum: la suma de todos los números
                ● max: el máximo
                ● min: el mínimo
                ● avg: la media
                ● neg: la cantidad de números negativos
                ● odd: un array con todos los números impares
                Si ha recibido 0 parámetros, devuelve false.
                Desde el fichero principal (exU1XYParte2.php) llama a la función e imprime los resultados
                en una lista no ordenada (<ul>). 
                */
            include "./functions/functionsXY.php";
            $bs = basicStatistics(1, 2, 3, -2, 9, -3);
            //Lo voy a imprimir fuera del PHP (porque quiero)
            //echo gettype([2, 2, 2]);
            ?>
            <ul>
                <?php
                foreach ($bs as $key => $value) {
                    //Cuanto la clave es "odd" el valor es un array: y no puedo imprimirlo con un echo sino con un implode.
                    if ($key == "odd") {
                        echo "<li>$key: " . implode(", ", $value) . "</li>";
                    } else {
                        echo "<li>$key: $value</li>";
                    }
                }
                ?>
            </ul>
        </article>
        <article>
            <h2>Ejercicio 3</h2>
            <?php
            var_dump(operations([15, 6, 8.3, 4])); // [4, 6, 8.3, 15]
            var_dump(operations([15, 6, 8.3, 4], "order", false)); // [15, 8.3, 6, 4]
            var_dump(operations([15, 6, 8.3, 4], "sum")); // 33.3
            var_dump(operations([15, 6, 8.3, 4], "product")); // 2988
            ?>
        </article>
        <article>
            <h2>Ejercicio 4</h2>
            <?php
            /*Realiza las siguientes operaciones con el array $employees:
            1. (0,5 puntos) Recorre el array con un bucle e imprime en una lista ordenada <ol> el nombre y el salario de les empleades del departamento Sales:
            2. (0,7 puntos) Calcula el salario medio por departamento, e imprime cada uno en un párrafo <p>:
            3. (0,8 puntos) Recorre el array con un bucle e imprime en una lista no ordenada los
            nombres de les empleades del departamento de IT ordenados alfabéticamente
            */
            include "employees.php";
            //Apartado a)
            echo "<ol>";
            foreach ($employees as $employee) {
                if ($employee["department"] === "Sales") {
                    echo "<li>Nombre: {$employee['name']}. Salario: {$employee['salary']}</li>";
                    echo "<li>Nombre: " . $employee['name'] . ". Salario: " . $employee['salary'] . "</li>";
                }
            }
            echo "</ol>";
            //Apartado b)
            $sumIt = 0;
            $cantidadIt = 0;
            $sumSales = 0;
            $cantidadSales = 0;
            foreach ($employees as $employee) {
                if ($employee["department"] === "Sales") {
                    $cantidadSales++;
                    $sumSales += $employee["salary"];
                } else {    //IT
                    $cantidadIt++;
                    $sumIt += $employee["salary"];
                }
            }
            ?>
            <p>El salario medio de IT es <?= $sumIt / $cantidadIt ?></p>
            <p>El salario medio de Sales es <?= $sumSales / $cantidadSales ?></p>

            <?php
            //Apartado c) Recorre el array con un bucle e imprime en una lista no ordenada los nombres de les empleades del departamento de IT ordenados alfabéticamente
            //Guardo todos los nombres de empleados de IT en un array para luego poder ordenarlo:
            $it = [];
            foreach ($employees as $employee) {
                if ($employee['department'] == "IT") {
                    $it[] = $employee["name"];
                }
            }
            //Ordeno alfabéticamente
            sort($it);
            ?>
            <ul>
                <?php foreach ($it as $employee) : ?>
                    <li><?= $employee ?></li>
                <?php endforeach; ?>
            </ul>
        </article>
    </main>
    <footer>

    </footer>


</body>

</html>