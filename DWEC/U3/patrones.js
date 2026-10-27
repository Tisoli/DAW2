(
    function saludate(nombre){
        console.log(`Buneos dias, don ${nombre}`)
    }
)("Tiso");

(
function cadena (nombre , ciudad){
    return `${nombre} vivo en ${ciudad}`;
}
)("Tiso" , "Madrid");
console.log(cadena);