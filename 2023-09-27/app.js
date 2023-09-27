console.log("EJERCICIO 1") 

let patron = /[^-]\d+$/;

console.log(patron.test("-1"));
console.log(patron.test("1220241asd"));
console.log(patron.test("abc"));
console.log(patron.test("1220241"));

console.log("EJERCICIO 2");

patron = /-\d+/;

console.log(patron.test("2342"));
console.log(patron.test("hola"));
console.log(patron.test("-28"));

console.log("EJERCICIO 3");

patron = /^\d{4}[B-DF-HJ-NPR-TV-Z]{3}$/;

console.log(patron.test("hola"));
console.log(patron.test("333ZZZ"));
console.log(patron.test("1234OBZ"));
console.log(patron.test("1072FXT"));

console.log("EJERCICIO 4");

// No he tenido en cuenta las letras que no son posibles
patron = /^\d{8}[A-Z]$/; 

console.log(patron.test("5930203K"));
console.log(patron.test("05930203"));
console.log(patron.test("05930A203"));
console.log(patron.test("05930203K"));

console.log("EJERCICIO 5");

patron = /^[0|1]+$/;

console.log(patron.test("a"));
console.log(patron.test("7"));
console.log(patron.test("a1"));
console.log(patron.test("1"));
console.log(patron.test("100110"));

console.log("EJERCICIO 6");

patron = /^[0-7]+$/;

console.log(patron.test("a"));
console.log(patron.test("a1"));
console.log(patron.test("8"));
console.log(patron.test("7"));
console.log(patron.test("1076"));

console.log("EJERCICIO 7");

patron = /^((\d)*[A-F]*)+$/;

console.log(patron.test("a"));
console.log(patron.test("a1"));
console.log(patron.test("%"));
console.log(patron.test("AF"));
console.log(patron.test("71241"));
console.log(patron.test("76F9"));

console.log("EJERCICIO 8");

patron = /^[a-z0-9]{5,15}#(\d){6}$/;

console.log(patron.test("usuario01##123456"));
console.log(patron.test("us01#123456"));
console.log(patron.test("00001123asfawers#123456"));
console.log(patron.test("usuario01#1234"));
console.log(patron.test("usuario01#a3456"));
console.log(patron.test("usuario01#123456"));
console.log(patron.test("usuario#123456"));
console.log(patron.test("123101#123456"));

console.log("EJERCICIO 9");

function validarString(cadena) {
    let patron = /^[a-zA-Z]\w{2,19}$/;
    let patronLetras = /^[a-zA-Z]$/;

    let primerCaracter = cadena[0];

    if (patronLetras.test(primerCaracter)) {
        if (patron.test(cadena)) {
            if (cadena[0] === primerCaracter.toUpperCase()){
                return "El primer caracter ya está en mayúsculas.";
            } else {
                return primerCaracter.toUpperCase() + cadena.slice(1);
            }
        } else {
            return "No cumples los requisitos de longitud.";
        }
    } else {
        return "El primer caracter no es una letra.";
    }
}

console.log(validarString("hola"));
console.log(validarString("03AAAAA"));
console.log(validarString("a"));
console.log(validarString("Hola"));

console.log("EJERCICIO 10");

function validarFecha(fecha) {
    let patron = /^(0?[1-9]|[12][0-9]|3[0|1])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    
    return patron.test(fecha);
}

// No se ha tenido en cuenta febrero

console.log(validarFecha("12-04-1918"));
console.log(validarFecha("40/04/1918"));
console.log(validarFecha("12/14/1918"));
console.log(validarFecha("12/12/1918"));
console.log(validarFecha("1/01/1918"));