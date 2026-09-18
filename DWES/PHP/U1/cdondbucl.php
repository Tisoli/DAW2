<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicionales y bucles</title>
</head>
<body>
    <h2>Condicionales</h2>
    <?php
    //Si la edad es manor a 18 que nuestres eres menor edad

    $age = 17;
    if($age >=18){
        echo "<p>Eres mayor edad </p> ";

        }else{

            echo"<p>Eres menor edad </p> ";
        }
    $mensaje = $age >=18 ?"mayor":"menor";
    echo $mensaje;

    echo "<br>";

    $dia = 2;
    switch($dia){
        case 1 :
            echo"Lunes";
            break;
        case 2 :
            echo"Martes";
            break;
        case 3 :
            echo"Miercoles";
            break;
        default:
            echo"Otro dia";
            break;
    }

    echo "<br>";

    $nombre = match($dia){
        1 => "Lunes",
        2 => "Martes",
        3 => "Miercoles",
        4 => "Jueves",
        5 => "Viernes",
        6,7 => "Fin de semana",
        default => "No valido"
        
    };

    echo $nombre;

    echo "<br>";

    for($i = 0; $i <= 10; $i++){
        echo $i;
        if($i<10){
            echo ", ";
        }
    }

    echo "<br>";

    for($i = 0; $i <= 100; $i++){
        if($i % 5 == 0 && $i % 7 == 0){
            echo $i . ",";
        }
    }
           
    echo "<br>";

    $i= 1;
    while($i<=100){
        if($i % 5 == 0 && $i % 7 == 0){
            echo $i . ",";
        }        
        $i ++;
        
    }

    echo "<br>";

    $cars = array("seat","audi","BMW");
    $food = ["tomates","avocados","carrots"];
    $food[3]= "eggplants";
    foreach ($food as $as){
        echo "$as <br>";
    }

    echo count($cars);  

    


    ?>
</body>
</html>