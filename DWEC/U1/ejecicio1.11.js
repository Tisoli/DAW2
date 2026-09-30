// 11. Realiza un script que recorra un vector con números y que de cómo resultado el mayor número de todos.
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log("El mayor número es:", mayor);