<?php
include "./ejercicioArrays.php";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>biblioteca</title>
</head>

<body>
    <?php
    // 1) Mostrar el título del segundo libro de "Ciencia Ficción"
    echo $biblioteca["Ciencia Ficción"][1]["titulo"];
    ?>
    <br>
    <?php
    // 2) Muestra el autor de "Sapiens" (recuerda que "autores" es un array,aunque en este caso solo tenga un elemento).
    
    echo $biblioteca["Historia"][0]["autores"][0];
    ?>
    <br>
    <?php
    // 3) Muestra cuántos ejemplares hay en la sede "Norte" del libro "Fundación".
    
    echo $biblioteca["Ciencia Ficción"][0]["ejemplares"]["Norte"];
    ?>
    <br>
    <?php
    // 4) Muestra la nota que puso el usuario "pedro22" en su reseña de "Sapiens" (accede directamente por posición dentro del array de reseñas).
    
    echo $biblioteca["Historia"][0]["resenas"][1]["nota"];
    ?>

    <?php
    $resenas = $biblioteca["Historia"][0]["resenas"];

    foreach ($resenas as $resena) {
        if ($resena["usuario"] === "pedro22") {
            echo $resena["nota"];
            break;
        }
    }
    ?>
<br>
    <?php
    // 5) Comprueba si "Neuromante" tiene la clave "resenas" definida. Muestra un mensaje distinto según el resultado.
    $libro = $biblioteca["Ciencia Ficción"][1]; // Neuromante
    
    if (isset($libro["resenas"])) {
        echo "El libro tiene reseñas.";
    } else {
        echo "El libro no tiene reseñas.";
    }   
    ?>
<br>
<?php
    // 6) Comprueba si "Veinte poemas de amor" tiene la clave "ejemplares". Si no la tiene, añádele una con 0 ejemplares en "Central".

    $libro =& $biblioteca["Poesía"][0];
    if(isset($libro["ejemplares"])){
        echo "Si";
    } else{
        $libro["ejemplares"] = ["Central" => 0];
    }
    print_r($biblioteca["Poesía"][0]);
?>
<br>
<?php
// Cambia el año de publicación de "Neuromante" a 1984 → 1985 (modifica directamente el array $biblioteca).

    /*$libro =& $biblioteca["Ciencia Ficción"][1];
    $libro =["anio" => 1985];
    print_r($biblioteca["Ciencia Ficción"][1]);*/
$biblioteca["Ciencia Ficción"][1]["anio"] = 1985;

?>
<br>
<?php
// 8) Recorre todas las categorías y, dentro de cada una, muestra el título de cada libro, con el formato:"Ciencia Ficción -> Fundación"
var_dump($biblioteca);
foreach ($biblioteca as $categoria => $libros) {
    foreach ($libros as $libro) {
        echo $categoria . " -> " . $libro["titulo"] . "<br>";
    }
}
?>


</body>

</html>