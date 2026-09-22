let valida = false;
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
    if (numero % 2 == 0) {
        console.log(`El número ${numero} es par`);
    }
    else {
        console.log(`El número ${numero} es impar`);

    }
}