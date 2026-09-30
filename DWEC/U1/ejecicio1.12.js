// 12. Crear un script que elimine un elemento de un vector. El elemento se debe introducir por prompt. EL
// vector buscará el elemento y, si lo encuentra, lo eliminará y el vector tendrá un elemento menos. eje
let v = [10, 20, 30, 40, 50, 30, 60];

let elemento = prompt("Introduce el elemento que quieres eliminar:");

let indice = v.indexOf(Number(elemento)) !== -1 ? v.indexOf(Number(elemento)) : v.indexOf(elemento);

if (indice !== -1) {
    v.splice(indice, 1);
    console.log("Elemento eliminado. Vector resultante:", v);
    console.log("El vector tiene ahora " + v.length + " elementos.");
} else {
    console.log("El elemento '" + elemento + "' no se encontró en el vector.");
}