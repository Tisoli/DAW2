// 10 Realiza un script que recorra un vector con números y que de cómo resultado el menor número de
// todos.
let numeros = [15, 3, 42, 8, 27];

let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("El menor número es:", menor);