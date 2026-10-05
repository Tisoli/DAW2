<?php
/* ============================================================
 * Practica 2: Arrays bidimensionales (temperaturas)
 * ============================================================
 * - Array 7x6: 7 dias x 6 ciudades, valores aleatorios entre -10 y 45 C.
 * - Calculos: temperatura minima y maxima, dia con mayor variacion
 *   y media por ciudad.
 * - Tabla HTML con estilos segun las condiciones pedidas.
 * - Tabla resumen.
 * ============================================================ */

// Nombres de los dias (filas)
$dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// Nombres de las ciudades (columnas)
$ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Zaragoza"];

// Numero de filas y columnas
$numDias = 7;      // 7 dias
$numCiudades = 6;  // 6 ciudades

// ------------------------------------------------------------
// 1) Crear el array bidimensional con valores aleatorios
// ------------------------------------------------------------
$temperaturas = [];
for ($i = 0; $i < $numDias; $i++) {
    for ($j = 0; $j < $numCiudades; $j++) {
        $temperaturas[$i][$j] = rand(-10, 45);
    }
}

// ------------------------------------------------------------
// 2) Calcular minimo, maximo y variacion por dia
// ------------------------------------------------------------
$tempMin = PHP_INT_MAX;      // temperatura minima global
$tempMax = PHP_INT_MIN;      // temperatura maxima global
$minCiudad = "";             // ciudad donde esta el minimo
$maxCiudad = "";             // ciudad donde esta el maximo
$minDia = "";                // dia del minimo
$maxDia = "";                // dia del maximo

$mayorVariacion = -1;        // mayor variacion (max - min) en un dia
$diaMayorVariacion = "";     // dia con mayor variacion
$variacionDiaMayor = 0;      // valor de esa variacion
$ciudadVariacion = "";       // ciudad con la temp mas alta de ese dia

// Recorremos todo el array
for ($i = 0; $i < $numDias; $i++) {
    $minDiaTemp = PHP_INT_MAX;
    $maxDiaTemp = PHP_INT_MIN;
    $maxDiaCiudad = "";

    for ($j = 0; $j < $numCiudades; $j++) {
        $temp = $temperaturas[$i][$j];

        // Minimo global
        if ($temp < $tempMin) {
            $tempMin = $temp;
            $minCiudad = $ciudades[$j];
            $minDia = $dias[$i];
        }

        // Maximo global
        if ($temp > $tempMax) {
            $tempMax = $temp;
            $maxCiudad = $ciudades[$j];
            $maxDia = $dias[$i];
        }

        // Minimo y maximo de este dia (para la variacion)
        if ($temp < $minDiaTemp) {
            $minDiaTemp = $temp;
        }
        if ($temp > $maxDiaTemp) {
            $maxDiaTemp = $temp;
            $maxDiaCiudad = $ciudades[$j];
        }
    }

    // Variacion (amplitud termica) de este dia
    $variacion = $maxDiaTemp - $minDiaTemp;
    if ($variacion > $mayorVariacion) {
        $mayorVariacion = $variacion;
        $diaMayorVariacion = $dias[$i];
        $variacionDiaMayor = $variacion;
        $ciudadVariacion = $maxDiaCiudad;
    }
}

// ------------------------------------------------------------
// 3) Media por ciudad
// ------------------------------------------------------------
$mediasCiudades = [];
$sumaTotales = array_fill(0, $numCiudades, 0);

for ($j = 0; $j < $numCiudades; $j++) {
    $suma = 0;
    for ($i = 0; $i < $numDias; $i++) {
        $suma += $temperaturas[$i][$j];
    }
    $mediasCiudades[$ciudades[$j]] = $suma / $numDias;
}

// Ciudad con la media mas alta
$mejorCiudad = $ciudades[0];
$mejorMedia = $mediasCiudades[$ciudades[0]];
foreach ($mediasCiudades as $ciudad => $media) {
    if ($media > $mejorMedia) {
        $mejorMedia = $media;
        $mejorCiudad = $ciudad;
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 2 - Temperaturas</title>
    <link rel="stylesheet" href="styles/style2.css">
</head>

<body>

    <h2>Practica 2: Temperaturas de 6 ciudades durante 7 dias</h2>

    <h3>Tabla de temperaturas</h3>
    <table>
        <thead>
            <tr>
                <th>Dia \ Ciudad</th>
                <?php foreach ($ciudades as $ciudad): ?>
                    <th class="day-header"><?= $ciudad ?></th>
                <?php endforeach; ?>
                <th>Media</th>
            </tr>
        </thead>
        <tbody>
            <?php for ($i = 0; $i < $numDias; $i++): ?>
                <tr>
                    <th><?= $dias[$i] ?></th>
                    <?php for ($j = 0; $j < $numCiudades; $j++):
                        $temp = $temperaturas[$i][$j];

                        // Construimos las clases segun las condiciones
                        $clases = [];

                        // Bajo 0 -> azul;  por encima de 35 -> rojo
                        if ($temp < 0) {
                            $clases[] = "bajo";
                        }
                        if ($temp > 35) {
                            $clases[] = "alto";
                        }

                        // Minimo global -> negrita subrayada
                        if ($temp == $tempMin) {
                            $clases[] = "minimo";
                        }

                        // Maximo global -> marron cursiva
                        if ($temp == $tempMax) {
                            $clases[] = "maximo";
                        }

                        // Fin de semana -> ultima columna (indice 5)
                        if ($j == $numCiudades - 1) {
                            $clases[] = "finde";
                        }

                        $clase = implode(" ", $clases);
                    ?>
                        <td class="<?= $clase ?>"><?= $temp ?>°C</td>
                    <?php endfor; ?>

                    <?php
                    // Media del dia (fila)
                    $sumaDia = array_sum($temperaturas[$i]);
                    $mediaDia = $sumaDia / $numCiudades;
                    ?>
                    <td><?= number_format($mediaDia, 1) ?>°C</td>
                </tr>
            <?php endfor; ?>

            <tr>
                <th>Media</th>
                <?php foreach ($mediasCiudades as $ciudad => $media): ?>
                    <td class="<?= ($ciudad == $mejorCiudad) ? 'mejor-media' : '' ?>">
                        <?= number_format($media, 1) ?>°C
                    </td>
                <?php endforeach; ?>
                <td></td>
            </tr>
        </tbody>
    </table>

    <h3>Tabla resumen</h3>
    <table class="resumen">
        <thead>
            <tr>
                <th>Descripcion</th>
                <th>Valor</th>
                <th>Ciudad</th>
                <th>Dia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Temperatura minima</td>
                <td class="bajo minimo"><?= $tempMin ?>°C</td>
                <td><?= $minCiudad ?></td>
                <td><?= $minDia ?></td>
            </tr>
            <tr>
                <td>Temperatura maxima</td>
                <td class="alto maximo"><?= $tempMax ?>°C</td>
                <td><?= $maxCiudad ?></td>
                <td><?= $maxDia ?></td>
            </tr>
            <tr>
                <td>Mayor variacion (max - min)</td>
                <td><?= $variacionDiaMayor ?>°C</td>
                <td><?= $ciudadVariacion ?></td>
                <td><?= $diaMayorVariacion ?></td>
            </tr>
            <tr>
                <td>Media mas alta</td>
                <td class="mejor-media"><?= number_format($mejorMedia, 1) ?>°C</td>
                <td><?= $mejorCiudad ?></td>
                <td>-</td>
            </tr>
        </tbody>
    </table>

</body>

</html>
