let importe = 150;
if(importe > 100){
    console.log("Se mayor")
}
console.log("------------------------")
let temperatura = 38;
let resultado = temperatura < 0 || temperatura > 35;
console.log (resultado)
console.log("------------------------")
let temperaturas = 18;
let resultados = temperaturas < 25 ? "Hace frío" : "Hace calor";
console.log (resultados)
console.log("------------------------")

let velocidad = 40;
if(velocidad < 50){
    console.log("baja");
}else if(velocidad < 90){
    console.log ("medio");
}else{
    console.log ("alto");   
}   
console.log("------------------------")
for(let i=4; i <= 40 ; i=i+4){
    console.log(i);
}
console.log("------------------------")
for(let j = 10 ; j >= 0 ; j--){
    console.log(j);
}
console.log("------------------------")
let saldo = 100;
while(saldo > 10){
    saldo -= 15;
    console.log(saldo);
}
console.log("------------------------")

let intento = 1;
do{
    console.log("Intento:" + intento);
    intento ++; 
}while(intento <= 4);

console.log("------------------------")
//Instruccion break
// mostrar los 8 primeros numero multiplos de 7 que hay 1 a 100
// utilizado for y break para salir del bucle

let contador = 0;

for (let k = 1; k <= 100; k++) {
    if (k % 7 === 0) {
        console.log(k);
        contador++;
        if (contador === 8) {
            break;
        }
    }
}
console.log("------------------------")
// Utilizado for , i++ y continue mostrar los numeros del 1 al 10 excepto los mutiplos que 3

for(let l = 0 ; l <= 10 ; l++){
    if(l % 3 === 0) continue;
        console.log(l);
}

console.log("------------------------")

outerLoop:
for(i = 0 ; i < 3 ; i++){
    for(j = 0 ; j < 3 ; j++){
        if (i === 1 && j === 1){
            break outerLoop;
        }
        console.log(`i : ${i}, j : ${j}`);
    }
}
console.log("------------------------")

