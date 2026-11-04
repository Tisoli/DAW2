.push
.unshift
numeros[numeros.length]
.pop
.shift
.splice(2, 1);
.slice();
const array2 = array1;
.indexOf
.lastIndexOf
.sort();
.reverse

const temperaturas = [3, -2, 7, -5, 0, 9, -1]; const bajoCero = temperaturas.filter(temperatura => temperatura < 0);
const precios = [20, 40, 60, 80]; const rebajados = precios.map(precio => precio * 0.75);
const factores = [2, 3, 4, 5]; const producto = factores.reduce((acumulador, numero) => acumulador * numero, 1); console.log(producto); // 120
const puntuaciones = [18, 42, 27, 65, 39]; const maxima = puntuaciones.reduce((acumulador, puntuacion) => { if (puntuacion > acumulador) { return puntuacion; } return acumulador; }, 0); console.log(maxima); // 65