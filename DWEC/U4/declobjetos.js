const puesto = {
    posicion: "Estudiante",
    nombre: "Tiso",
    dameDatos: function() {
        return this.posicion + " se llama: " + this.nombre;
    }
};

console.log(puesto.dameDatos());

console.log("new Object");
const puesto2 = new Object();
puesto2.posicion = "Estudiante";
puesto2.usuario = "Li";
puesto2.dameDatos = function(){
    return this.posicion + "=>" + this.usuario;

};
console.log(puesto2.dameDatos());