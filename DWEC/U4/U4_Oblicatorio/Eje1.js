function crearContadorAccesos(nombrePagina) {
    let name = nombrePagina;
    let count = 0;

    return {
        registrarAcceso() { count++; },
        consultarAccesos() { return count; },
        consultarPagina() { return name; },
        reiniciarAccesos() { count = 0; }
    };
}