var nombre1 = "José";
var primerApellido1 = "Hernández";
var segundoApellido1 = "Morales";

var nombre2 = "María";
var primerApellido2 = "Ruiz";
var segundoApellido2 = "García";

var nombre3 = "Sonia";
var primerApellido3 = "Patón";
var segundoApellido3 = "González";

var edad1 = 18;
var edad2 = 14;
var edad3 = 20;

var mayorEdad1 = false;
var mayorEdad2 = false;
var mayorEdad2 = false;

function saludar(nombre, apellido1, apellido2) {
    console.log("Hola, " + nombre + " " + apellido1 + " " + apellido2);
}

function esMayorEdad(edad, mayorEdad) {
    if (edad >= 18) {
        mayorEdad = true;
    } else {
        mayorEdad = false;
    }
}

function sumarEdad(edad1, edad2, edad3) {
    return edad1 + edad2 + edad3;
}

var anosTotales = sumarEdad(edad1, edad2, edad3);

function finalizar(nombre, apellido1, apellido2, mayorEdad) {
    var mayorMenor = "menor";

    if (mayorEdad) {
        mayorMenor = "mayor";
    }

    console.log(
        nombre +
            " " +
            apellido1 +
            " " +
            apellido2 +
            " es " +
            mayorMenor +
            " de edad."
    );
}

saludar(nombre1, primerApellido1, segundoApellido1);
saludar(nombre2, primerApellido2, segundoApellido2);
saludar(nombre3, primerApellido3, segundoApellido3);

esMayorEdad(edad1);
esMayorEdad(edad2);
esMayorEdad(edad3);

console.log("La suma de edades es " + sumarEdad(edad1, edad2, edad3) + ".");

finalizar(nombre1, primerApellido1, segundoApellido1, edad1);
finalizar(nombre2, primerApellido2, segundoApellido2, edad2);
finalizar(nombre3, primerApellido3, segundoApellido3, edad3);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

var num = Math.random() * 3;

switch (Math.round(num)) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
}
