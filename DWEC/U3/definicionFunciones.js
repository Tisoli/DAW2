function precioConIva(precio , iva){
    return precio +(precio*iva)/100
}

console.log(precioConIva(100,21));


function operar(num1, num2, funci) {
    // 在这里，funci 接收的就是下面传进来的 summ 函数
    // 我们调用 funci(num1, num2) 来执行加法，并把结果用 console.log 打印出来
    console.log(funci(num1, num2)); 
}

// 2. 调用 operar，并把 summ 作为第三个参数传进去
operar(2, 4, function summ(a, b) {
    return a + b;
});

operar(2, 4, function lalala(a, b) {
    return a * a;
});

const dividi =(a,b) => a/b;
console.log (dividi(6,2));

