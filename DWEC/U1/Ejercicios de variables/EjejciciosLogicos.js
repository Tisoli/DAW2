let importe = 150;
if(importe > 100){
    console.log("Se mayor")
}

let temperatura = 38;
let resultado = temperatura < 0 || temperatura > 35;
console.log (resultado)

let temperaturas = 18;
let resultados = temperaturas < 25 ? "Hace frío" : "Hace calor";
console.log (resultados)


let velocidad = 40;
if(velocidad < 50){
    console.log("baja");
}else if(velocidad < 90){
    console.log ("medio");
}else{
    console.log ("alto");
}   

for(let i=4; i <= 40 ; i=i+4){
    console.log(i);
}

for(let j = 10 ; j >= 0 ; j--){
    console.log(j);
}

let saldo = 100;
while(saldo > 10){
    saldo -= 15;
    console.log(saldo);
}