// # UT4. Ejercicio de depuración con JavaScript

// ## Enunciado

// Una tienda dispone de un carrito de la compra que contiene diferentes productos. Cada producto tiene un nombre, un precio unitario y una cantidad.

// El programa debe calcular el importe total del carrito y aplicar un descuento del 10 % cuando el importe sea igual o superior a 100 €.

// Sin embargo, el programa no proporciona el resultado esperado. No contiene errores de sintaxis, sino un error lógico.

// Utiliza las herramientas de depuración de Visual Studio Code para localizar y corregir el error.

// ## Código JavaScript

// Guarda el siguiente código en un archivo denominado `carrito.js`:

// javascript
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularImporte() {
        return this.precio * this.cantidad;
    }
}

function calcularTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let importe = producto.calcularImporte();

        // total = importe;
        total = total + importe;

    }

    return total;
}

function aplicarDescuento(total) {
    let descuento = 0;

    if (total >= 100) {
        descuento = total * 0.10;
    }

    return total - descuento;
}

const carrito = [
    new Producto("Teclado", 25, 2),
    new Producto("Ratón", 15, 3),
    new Producto("Monitor", 120, 1),
    new Producto("Auriculares", 30, 2)
];

let total = calcularTotal(carrito);
let totalFinal = aplicarDescuento(total);

console.log("Importe del carrito: " + total + " €");
console.log("Importe final: " + totalFinal + " €");


// Resultado esperado

// ```text
// Importe del carrito: 275 €
// Importe final: 247.5 €
// ```

// ## Resultado obtenido

// ```text
// Importe del carrito: 60 €
// Importe final: 60 €
// ```

// ## Tareas

// 1. Ejecuta el programa y comprueba el resultado obtenido.
// 2. Establece puntos de interrupción e inicia una sesión de depuración.
// 3. Utiliza la ejecución paso a paso y los paneles de variables, inspección y pila de llamadas para analizar el comportamiento del programa.
// 4. Identifica la instrucción que provoca el error y explica por qué el resultado es incorrecto.
// 5. Corrige el error y comprueba que el programa proporciona el resultado esperado.

// ## Herramientas de depuración de Visual Studio Code

// | Herramienta | Tecla | Utilidad |
// |---|---|---|
// | Punto de interrupción (Breakpoint) | F9 | Establecer o eliminar un punto de interrupción. |
// | Iniciar depuración | F5 | Ejecutar el programa en modo depuración. |
// | Continuar (Continue) | F5 | Reanudar la ejecución hasta el siguiente punto de interrupción o el final. |
// | Paso por encima (Step Over) | F10 | Ejecutar una instrucción sin entrar en las funciones que invoca. |
// | Paso por dentro (Step Into) | F11 | Entrar en una función o método. |
// | Paso hacia fuera (Step Out) | Mayús + F11 | Continuar hasta salir de la función actual. |
// | Detener depuración | Mayús + F5 | Finalizar la sesión de depuración. |