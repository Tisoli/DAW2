// EJERCICIO 5

function media(...arr){
    let media = 0;
    let suma = 0;
    if(arr.length == 0)return 0;
    for(n of arr){
        suma += n;
    }
    media = suma/arr.length;
    return media;
}

console.log(media());
console.log(media(1,2,3,4,5,6,7,8,9))