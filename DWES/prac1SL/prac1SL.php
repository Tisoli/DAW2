<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">

    <title>Sihao li</title>
</head>

<body>
<h2>Sihao li</h2>
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

<br>

<?php

$filterByType = [1, 4, 7, -3, 2, 8, 11, 5, -80];

function esPrimo($n)
{
    if ($n < 2) {
        return false;
    }
    for ($i = 2; $i * $i <= $n; $i++) {
        if ($n % $i == 0) {
            return false;
        }
    }
    return true;
}

function filterByType($array, $tipo)
{
    $resultado = [];
    foreach ($array as $n) {
        $incluir = false;
        switch ($tipo) {
            case "par":
                $incluir = ($n % 2 == 0);
                break;
            case "impar":
                $incluir = ($n % 2 != 0);
                break;
            case "primo":
                $incluir = esPrimo($n);
                break;
            case "positivo":
                $incluir = ($n > 0);
                break;
            case "negativo":
                $incluir = ($n < 0);
                break;
            default:
                $incluir = false;
        }
        if ($incluir) {
            $resultado[] = $n;
        }
    }
    return $resultado;
}

$tipos = ["par", "impar", "primo", "positivo", "negativo"];
foreach ($tipos as $tipo) {
    $filtrados = filterByType($filterByType, $tipo);
    echo "<p>" . ucfirst($tipo) . "s: [" . implode(", ", $filtrados) . "]</p>";
}

?>

<br>

<?php


$datos = [4, 4, 8, 15, 16, 23, 42];

function calcularMedia($array)
{
    return array_sum($array) / count($array);
}


function calcularMediana($array)
{
    $ordenado = $array;
    sort($ordenado);                
    $n = count($ordenado);
    $medio = intdiv($n, 2);      

    if ($n % 2 == 0) {
        return ($ordenado[$medio - 1] + $ordenado[$medio]) / 2;
    } else {
  
        return $ordenado[$medio];
    }
}
function calcularModa($array)
{
    $frecuencias = array_count_values($array); 
    $maxFrecuencia = max($frecuencias);
    $modas = array_keys($frecuencias, $maxFrecuencia); 
    return $modas;
}

$media = calcularMedia($datos);
$mediana = calcularMediana($datos);
$modas = calcularModa($datos);

echo "<h3>Estadisticas</h3>";
echo "<p><strong>Media:</strong> " . round($media, 2) . "</p>";
echo "<p><strong>Mediana:</strong> " . $mediana . "</p>";
echo "<p><strong>Moda:</strong> " . implode(", ", $modas) . "</p>";

?>

<br>

<?php
$texto = [["Hola"], ["todos"]];
function analyzeWords($texto)
{
    $palabras = [];
    foreach ($texto as $q) {
        if (is_array($q)) {
            foreach ($q as $palabra) {
                $palabras[] = $palabra;
            }
        } else {
            $palabras[] = $q;
        }
    }
    if (empty($palabras)) {
        return [
            "number_of_words" => 0,
            "longest_word" => "",
            "shortest_word" => "",
        ];
    }

    $numberOfWords = count($palabras);
    $longest = $palabras[0];
    $shortest = $palabras[0];

    foreach ($palabras as $palabra) {
        if (strlen($palabra) > strlen($longest)) {
            $longest = $palabra;
        }
        if (strlen($palabra) < strlen($shortest)) {
            $shortest = $palabra;
        }
    }

    return [
        "number_of_words" => $numberOfWords,
        "longest_word" => $longest,
        "shortest_word" => $shortest,
    ];
}

$resultado = analyzeWords($texto);

echo "<p><strong>Numero de palabras:</strong> " . $resultado["number_of_words"] . "</p>";
echo "<p><strong>Palabra mas larga:</strong> " . $resultado["longest_word"] . "</p>";
echo "<p><strong>Palabra mas corta:</strong> " . $resultado["shortest_word"] . "</p>";

?>


<br>
<?php
$temperatura = 2;
$celsius = $temperatura;
$kelvin = $celsius + 273.15;
$fahrenheit = ($celsius * 9/5) + 32;

