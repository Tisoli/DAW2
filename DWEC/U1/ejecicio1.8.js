let valida = false;
const usuarios = [
    ["sihao", "12345"],
    ["dani", "56789"],
];

let login = prompt("Dime tu usuario");

let i = 0;
let indiceEncontrado = -1;

while (i < usuarios.length) {
    if (usuarios[i][0] === login) {
        indiceEncontrado = i;
        break;
    }
    i++;
}

if (indiceEncontrado !== -1) {
    let contrasena = prompt("contraseña");

    if (usuarios[indiceEncontrado][1] === contrasena) {
        valida = true;
    }
}

if (valida) {
    console.log("bienvenida");
} else {
    console.log("error");
}