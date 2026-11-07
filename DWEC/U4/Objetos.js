const libro = {
    titulo: "El camino",
    autor: "Miguel Delibes",
    pagina: 224,
    prestado: false,
    mostrarInformacion: function() {
        return "titulo: " + this.titulo +
               " | autor: " + this.autor +
               " | pagina: " + this.pagina +
               " | prestado: " + this.prestado;
    }
};

console.log(libro.mostrarInformacion());

console.log("---------------------------------");

const ordenador = new Object();
ordenador.marca = "HP";
ordenador.modelo = "EliteDest";
ordenador.memoriaRam = 16;
ordenador.encendido = false;
ordenador.encender = function(){
    return ordenador.encendido = true;
}
console.log(ordenador.encendido);
ordenador.encender();
console.log(ordenador.encendido);

console.log("---------------------------------");

function Alumno(nombre, edad, ciclo) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciclo = ciclo;

    this.presenta = function() {
        return "Nombre: " + this.nombre +
               ", tengo " + this.edad +
               " ciclo :" + this.ciclo + ".";
    };
}

const alumno1 = new Alumno("Sihao", 20, "DAW");
const alumno2 = new Alumno("Dani", 22, "DAM");

console.log(alumno1.presenta());
console.log(alumno2.presenta());

console.log("---------------------------------");



class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarProducto() {
        return "Producto: " + this.nombre +
               " | precio: " + this.precio + " €" +
               " | cantidad disponible: " + this.cantidad;
    }

    calcularValorAlmacen() {
        return this.precio * this.cantidad;
    }
}

const producto1 = new Producto("Teclado mecánico", 49.99, 12);
const producto2 = new Producto("Monitor 24 pulgadas", 129.95, 5);

console.log(producto1.mostrarProducto());
console.log("Valor de almacén: " + producto1.calcularValorAlmacen()+ " €");

console.log(producto2.mostrarProducto());
console.log("Valor de almacén: " + producto2.calcularValorAlmacen()+ " €");

console.log("---------------------------------");

const vehiculo = {
    tipo: "vehículo",
    describir: function() {
        console.log("Tipo: " + this.tipo);
    }
};

const coche = Object.create(vehiculo);

coche.tipo = "coche";
coche.marca = "Seat";

coche.describir(); 
console.log(coche.marca); 


console.log(Object.getPrototypeOf(coche) === vehiculo);

console.log("---------------------------------");


function crearPelicula(titulo, director, duracion) {
    return {
        titulo: titulo,
        director: director,
        duracion: duracion,

        mostrarFicha: function() {
            console.log("Título: " + this.titulo +
                        " | Director: " + this.director +
                        " | Duración: " + this.duracion + " min");
        }
    };
}

const pelicula1 = crearPelicula("asda", "adass", 321);
const pelicula2 = crearPelicula("sgsgd", "sdgsgs", 123);

pelicula1.mostrarFicha();
pelicula2.mostrarFicha();

console.log("---------------------------------");

const TITULO = "LOL";
const GENERO = "RITO";
const HORAS = 120;

const juego1 = {
    titulo: TITULO,
    genero: GENERO,
    horasJugadas: HORAS,
    mostrarDatos: function() {
        console.log("Título: " + this.titulo +
                    " | Género: " + this.genero +
                    " | Horas jugadas: " + this.horasJugadas);
    }
};


const juego2 = new Object();
juego2.titulo = TITULO;
juego2.genero = GENERO;
juego2.horasJugadas = HORAS;
juego2.mostrarDatos = function() {
    console.log("Título: " + this.titulo +
                " | Género: " + this.genero +
                " | Horas jugadas: " + this.horasJugadas);
};

function Videojuego(titulo, genero, horasJugadas) {
    this.titulo = titulo;
    this.genero = genero;
    this.horasJugadas = horasJugadas;
    this.mostrarDatos = function() {
        console.log("Título: " + this.titulo +
                    " | Género: " + this.genero +
                    " | Horas jugadas: " + this.horasJugadas);
    };
}
const juego3 = new Videojuego(TITULO, GENERO, HORAS);

class VideojuegoClass {
    constructor(titulo, genero, horasJugadas) {
        this.titulo = titulo;
        this.genero = genero;
        this.horasJugadas = horasJugadas;
    }
    mostrarDatos() {
        console.log("Título: " + this.titulo +
                    " | Género: " + this.genero +
                    " | Horas jugadas: " + this.horasJugadas);
    }
}
const juego4 = new VideojuegoClass(TITULO, GENERO, HORAS);

const prototipoVideojuego = {
    mostrarDatos: function() {
        console.log("Título: " + this.titulo +
                    " | Género: " + this.genero +
                    " | Horas jugadas: " + this.horasJugadas);
    }
};

const juego5 = Object.create(prototipoVideojuego);
juego5.titulo = TITULO;
juego5.genero = GENERO;
juego5.horasJugadas = HORAS;

function crearVideojuego(titulo, genero, horasJugadas) {
    return {
        titulo: titulo,
        genero: genero,
        horasJugadas: horasJugadas,
        mostrarDatos: function() {
            console.log("Título: " + this.titulo +
                        " | Género: " + this.genero +
                        " | Horas jugadas: " + this.horasJugadas);
        }
    };
}
const juego6 = crearVideojuego(TITULO, GENERO, HORAS);

console.log("--- 1. Literal {} ---");
juego1.mostrarDatos();

console.log("--- 2. new Object() ---");
juego2.mostrarDatos();

console.log("--- 3. Función constructora ---");
juego3.mostrarDatos();

console.log("--- 4. class ---");
juego4.mostrarDatos();

console.log("--- 5. Object.create() ---");
juego5.mostrarDatos();

console.log("--- 6. Función fábrica ---");
juego6.mostrarDatos();