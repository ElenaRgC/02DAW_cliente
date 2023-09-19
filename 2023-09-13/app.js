var nombre = "Elena";
console.log(typeof nombre);

var edad = 28;
console.log(typeof edad);

var mayorEdad = true;
console.log(typeof mayorEdad);

function saludar() {
    console.log("hola ", nombre);
}

function esMayorEdad(edad) {
    if (edad >= 18) {
        mayorEdad = true;
    } else {
        mayorEdad = false;
    }

    return mayorEdad;
}

console.log(esMayorEdad(17));
console.log(esMayorEdad(19));
