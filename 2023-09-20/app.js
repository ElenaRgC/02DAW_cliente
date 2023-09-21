// PÁGINA LOGIN

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

// PÁGINA DATOS

function validarDatos() {
    if (validarDNI() && validarLongitud('nombre', 2, 30) && validarLongitud('apellido1', 3, 30)
    && validarLongitud('apellido2', 3, 30) && validarFechaNacimiento()) {
        alert('Datos correctos.')
    }

}

function mensajeError() {

}

// FUNCIONES DE VALIDACIÓN

function validarEmail() {
    let correcto = false;
    let email = document.getElementById("dni").value;

    if (email.includes('@')) {
        if (email[0] != '@' || email[-1] != '@' || email[-2] != '@' || email[-3] != '@') {
            correcto = true;
        }
    }

    return correcto;
}

function validarLongitud(idCampo, minimo, maximo = 100) {
    let correcto = false;
    let texto = document.getElementById(idCampo).value;
    let longitud = texto.length;

    if (longitud >= minimo && longitud <= maximo) {
        correcto = true;
    }

    return correcto;
}

function validarFechaNacimiento() {
    let correcto = false;
    let fecha = document.getElementById("fecha-nac").value;

    if (fecha[2] === '/' && fecha[5] === '/') {
        correcto = true;
    }

    return correcto;

    /* Habría que comprobar los días, meses y años bisiestos */
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
