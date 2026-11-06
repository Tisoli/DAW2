// EJERCICIO 4

function calcularlporte(precio,descuento=0.9){
    let precioNuevo = precio*descuento;
    return precioNuevo;
}

console.log(calcularlporte(10));
console.log(calcularlporte(10,0.8));
