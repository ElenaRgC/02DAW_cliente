// PÁGINA LOGIN

const cuentas = [{
    correo: "usuario1@email.com",
    password: "admin123",
    }, {
    correo: "usuario2@email.com",
    password: "123admin"
},];

function login() {
    let correcto = false;
    let validacion = validarLogin();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    for (let i = 0; i < cuentas.length; i++) {
        correcto = true;

        if (email !== cuentas[i].correo || pass !== cuentas[i].password) {
            alert("Usuario o contraseña incorrectos.");
            correcto = false;
        }
    }

    return correcto && validacion;
}

function validarLogin() {
    let correcto = false;
    if (validarEmail() && validarLongitud('password', 8)) {
        correcto = true;
    }

    return correcto;
}

// PÁGINA DATOS

let errores = [];

function validarDatos() {
    if (validarDNI() && validarLongitud('nombre', 2, 30) && validarLongitud('apellido1', 3, 30)
    && validarLongitud('apellido2', 3, 30) && validarFechaNacimiento()) {
        alert('Datos correctos.')
    }

}

function mensajeError(codigos) {
    let mensaje = "\n";

    for (let i = 0; i < codigos.length; i++) {
        switch (i) {
            case 0: mensaje += "La contraseña debe tener un mínimo de 8 caracteres.\n";
            break;
            case 1: mensaje += "Debe haber un único @ en el email.\n";
            break;
            case 2: mensaje += "El arroba no puede estar al principio.\n";
            break;
            case 3: mensaje += "El arroba no puede estar en las tres últimas posiciones.\n";
            break;
            case 4: mensaje += ""
        }
    }

    alert(mensaje);
}

// FUNCIONES DE VALIDACIÓN

function validarEmail(errores) {
    const email = document.getElementById("email").value;

    if (!email.includes('@')) {
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

    if (longitud >= minimo && longitud <= maximo) {
        return true;
    } else {
        errores.push(8); // Longitud incorrecta
        
        return false;
    }
}

function validarFechaNacimiento() {
    const fecha = document.getElementById("fecha-nac").value;

    if (fecha[2] === '/' && fecha[5] === '/') {
        return true;
    } else {
        errores.push(8); // Formato incorrecto
        return false;
    }

    /* Habría que comprobar los días, meses y años bisiestos */
}

function validarDNI(errores) {
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

    const numeroDNI = dniUsuario.slice(0, 8);
    const letraDNI = dniUsuario[8];

    if (!Number.isInteger(numeroDNI)) {
        errores.push(6); // Los números no son números
        return false;
    }

    const resto = Number(numeroDNI) % 23;

    if (letras[resto] !== letraDNI) {
        errores.push(7); // Código 7: La letra no se corresponde al DNI
        return false;
    }

    return true;
}

