class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    
    nombreCompleto = function () {
        return this.nombre + this.apellidos;
    }
}

let p = new Persona("Elena", "Rodríguez Calderón");

console.log(p.nombreCompleto());