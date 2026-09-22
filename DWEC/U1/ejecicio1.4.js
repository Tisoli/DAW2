let valida = false;
let total = []

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
    for(let i=0;i<=10 ;i++){
        total.push([i,"x",numero,"=",numero*i]);
    }
    console.table(total);
}