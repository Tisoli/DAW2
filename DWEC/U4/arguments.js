
// crea una class que convierta los datos en segundos
// convefxofgidmpo y tiene el metodo asegundo (<datos)
// 1 parametro significa que le estamos pasando el tiempo en segundos y devvolvera este mismo valor
// 2 prametro rstamos pasando minutos y segundos devuelve 60min * minutos+segundos
// 3 parametors pasando horas minuidos y segundos devolvera 360*horas+60*min+seg

class Convtiems {
    opera() {
        if (arguments.length === 1) {
            return arguments[0];
        }
        else if (arguments.length === 2) {
            return (arguments[0] * 60) + arguments[1];
        }
        else if (arguments.length === 3) {
            return (arguments[0] * 60) + (arguments[1] * 60) + arguments[2];
        }
        else {
            throw new Error('No Valido.');
        }
    }
}

const horas = new Convtiems();
console.log(horas.opera(40));
console.log(horas.opera(2, 30));
console.log(horas.opera(4, 5, 8));
console.log(horas.opera(9, 4, 5, 8));

class Convtiems2 {
    operar(...horas) {
        if (horas.length === 1) {
            return horas[0];
        } else if (horas.length === 2) {
            return (horas[0] * 60) + horas[1];
        } else if (horas.length === 3) {
            return (horas[0] * 60) + (horas[1] * 60) + horas[2];
        }
        else {
            throw new Error("No válido.");
        }
    }
}
const calc = new Convtiems2();
console.log(calc.opera(41));
console.log(calc.opera(2, 31));
console.log(calc.opera(4, 5, 9));
console.log(calc.opera(9, 4, 5, 9));