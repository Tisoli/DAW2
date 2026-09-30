<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Students</title>
    <link rel="stylesheet" href="styles/style.css">
</head>

<body>
    <?php
    $students = [
        ["nombre" => "Ana García", "matematicas" => 8.5, "historia" => 7.0, "programacion" => 9.0],
        ["nombre" => "Luis Martínez", "matematicas" => 6.0, "historia" => 8.5, "programacion" => 7.5],
        ["nombre" => "Marta Rodríguez", "matematicas" => 9.0, "historia" => 6.5, "programacion" => 8.0],
        ["nombre" => "Carlos López", "matematicas" => 7.5, "historia" => 9.0, "programacion" => 6.5],
        ["nombre" => "Elena Torres", "matematicas" => 8.0, "historia" => 7.5, "programacion" => 9.5]
    ];
    ?>

    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Matematicas</th>
                <th>Historia</th>
                <th>Programacion</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($students as $student):?>
                <tr>
                    <td>
                        <?= $student['nombre'];?>
                    </td>
                    <td class =
                    <?php
                    if($student['matematicas'] >= 8){
                        echo "green";
                    }else{
                        echo "red";
                    }
                    ?>
                    >
                        <?= $student['matematicas'];?>
                    </td>
                    <td class="<?php
                    if($student['historia'] >= 8){
                        echo"negrita";
                    }
                    ?>
                    <?php
                    if($student['historia'] >= 9){
                        echo"red";
                    }
                    ?>
                    ">
                        <?= $student['historia'];?>

                    </td>
                    <td>
                        <?= $student['programacion'];?>

                    </td>
                </tr>
                <?php
            endforeach;
            ?>
        </tbody>
    </table>
</body>

</html>