/*
    No es perfecto ni lo que pides, y no funciona todo lo bien que me gustaría.
    Por un lado porque creía que agrupar todos los mensajes de error sería buena idea,
    pero luego me he dado cuenta de que debería estar separado según si era la página de login o la de datos.

    Por otro lado, debería haber hecho tres funciones de validar longitud en vez de una sola, para que
    los mensajes de error fueran personalizados. Hubo un momento en el que me había heco un objeto con id, longMin
    y longMax para hacer los mensajes de errores paramétricos pero se me fue de las manos y perdí mucho tiempo.

    Y a última hora he descubierto que había un } de más que hacía que las últimas funciones estuvieran dentro de otra
    y eran la razón por las que algunas validaciones no me saltaban, aunque les di mil vueltas. Me he dado cuenta
    porque me parecía que estaban demasiado tabuladas.

    Pero estoy contenta, he practicado muchas cosas diferentes y he recordado otras cosas.
    Creo que con objetos esto sería mucho más conciso, claro y eficiente (y espero que fácil).
*/




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

    if (email.trim() === "" || pass.trim() === "") {
        alert("Debes ingresar un usuario y una contraseña.");
    } else if (!validarLongitud('password', 8)) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (!validarEmail()) {
            imprimirError(errores);
    } else {
        for (let i = 0; i < cuentas.length; i++) {
            if (email === cuentas[i].correo && pass === cuentas[i].password) {
                window.location.href = "datos.html";
                return;
            }
        }
        alert("Usuario o contraseña incorrectos.");
    }
}

function validarDatos() {
    errores = [];
    if (
        validarDNI() &&
        validarLongitud('nombre', 2, 30) &&
        validarLongitud('apellido1', 3, 30) &&
        validarLongitud('apellido2', 3, 30) &&
        validarFechaNacimiento()
        ) {
        alert('Datos correctos.');
    } else {
        imprimirError(errores);
    }
}

// PÁGINA DATOS

let errores = [];

const mensajesDeError = {
    0: "Debes introducir un email.",
    1: "El email debe tener un @.",
    2: "No puede haber más de un @ en el email..",
    3: "El @ no puede estar en la primera o tres últimas posiciones del email.",
    4: "Debes introducir un DNI.",
    5: "Introduce 9 caracteres en el DNI.",
    6: "El DNI no está compuesto de 8 números y una letra.",
    7: "La letra no se corresponde al DNI.",
    8: "Debes introducir tu fecha de nacimiento.",
    9: "El formato de la fecha de nacimiento es dd/mm/AAAA.",
    10: "Ningún campo puede estar vacío.",
    11: "El campo debe estar entre 3 y 8 caracteres."
};

function imprimirError(codigos) {
    let mensaje = "\n";

    for (let i = 0; i < codigos.length; i++) {
        const codigo = codigos[i];
        if (mensajesDeError[codigo]) {
            mensaje += mensajesDeError[codigo] + "\n";
        }

        alert(mensaje);
    }
}

    // FUNCIONES DE VALIDACIÓN

    function validarEmail() {
        const email = document.getElementById("email").value;

        if (email.length === 0) {
            errores.push(0); // Está vacío
            return false;
        }
    else if (!email.includes('@')) {
        errores.push(1); // No hay @
        return false;
    } else if (email.split('@').length > 2) {
        errores.push(2); // Más de un @
        return false;
    } else if (email[0] === '@'){
        errores.push(3); // @ no está en la posición correcta
        return false;
    } else {
        for (let i = email.length; i >= email.length - 3; i--) {
            if (email[i] === '@') {
                errores.push(3); // @ no está en la posición correcta
                return false;
            }
        }
    }
    return true;
    }

    function validarLongitud(idCampo, minimo, maximo = 100) {
        const texto = document.getElementById(idCampo).value;
        const longitud = texto.length;

        if (longitud === 0) {
            errores.push(10);
            return false;
        } else if (longitud >= minimo && longitud <= maximo) {
            return true;
        } else {
            errores.push(11);

            return false;
        }
    }

    function validarFechaNacimiento() {
        const fecha = document.getElementById("fecha-nac").value;

        if (fecha.length === 0) {
            errores.push(8); // Fecha vacía
            return false;
        } else if (fecha[2] === '/' && fecha[5] === '/') {
            return true;
        } else {
            errores.push(9); // Formato incorrecto
            return false;
        }

    /* Habría que comprobar los días, meses y años bisiestos */
    }

    function validarDNI() {
        const dniUsuario = document.getElementById("dni").value;
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (dniUsuario === "") {
            errores.push(4); // DNI vacío
            return false;
        }

    if (dniUsuario.length !== 9) {
        errores.push(5); // Longitud es distinta de 9
        return false;
    }

        const numeroDNI = +dniUsuario.slice(0, 8);
    const letraDNI = dniUsuario[8];

    if (!Number.isInteger(numeroDNI)) {
        errores.push(6); // Los números no son números
        return false;
    }

    const resto = Number(numeroDNI) % 23;

    if (letras[resto] !== letraDNI) {
        errores.push(7); // La letra no se corresponde al DNI
        return false;
    }

    return true;
}

function limpiar() {
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("fecha-nac").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

