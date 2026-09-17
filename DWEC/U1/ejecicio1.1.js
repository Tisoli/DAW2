function calculadora() {
    while (true) {
        const opcion = prompt(
            "--- CALCULADORA ---\n" +
            "1 para sumar\n" +
            "2 para restar\n" +
            "3 para multiplicar\n" +
            "4 para dividir\n" +
            "5 para obtener el módulo\n" +
            "6 para salir"
        );

        if (opcion === "6") {
            const confirmacion = await preguntar("¿Está seguro de que desea salir? (s/n): ");
            if (confirmacion.toLowerCase() === "s") {
                console.log("Saliendo del programa...");
                rl.close();
                break;
            } else {
                console.log("Operación cancelada. Volviendo al menú...");
                continue;
            }
        }

        if (!["1", "2", "3", "4", "5"].includes(opcion)) {
            alert("Opción no válida. Intente de nuevo.");
            continue;
        }

        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: debe ingresar números válidos.");
            continue;
        }

        let resultado;

        switch (opcion) {
            case "1":
                resultado = num1 + num2;
                break;
            case "2":
                resultado = num1 - num2;
                break;
            case "3":
                resultado = num1 * num2;
                break;
            case "4":
                if (num2 === 0) {
                    alert("Error: no se puede dividir entre cero.");
                    continue;
                }
                resultado = num1 / num2;
                break;
            case "5":
                if (num2 === 0) {
                    alert("Error: no se puede calcular el módulo entre cero.");
                    continue;
                }
                resultado = num1 % num2;
                break;
        }

        alert(`Resultado: ${resultado}`);
    }
}

calculadora();




