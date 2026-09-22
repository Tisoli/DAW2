let valida = false;
let numeroFinal = 1;
let numero;

while (!valida) {
    let entrada = prompt("Dime un número entero:");

    numero = Number(entrada);

    if (entrada.trim() !== "" && Number.isInteger(numero)) {
        valida = true;
    } else {
        alert("El número es vacío o no es un entero. Inténtalo de nuevo.");
    }
}

if (valida) {
    numeroFinal = 1;
    for (let i = 1; i <= numero; i++) {
        numeroFinal *= i;
    }
    console.log(`El factorial del número ${numero} es: ${numeroFinal}`);
}

