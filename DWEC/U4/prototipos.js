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
    

const ord1 = {
    cpu : "I7 12700",
    ram : "DDR5 32G",
    getDatos : function(){
        return this.cpu + ";" + this.ram; 
    }
}
console.log(ord1.getDatos());
console.log(ord1.hasOwnProperty("cpu"));
console.log(Object.getPrototypeOf(ord1) === Object.prototype);

class usu {
    constructor(nombre,fechaNac){
        this.nombre = nombre;
        this.fechaNac = fechaNac;
    }

getDatosPers(){
    return "El usuairio se llama :" + this.nombre + " Su nacimiento es :" + this.fechaNac;
}
};
const usu1 = new usu("Tiso", "22/04/06");
console.log(usu1.getDatosPers());

function CentroEduca(tipo,nombre){
    let tipo = tipo;
    let nombre = nombre;
    return getNombre:()=>nombre,
    setNombre:(nom) => nombre = nom
}