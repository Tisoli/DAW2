class Persona{
    constructor(nombre ,  edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    cumplicAnios(){
        this.edad++;
    }
}
const persona = new Persona("Juan" , 20);
console.log(persona.edad);
persona.cumplicAnios();
console.log(persona.edad);

let a = 3;
let res = a*4;
console.log(a + " - " + res);
function doble(n){
    return n*n;
}

const datos = [12,3,4,6];
let num = 0;
for(let i = 0;i<datos.length;i++){
    num = num + doble(datos[i]);
}
console.log(num);