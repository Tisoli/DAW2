function calculadora(){
    while (true) {
        const opcion = prompt(
            "1 para suamr\n" +
            "2 para restar\n" +
            "3 para multiplicar\n" + 
            "4 para dividir\n" +
            "5 para obtener de modulo\n" +
            "6 para salir"
        );

        if(opcion === "6"){
            const confima = confirm("Seguro salir?(s/n):");
            if (confima.confirm(true)){
                console.log("Saliendo del programa");

            }
        }


    }
}