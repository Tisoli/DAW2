class TarjetaPuntos {
    #nombre;
    #puntos;
    constructor(name, point) {
        this.#nombre = name;
        this.#puntos = point;
    }
    consultarPuntos() {
        return this.#puntos;
    }
    sumarPuntos(addPoint) {
        if (addPoint < 0) {
            throw new Error("Error");
        } else {
            this.#puntos += addPoint;
        }
    }
    canjearPuntos(subPoint){
        if(this.#puntos<subPoint){
            throw new Error("U so poor");
        }else{
            this.#puntos -= subPoint;
        }
    }
}
const nora = new TarjetaPuntos("Nora", 40);
console.log(nora.consultarPuntos());
nora.sumarPuntos(15);
console.log(nora.consultarPuntos());
nora.canjearPuntos(20);
console.log(nora.consultarPuntos());
nora.canjearPuntos(200);
console.log(nora.consultarPuntos());


