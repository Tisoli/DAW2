let valida = false;
while(!valida){
    let num1 = prompt("Dime un numero enteno");
    let num2 = prompt("Dime otro numero entero");

    numero1 = Number(num1);
    numero2 = Number(num2);

    if(num1.trim() !== "" && Number.isInteger(numero1) && Number.isInteger(numero2)){
        if(numero1 > numero2){
            valida = true;
            break;
        }
        else{
            console.log(`Numero1 menor o igual Numero 2,Inténtalo de nuevo.`);
        }
    }
    else {
                console.log("El número es vacío o no es un entero. Inténtalo de nuevo.");

    }
}

if(valida){
    for(i = numero2;i<numero1;i++){
        console.log(i);
    }
}