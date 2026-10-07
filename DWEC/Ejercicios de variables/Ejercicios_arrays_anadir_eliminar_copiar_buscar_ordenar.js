console.log("Ejercicio 1.1");

const colores = ["rojo", "verde", "azul"];
colores.push("amarillo");
colores.unshift("negro");
console.log(colores);
console.log(colores.length);

console.log("Ejercicio 1.2");

const numeros = [10, 20, 30];
numeros.push(40);
numeros[5] = 60;
console.log(numeros);
console.log(numeros[4]);

console.log("Ejercicio 2.1");

const animales = ["perro", "gato", "conejo", "loro", "pez"];
animales.pop();
animales.shift();
console.log(animales);

console.log("Ejercicio 2.2");

const numeros1 = [5, 10, 15, 20, 25, 30];
console.log(numeros1);
numeros1.splice(2,1);
console.log(numeros1);
numeros1.splice(2,2);
console.log(numeros1);

console.log("Ejercicio 2.3");

const valores = [1, 2, 3, 4, 5, 6, 7];
valores.length = 4;
console.log(valores);

console.log("Ejercicio 3.1");

const original = [10, 20, 30, 40, 50];
const copia = original.slice();
copia[0]= 15;
console.log(original);
console.log(copia);

console.log("Ejercicio 3.2");

const datos = [2, 4, 6, 8, 10, 12, 14];
const copiadatos = datos.slice(2,5);
const copiadatos1 = datos.slice(4);
console.log(copiadatos);
console.log(copiadatos1);

console.log("Ejercicio 3.3");

const array1 = [1, 2, 3];
const array2 = array1;
array2[0]= 99;
console.log(array1);
console.log("Todos han sido modificados.")

console.log("Ejercicio 4.1");

const frutas = ["pera", "manzana", "uva", "manzana", "kiwi"];
console.log(frutas.indexOf("manzana"));
console.log(frutas.indexOf("kiwi"));
console.log(frutas.indexOf("naranja"));
console.log(frutas.indexOf("manzana",2));

console.log("Ejercicio 4.2");

console.log(frutas.lastIndexOf("manzana"));
console.log(frutas.lastIndexOf("pera"));
console.log(frutas.lastIndexOf("naranja"));


console.log("Ejercicio 4.3");

const valores1 = [10, "10", 20, "20"];
console.log(valores1.indexOf(10));
console.log(valores1.indexOf("10"));
console.log(valores1.indexOf(20));
console.log(valores1.indexOf("20"));


console.log("Ejercicio 5.1");

const letras = ["d", "a", "c", "b"];
letras.sort();
console.log(letras);

console.log("Ejercicio 5.2");

const numeros2 = [3, 20, 100, 5, 12];
numeros2.sort();
console.log(numeros2);
console.log("Orden de codificación de caracteres UTF-16");

console.log("Ejercicio 5.3");

const valores2 = [1, 2, 3, 4, 5];
valores2.reverse();
console.log(valores2);

console.log("Ejercicio 5.4");

const palabras = ["pera", "Manzana", "uva", "melón"];

palabras.sort();
console.log(palabras);
console.log("Debido a la ordenación UTF-16, primero se ordena la AZ en mayúsculas y luego la AZ en minúsculas.")
