
console.log("Ejercicio 6.1");

const temperaturas = [3, -2, 7, -5, 0, 9, -1];
const temperaturasNegativas = temperaturas.filter(temp => temp < 0);
console.log(temperaturasNegativas);
console.log(temperaturas);


console.log("Ejercicio 6.2");

const precios = [12, 45, 8, 75, 30, 120, 19];
const preciosMayores = precios.filter(precio => precio > 30);
const preciosMenores = precios.filter(precio => precio <= 30);
console.log(preciosMayores);
console.log(preciosMenores);

console.log("Ejercicio 7.1");

const precios1 = [20, 40, 60, 80];
const preciosDescuento = precios1.map(precio => precio * 0.75);
console.log(preciosDescuento);
console.log(precios1);

console.log("Ejercicio 7.2");

const metros = [1.5, 3, 0.75, 10];
const centimetros = metros.map(metro => metro * 100);
console.log(centimetros);


console.log("Ejercicio 8.1");

const factores = [2, 3, 4, 5];
const producto = factores.reduce((acumulador, factor) => acumulador * factor, 1);
console.log(producto);

console.log("Ejercicio 8.2");

const puntuaciones = [18, 42, 27, 65, 39];
const maxima = puntuaciones.reduce((acumulador, puntuacion) => {
    return acumulador > puntuacion ? acumulador : puntuacion;
}, 0);
console.log(maxima);