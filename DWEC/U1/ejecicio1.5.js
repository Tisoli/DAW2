let encontrado = false;
const diccionario = [
    ["hola", "hello"],
    ["azul", "blue"],
    ["rojo", "red"],
];
    let palabra = prompt("Dime un palabla de castellano:");

let i = 0;
while (i < diccionario.length && !encontrado) {
    if (diccionario[i][0] === palabra) {
        encontrado = true;
        console.log(`"${palabra}" en inglés es: "${diccionario[i][1]}"`);
    }
    i++;
}

if (!encontrado) {
    console.log(`La palabra "${palabra}" no está en el diccionario.`);
}