// Prototipos

// Objeto sin prototipo

const obj1 = Object.create(null);
obj1.nombre = "Pepe";
console.log(obj1.nombre);
console.log(typeof obj1);


const presona = {
    nombre: "pqe",
    dameNombre: function () {
        return this.nombre;
    }
};
const profesor = Object.create(presona);
profesor.curso = "1SMR";

console.log(profesor.nombre);
console.log(profesor.curso);



class receta {
    paso(nombre, ingredientes) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
    getNombre() {
        return this.nombre;
    }
    getIngredientes() {
        return this.ingredientes;
    }
    setNombre(nombrenuevo) {
        this.nombre = nombrenuevo;
    }
    SetIngredientes(ingredientesnuevo) {
        this.ingredientes = ingredientesnuevo;
    }
}
const pescadoHervido = new receta(
    'pescadoHervido',
    [
        "dorada 2pieza",
        "pimientos rojos mucho"
    ]
);
const tomateYHuevo = Object.create(pescadoHervido);
tomateYHuevo.nombre = "tomateYHuevo";
tomateYHuevo.ingredientes = [
    "tomate",
    "huevo"
];
console.log(tomateYHuevo.getNombre());
console.log(tomateYHuevo.setNombre("13981093810947"));
console.log(tomateYHuevo.getNombre());
console.log(pescadoHervido.getNombre());
    