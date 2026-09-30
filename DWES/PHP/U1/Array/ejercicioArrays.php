<?php
$biblioteca = [
    "Ciencia Ficción" => [
        [
            "titulo" => "Fundación",
            "autores" => ["Isaac Asimov"],
            "anio" => 1951,
            "ejemplares" => [
                "Central" => 5,
                "Norte" => 2,
                "Sur" => 0
            ],
            "resenas" => [
                ["usuario" => "ana92", "nota" => 5, "comentario" => "Imprescindible"],
                ["usuario" => "luis_r", "nota" => 4, "comentario" => "Muy buena"],
                ["usuario" => "luis_r", "nota" => 9, "comentario" => "Muy buena"],

            ]
        ],
        [
            "titulo" => "Neuromante",
            "autores" => ["William Gibson"],
            "anio" => 1984,
            "ejemplares" => [
                "Central" => 1,
                "Norte" => 0
            ]
            // esta obra aún no tiene reseñas
        ],

    ],
    "Historia" => [
        [
            "titulo" => "Sapiens",
            "autores" => ["Yuval Noah Harari"],
            "anio" => 2011,
            "ejemplares" => [
                "Central" => 8,
                "Norte" => 3,
                "Sur" => 4
            ],
            "resenas" => [
                ["usuario" => "marta_h", "nota" => 5, "comentario" => "Cambia la forma de ver el mundo"],
                ["usuario" => "pedro22", "nota" => 3, "comentario" => "Interesante pero denso"],
                ["usuario" => "sofia_l", "nota" => 4, "comentario" => "Muy recomendable"]
            ]
        ],
        [
            "titulo" => "Otra libro",
            "autores" => ["Yuval Noah Harari"],
            "anio" => 2011,
            "ejemplares" => [
                "Central" => 8,
                "Norte" => 3,
                "Sur" => 4
            ],
            "resenas" => [
                ["usuario" => "marta_h", "nota" => 5, "comentario" => "Cambia la forma de ver el mundo"],
                ["usuario" => "pedro22", "nota" => 3, "comentario" => "Interesante pero denso"],
                ["usuario" => "sofia_l", "nota" => 4, "comentario" => "Muy recomendable"]
            ]
        ],
    ],
    "Poesía" => [
        [
            "titulo" => "Veinte poemas de amor",
            "autores" => ["Pablo Neruda"],
            "anio" => 1924
            // sin ejemplares ni reseñas todavía (recién catalogado)
        ]
    ]
];


/* ============================================================
   EJERCICIOS DE ACCESO A VALORES
   Usa la variable $biblioteca definida arriba. Escribe el código
   justo debajo de cada enunciado.
   ============================================================ */



// 13) Recorre TODO el array (categorías, libros y reseñas) y cuenta
//     cuántas reseñas en total tienen nota igual o superior a 4,
//     mostrando el total al final junto con el título del libro que
//     acumula más reseñas de ese tipo.


// 14) Recorre las categorías y muestra cuántos libros hay en cada una,
//     ordenando el resultado de mayor a menor número de libros
//     (pista: guarda los totales en un array nuevo y ordénalo con
//     arsort() antes de recorrerlo para mostrarlo).