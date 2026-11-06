// EJERCICIO 6

// Apartado a
let exprecion = function (nota) {
    if (nota >= 5) {
        return true;
    } else {
        return false;
    }
}
console.log(exprecion(5));
console.log(exprecion(4));

// Apartado b

let flecha = (nota) => {
    if (nota >= 5) {
        return true;
    } else {
        return false;
    }
}
console.log(flecha(5));
console.log(flecha(4));
// Apartado c

let callBcak = function(nota,dinero){
        if (nota >= 5) {
        return dinero*1.1;
    } else {
        return dinero*0.9;
    }
}
console.log(callBcak(5 , 20));
console.log(callBcak(4 , 20));