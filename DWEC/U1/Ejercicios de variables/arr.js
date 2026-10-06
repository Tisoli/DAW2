let arr1 = [1,2,3,4,5];
console.log(arr1[1]);


for(i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

let valor;
for(valor of arr1){
    console.log(valor);
}
let ind;
for(ind in arr1){
    console.log(ind + "->" + arr1[ind]);
}



arr1 = [1, 2, 3, 4, 5];
for (let valor of arr1) console.log(valor);

const lenguajes = ["js", "java", "python", "php", "c#"];

console.log(lenguajes[0]);
console.log(lenguajes[2]);

let ulti = (lenguajes.length-1);
console.log(lenguajes[ulti]);


console.log(lenguajes.length-1);

const temp = [18,21,24,20,17];
console.log(".........");

console.log(temp[0]);
console.log(".........");
console.log(temp[3]);
console.log(".........");
temp[2] = 25;
console.log(temp);

console.log(".........");

const notas  = [
    [7,8,6],
    [5,4,9],
    [10,8,7]
];

console.log(notas[0][0]);


const colores = ["Rojo","Verde","Azul","Amarillo"];
let ofcadacolor;
for(ofcadacolor of colores){
    console.log(ofcadacolor);
}
let incadacolor;
for(incadacolor in colores){
    console.log(incadacolor + ":" + colores[incadacolor]);
}

const ciudades = ["Madird", "Sevilla", "Valencia","Bilbao"];
let ofcadaciuda;
for(ofcadaciuda of ciudades){
    console.log(ofcadaciuda);
}

const notas1 =[7,3,5,9,4,8,2];
let nota1;
for(nota1 in notas1){
    if (notas1[nota1] >= 5){
        console.log(notas1[nota1]);
    }
}