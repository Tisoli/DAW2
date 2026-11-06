// EJERCICIO 2
let importes = [12, 25, 8, 40, 15, 30];
// Apartado a importes superiores a 20
let masque = importes.filter(importe => importe > 20);
console.log(masque);

// Apartado b todos imcrementados un 10%
let incrementados = importes.map(importe => importe * 1.10);
console.log(incrementados);

// Apartado c suma de los importes ques son multiplo de 5
let suma = importes
  .filter(importe => importe % 5 === 0)
  .reduce((total, importe) => total + importe, 0);
console.log(suma);

