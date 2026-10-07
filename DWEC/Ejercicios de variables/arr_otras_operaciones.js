//Copia de arrays con slice()
// es un copia superficial
const arr1 = [9,8,7,6,5,2,0,4];
console.log(arr1);
const arr_aux = arr1;
arr_aux[2]= "Toledo";
console.log(arr_aux);   



const arr2 = arr1.slice();
console.log(arr2);  