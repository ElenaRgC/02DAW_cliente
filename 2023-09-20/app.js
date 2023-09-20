const cuentas = [{
    correo: "usuario1@email.com",
    password: "admin123",
    }, {
    correo: "usuario2@email.com",
    password: "123admin"
},];

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (email === cuentas[i].correo && pass === cuentas[i].password) {
            return true;
        } else {
            alert("Usuario o contraseña incorrectos.");
            return false;
        }
    }
}

function validarLogin() {
    validarEmail();
    validarLongitud('password', 8);
}

function validarDatos() {
    validarDNI();
    validarLongitud('nombre', 2, 30);
    validarLongitud('apellido1', 3, 30);
    validarLongitud('apellido2', 3, 30);
    validarFechaNacimiento();
}

function mensajeError() {

}

function validarEmail() {
    /*mínimo  @ pero ni en el primer caracter ni en los últimos 3*/
}

function validarLongitud(idCampo, minimo, maximo = 100000) {
    let correcto = false;
    let texto = document.getElementByID(nombreCampo).value;
    let longitud = texto.length;

    if (longitud >= minimo && longitud <= maximo) {
        correcto = true;
    }

    return correcto;
}

function validarFechaNacimiento() {
    /*dd/mm/AAAA*/
}

function validarDNI() {
    let letraDNI,
        numeroDNI = "",
        letras = "TRWAGMYFPDXBNJZSQVHLCKE",
        resto = 0, correcto = false;

    let dniUsuario = document.getElementById("dni").value;

    if (dniUsuario.length != 9) {
        correcto = false;
    } else {
        letraDNI = dniUsuario[8];

        for (i = 0; i < dniUsuario.length - 1; i++) {
            numeroDNI = numeroDNI + dniUsuario[i];
        }

        resto = Number(numeroDNI) % 23;

        if (letras[resto] != letraDNI) {
            correcto = false;
        } else {
            correcto = true;
        }
    }

    return correcto;
}
