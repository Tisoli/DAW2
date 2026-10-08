const numeros = [9,8,2,5,4,6,10,0];
console.log(numeros);

console.log("filter");
const arr_aux = numeros.filter(a => a > 5);
console.log(arr_aux);

let saludo ="Hola";
console.log(saludo[0]);

const ciudades = ["Madrid" , "Sevilla", "Malaga" ,"Cordoba"];
const con_M = ciudades.filter(a => a[0] === "M");
console.log(con_M);

const palabros =["casa","peidra","palo","hormiga"];
const plur = palabros.map(palabra => palabra + "s");
console.log(plur);

// Dado un aray de numero crear otro que tenga solo numero para consefuirlo se debe hacer los siguiente;


