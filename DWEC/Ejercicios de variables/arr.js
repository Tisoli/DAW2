// ============================================
// 数组基础：索引访问、遍历、length、修改元素
// ============================================

let arr1 = [1,2,3,4,5];
console.log(arr1[1]);   // 通过索引访问，索引从 0 开始 → 输出 2


// 用普通 for 循环遍历：靠索引 i，从 0 到 length-1
for(i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

// for...of 遍历"值"：直接把每个元素赋值给 valor
let valor;
for(valor of arr1){
    console.log(valor);
}
// for...in 遍历"索引"：ind 是字符串形式的索引，arr1[ind] 才是值
let ind;
for(ind in arr1){
    console.log(ind + "->" + arr1[ind]);
}


// 重新赋值 arr1
arr1 = [1, 2, 3, 4, 5];
// for...of 一行写法（不用大括号）
for (let valor of arr1) console.log(valor);

const lenguajes = ["js", "java", "python", "php", "c#"];

console.log(lenguajes[0]);   // 第一个元素 "js"
console.log(lenguajes[2]);   // 第三个元素 "python"

// .length 返回元素个数；length-1 就是最后一个元素的索引
let ulti = (lenguajes.length-1);
console.log(lenguajes[ulti]);        // 最后一个元素 "c#"


console.log(lenguajes.length-1);     // 输出最后一个索引 4

const temp = [18,21,24,20,17];
console.log(".........");

console.log(temp[0]);       // 第一个温度 18
console.log(".........");
console.log(temp[3]);       // 第四个温度 20
console.log(".........");
temp[2] = 25;               // 直接修改索引 2 的元素为 25
console.log(temp);          // [18, 21, 25, 20, 17]
console.log(".........");

// 二维数组（数组中套数组）：notas[行][列]
const notas  = [
    [7,8,6],
    [5,4,9],
    [10,8,7]
];

console.log(notas[0][0]);   // 第 0 行第 0 列 → 7


// for...of 遍历颜色（拿值）
const colores = ["Rojo","Verde","Azul","Amarillo"];
let ofcadacolor;
for(ofcadacolor of colores){
    console.log(ofcadacolor);
}
// for...in 遍历颜色（拿索引）
let incadacolor;
for(incadacolor in colores){
    console.log(incadacolor + ":" + colores[incadacolor]);
}

// for...of 遍历城市（拿值）
const ciudades = ["Madird", "Sevilla", "Valencia","Bilbao"];
let ofcadaciuda;
for(ofcadaciuda of ciudades){
    console.log(ofcadaciuda);
}

// 用 for...in 遍历成绩，只打印及格（>= 5）的分数
const notas1 =[7,3,5,9,4,8,2];
let nota1;
for(nota1 in notas1){
    if (notas1[nota1] >= 5){
        console.log(notas1[nota1]);
    }
}

// 累加求和：遍历所有价格，累加到 suma
const precios =[10.25,8,12,15];
let suma = 0;
for(let precio of precios){
    suma += precio;
}
console.log(suma);   // 结果 45.25