echo "Celsius: " . $celsius . " °C<br>";
echo "Kelvin: " . $kelvin . " K<br>";
echo "Fahrenheit: " . $fahrenheit . " °F<br>";
?>

<br>
<?php
$productos = [
    'prod1' => [
        'nombre' => 'portátil gaming',
        'precio' => 899.99,
        'stock' => 15,
        'categoria' => 'electrónica'
    ],
    'prod2' => [
        'nombre' => 'mesa escritorio',
        'precio' => 120.50,
        'stock' => 8,
        'categoria' => 'hogar'
    ],
    'prod3' => [
        'nombre' => 'ratón inalámbrico',
        'precio' => 25.99,
        'stock' => 0,
        'categoria' => 'electrónica'
    ]
];

$productosConDescuento = [
    'prod1' => [
        'nombre' => 'portátil gaming',
        'precio' => 899.99,
        'stock' => 15,
        'categoria' => 'electrónica',
        'descuento' => 10
    ],
    'prod2' => [
        'nombre' => 'mesa escritorio',
        'precio' => 120.50,
        'stock' => 8,
        'categoria' => 'hogar'
    ],
    'prod3' => [
        'nombre' => 'ratón inalámbrico',
        'precio' => 25.99,
        'stock' => 0,
        'categoria' => 'electrónica',
        'descuento' => 25
    ]
];

    function calcularDescuento($precio, $descuento)
{
    return $precio * (1 - $descuento / 100);
}

function formatPrice($precio)
{
    return number_format($precio, 2, ",", ".") . " €";
}


function calculateIVA($precio, $iva = 21)
{
    return $precio * (1 + $iva / 100);
}


function getStock($productos)
{
    $enStock = [];
    foreach ($productos as $clave => $producto) {
        if ($producto['stock'] > 0) {
            $enStock[$clave] = $producto;
        }
    }
    return $enStock;
}


function formatearNombre($nombre)
{
    return ucfirst($nombre);
}

$huo = getStock($productos);

echo "<h3>Productos con stock</h3>";
echo "<table border='1'>";
echo "<thead>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Precio con IVA</th>";
echo "<th>Stock</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";

foreach ($productos as $producto) {

    if ($producto['stock'] > 10) {
        $claseStock = "stock-verde";
    } elseif ($producto['stock'] > 0) {
        $claseStock = "stock-amarillo";
    } else {
        $claseStock = "stock-rojo";
    }

    echo "<tr>";
    echo "<td>" . formatearNombre($producto['nombre']) . "</td>";
    echo "<td>" . formatPrice(calculateIVA($producto['precio'])) . "</td>";
    echo "<td class='" . $claseStock . "'>" . $producto['stock'] . "</td>";
    echo "</tr>";
}

echo "</tbody>";
echo "</table>";

echo "<h3>Productos con descuento</h3>";
echo "<table border='1'>";
echo "<thead>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Precio con IVA</th>";
echo "<th>Stock</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";

foreach ($productosConDescuento as $producto) {
    if ($producto['stock'] > 10) {
        $claseStock = "stock-verde";
    } elseif ($producto['stock'] > 0) {
        $claseStock = "stock-amarillo";
    } else {
        $claseStock = "stock-rojo";
    }

    $precioBase = calculateIVA($producto['precio']);

    echo "<tr>";
    echo "<td>" . formatearNombre($producto['nombre']) . "</td>";

    if (isset($producto['descuento'])) {
        $precioFinal = calculateIVA(calcularDescuento($producto['precio'], $producto['descuento']));
        echo "<td>";
        echo "<span class='precio-ori'>" . formatPrice($precioBase) . "</span> ";
        echo "<span class='precio-descuento'>" . formatPrice($precioFinal) . "</span>";
        echo "</td>";
    } else {
        echo "<td>" . formatPrice($precioBase) . "</td>";
    }

    echo "<td class='" . $claseStock . "'>" . $producto['stock'] . "</td>";
    echo "</tr>";
}

echo "</tbody>";
echo "</table>";

?>
</body>

</html>
