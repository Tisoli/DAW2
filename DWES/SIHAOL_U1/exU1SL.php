<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    echo "<h2>Ejercicio1.1</h2>";

    $grid = array();

    for ($row = 0; $row < 5; $row++) {
        for ($col = 0; $col < 5; $col++) {
            if ($col == $row) {
                $grid[$row][$col] = "D";
            } elseif ($col > $row) {
                $grid[$row][$col] = "A";
            } else {
                $grid[$row][$col] = "B";
            }
        }
    }

    echo "\n";
    foreach ($grid as $row) {
        echo implode(", ", $row) . "<br>";
    }

    echo "<h2> Ejejrcicio 1.2</h2>";

    echo "<table border=1>";
    foreach ($grid as $row) {
        echo "  <tr>";
        foreach ($row as $k) {
            echo "    <td>$k</td>";
        }
        echo "  </tr>";
    }
    echo "</table>";

    echo "<h2>Ejercicio2</h2>";

    include "./functions/functionsSL.php";

    $letra = textStats("PHP", "server", "Laravel", "web", "arrays", "Madrid");

    if ($letra === false) {
        echo "<p>No se recibieron palabras.</p>";
    } else {
        echo "<ul>";
        foreach ($letra as $key => $value) {
            echo "<li>$key: $value</li>";
        }
        echo "</ul>";
    }

    echo "<h2>Ejercicio3</h2>";
    $nums = [7, 4, -12, 0, -9, 3, 8];
    $tipos = ["par", "impar", "primo", "positivo", "negativo"];
    foreach ($tipos as $tipo) {
        $filtrados = filterNumbers($nums, $tipo);
        echo "<p>" . ucfirst($tipo) . "s: [" . implode(", ", $filtrados) . "]</p>";
    }

    echo "<h2>Ejercicio4</h2>";

    include "./data/products.php";
    echo "<ol>";
    foreach($products as $product){
        if($product["stock"] < 5){
            echo "<li>" . $product['name'] . "-" . $product['price'] . "€ (stock: " . $product['stock'] . ")";
        }
    }
    
    $inventario = array();
    foreach ($products as $product) {
        $categoria = $product["category"];
        $valor = $product["price"] * $product["stock"];
        if (!isset($inventario[$categoria])) {
            $inventario[$categoria] = 0;
        }
        $inventario[$categoria] += $valor;
    }
    
    foreach ($inventario as $categoria => $valor) {
        echo "<p>" . $categoria . " inventory es: " . $valor . "€</p>";
    }



    $orden = [];
    foreach($products as $product){
        if($product["category"] === "Electronics"){
        $orden[] = $product["price"];
        }
    }
    sort($orden);
    echo "<ul>";
    foreach($orden as $product){
        echo "<li>" . $product["name"] . "</li>"; 
    }

    
    ?>


</body>

</html>