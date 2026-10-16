console.log("Ejercicio 9.1");

const inscripciones = ["Lucía", "Mario", "Ana", "Lucía", "Diego", "Ana", "Sara"];
const conjunto = new Set(inscripciones);
console.log(conjunto.size);
console.log(conjunto.has("Diego"));
conjunto.add("Pablo");
conjunto.add("Mario");
for (const forof of conjunto) {
    console.log(forof);
}
console.log(conjunto.size);

console.log("Ejercicio 9.2");

const autorizados = new Set(["A102", "B205", "C310", "D415"]);
if (autorizados.has("B205")) {
  console.log("si");
} else {
  console.log("no");
}
if (autorizados.has("X999")) {
  console.log("si");
} else {
  console.log("no");
}
autorizados.delete("C310");

const resultado = autorizados.delete("X999");
console.log(resultado);

autorizados.add("E520");
autorizados.add("F625");
console.log("Cantidad total:", autorizados.size);

console.log("Ejercicio 9.3");

const pendientes = new Set(["PC01", "PC03", "PC05", "PC07", "PC09"]); 
const revisados = ["PC03", "PC07", "PC11"];


for (const codigo of revisados) {
  pendientes.delete(codigo);
}

console.log("PC05 sigue pendiente:", pendientes.has("PC05"));

pendientes.add("PC12");
pendientes.add("PC14");

for (const codigo of pendientes) {
  console.log(codigo);
}

console.log("Total pendientes:", pendientes.size);

console.log("Ejercicio 9.4");

const identificadores = new Set([12, 5, 18, 3, 27, 9, 21, 6]);
for (const id of identificadores) {
  if (id < 2) {
    identificadores.delete(id);
  }
}

console.log([...identificadores]);
console.log(identificadores.size);
console.log("18?", identificadores.has(18));


console.log("Ejercicio 10.1");

const carta = new Map([
  ["café", 1.50],
  ["té", 1.80],
  ["tostada", 2.20],
  ["zumo", 2.70]
]);

console.log(carta.get("té"));
console.log(carta.has("bocadillo"));
carta.set("bocadillo", 3.50);
carta.set("café", 1.70);
carta.delete("tostada");
for (const [producto, precio] of carta) {
  console.log(producto, precio);
}
console.log(carta.size);

console.log("Ejercicio 10.2");

const almacen = new Map([ 
    ["teclados", 12], 
    ["ratones", 8], 
    ["monitores", 5], 
    ["cables", 20] 
]);
console.log(almacen.get("ratones"));
almacen.set(almacen.get("ratones") + 6);
almacen.set(almacen.get("monitores") - 3);
console.log(almacen.has("impresoras"));
almacen.set("impresoras", 2);
for (const [producto, unidades] of almacen) {
  console.log(`${producto}: ${unidades} unidades`);
}
console.log(almacen.size);


console.log("Ejercicio 10.3");

const puntuaciones = new Map([ 
    ["Ana", 18], 
    ["Hugo", 12], 
    ["Irene", 24], 
    ["Leo", 16] 
]);
puntuaciones.set(puntuaciones.get("Hugo") + 5);
puntuaciones.set(puntuaciones.get("Irene") - 3);
puntuaciones.set("Nora", 20);
for (const [nombre, puntos] of puntuaciones) {
  if (puntos >= 20) {
    console.log(nombre, puntos);
  }
}
console.log(puntuaciones.size);
console.log(puntuaciones.has("Leo"));
puntuaciones.delete("Leo");
console.log("Ejercicio 10.4");
const existencias = new Map([ 
    ["folios", 6], 
    ["bolígrafos", 14], 
    ["carpetas", 3], 
    ["grapadoras", 9], 
    ["rotuladores", 2] 
]);

for (const [producto, cantidad] of existencias) {
  if (cantidad < 10) {
    console.log("Stock bajo:", producto);
    existencias.set(producto, cantidad + 5);
  }
}

for (const [producto, cantidad] of existencias) {
  console.log(producto, cantidad);
}

console.log(existencias.size);

let total = 0;
for (const cantidad of existencias.values()) {
  total += cantidad;
}
console.log("Total de stock:", total);