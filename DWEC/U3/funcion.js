// ----------------------------------------------------------------------------------------------------------eje1
function calcularPrecio(precio , porcentaje = 10){
    return precio - (precio * porcentaje) / 100;
}
console.log(calcularPrecio(100, 20));
console.log(calcularPrecio(100));
console.log("---------------------1----------------------");
// ---------------------------------------------------------------------------------------------------eje2
const obtenerMayor = function (a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log(obtenerMayor(3, 7, 5));
console.log(obtenerMayor(10, 2, 8)); 
console.log(obtenerMayor(1, 4, 9)); 
console.log("----------------------2---------------------");

// ---------------------------------------------------------------------------------------------------eje3
function contarMayores(arr, limit) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      count++;
    }
  }
  return count;
}

let numeros = [5, 18, 3, 22, 10, 15, 7];
console.log(contarMayores(numeros, 10));
console.log("----------------------3---------------------");

// ----------------------------------------------------------------------------------------------------------------------eje4
function filtrarPositivos(...numero) {
  const posi = [];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0) {
      posi.push(numero[i]);
    }
  }
  return posi;
}

console.log(filtrarPositivos(-3, 5, 0, 8, -2, 12));
console.log("------------------------4-------------------");

// ------------------------------------------------------------------------------------------------------------------eje5
function transformarArray(arr, opera) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(opera(arr[i]));
  }
  return result;
}

const doble = transformarArray([2, 4, 6], function (num) {
  return num * 2;
});
console.log(doble);


const suma = transformarArray([2, 4, 6], (num) => num + 5);
console.log(suma); 
console.log("--------------------5-----------------------");

// ------------------------------------------------------------------------------------------------------------------eje6

function estadisticas(numeros) {
  let suma = 0;
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    if (numeros[i] > mayor) mayor = numeros[i];
    if (numeros[i] < menor) menor = numeros[i];
  }

  return {
    suma: suma,
    media: suma / numeros.length,
    mayor: mayor,
    menor: menor,
  };
}
let notas = [6, 8, 5, 9, 7];
console.log(estadisticas(notas));
console.log("-------------------6------------------------");
