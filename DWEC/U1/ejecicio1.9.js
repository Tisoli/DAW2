// 9.Realizar un script que tome un array de dos dimensiones y lo convierta en un vector (array de una dimensión). No se conoce de antemano el tamaño del array, tanto en filas como en columnas. El script debe ser capaz de realizar esta conversión independientemente de las filas y columnas que tenga el array de dos dimensiones.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let vector = [];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        vector.push(matriz[i][j]);
    }
}
console.log("Vector resultante:", vector);
