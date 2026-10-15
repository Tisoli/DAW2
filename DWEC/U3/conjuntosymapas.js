const verduras = ["lechuga", "ceballa", "tomate", "cebolla", "pimiento"];

const conjVerd = new Set(verduras);
console.log(conjVerd);

console.log("añado patatas");
conjVerd.add("patata");
console.log(conjVerd);

console.log("añado lechuga");
conjVerd.add("lechuga");
console.log(conjVerd);

console.log("existe cebola");
console.log(conjVerd.has("cebolla"));

console.log(`Hay ${conjVerd.size} elemento/s`);

console.log("Elimino lechuga");
conjVerd.delete("lechuga");
console.log(conjVerd);
console.log(`Hay ${conjVerd.size} elemento/s`);

console.log("Elimino todos");
conjVerd.clear();
console.log(conjVerd);
console.log(`Hay ${conjVerd.size} elemento/s`);

