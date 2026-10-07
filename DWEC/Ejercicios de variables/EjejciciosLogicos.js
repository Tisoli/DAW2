// ============================================
// 逻辑运算符、条件语句、循环 练习题
// ============================================

// if 单分支：金额大于 100 时输出提示
let importe = 150;
if(importe > 100){
    console.log("Se mayor")
}
console.log("------------------------");

// 逻辑或 ||：温度小于 0 或大于 35，结果为 true
let temperatura = 38;
let resultado = temperatura < 0 || temperatura > 35;
console.log (resultado)     // true（38 > 35）
console.log("------------------------");

// 三元运算符 条件 ? 真 : 假
let temperaturas = 18;
let resultados = temperaturas < 25 ? "Hace frío" : "Hace calor";
console.log (resultados)    // "Hace frío"（18 < 25）
console.log("------------------------");

// if / else if / else 多分支：判断速度等级
let velocidad = 40;
if(velocidad < 50){
    console.log("baja");
}else if(velocidad < 90){
    console.log ("medio");
}else{
    console.log ("alto");   
}   
console.log("------------------------");

// for 循环：从 4 开始，每次加 4，到 40 为止
for(let i=4; i <= 40 ; i=i+4){
    console.log(i);
}
console.log("------------------------");

// for 循环倒序：从 10 减到 0
for(let j = 10 ; j >= 0 ; j--){
    console.log(j);
}
console.log("------------------------");

// while 循环：只要 saldo > 10 就每次减 15
let saldo = 100;
while(saldo > 10){
    saldo -= 15;
    console.log(saldo);
}
console.log("------------------------");

// do...while：先执行一次，再判断条件（至少执行一次）
let intento = 1;
do{
    console.log("Intento:" + intento);
    intento ++; 
}while(intento <= 4);

console.log("------------------------");
// 用 for 和 break：找出 1~100 中前 8 个 7 的倍数
// mostrar los 8 primeros numero multiplos de 7 que hay 1 a 100
// utilizado for y break para salir del bucle

let contador = 0;

for (let k = 1; k <= 100; k++) {
    if (k % 7 === 0) {          // 能被 7 整除
        console.log(k);
        contador++;
        if (contador === 8) {   // 找到第 8 个就跳出循环
            break;
        }
    }
}
console.log("------------------------");
// 用 for 和 continue：打印 1~10 中除 3 的倍数以外的数字
// Utilizado for , i++ y continue mostrar los numeros del 1 al 10 excepto los mutiplos que 3

for(let l = 0 ; l <= 10 ; l++){
    if(l % 3 === 0) continue;   // 跳过 3 的倍数，不执行下面的打印
        console.log(l);
}

console.log("------------------------");

// 标签（label）+ break：外层循环带标签 outerLoop，可直接跳出外层
outerLoop:
for(i = 0 ; i < 3 ; i++){
    for(j = 0 ; j < 3 ; j++){
        if (i === 1 && j === 1){
            break outerLoop;    // 直接跳出整个 outerLoop 循环
        }
        console.log(`i : ${i}, j : ${j}`);
    }
}
console.log("------------------------");

// 二维数组 + console.table()：以表格形式打印
let main = [
    [1,2,3,4],
    [5,4,7,8,9]
]
console.table(main);

let main = [
    [1,2,3,4],
    [5,4,7,8,9]
]
console.table(main);

