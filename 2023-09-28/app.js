/*
Crear una pantalla html con los siguientes campos:

IBAN. Compuesto de dos campos: Uno con 4 caracteres y otro con 20
Tarjeta.
	Número tarjeta: 16 dígitos
	CVV: 3 dígitos
 Tener un botón de Guardar con los siguentes requisitos:
	Se comprobará que los primeros campos del IBAN sean 4 caracteres y solo se admitirán dos valores válidos:
        ES76 y ES78 si no es ningun de ellos se coloreará de color rojo y se mostrá un mensaje en
	    en la parte inferior de que IBAN inválido
	Se comprobará que el número de cuenta es correcto de longitud
	Se comprobará de que el número de tarjeta tiene la longitud correcta y que solo contiene número si falla se mostrará el texto de que es incorrecto
	Se comprobará que el CVV tiene la longitud correcta y que sean solo números.

Otros requisitos:
Cuando se cambien el número de tarjeta automáticamente si el CVV esta relleno se limpiará el campo.
*/

let mensaje = document.getElementById('mensaje');
let iban = document.getElementById('iban').value;
let cuenta = document.getElementById('cuenta').value;
let tarjeta = document.getElementById('tarjeta').value;
let cvv = document.getElementById('cvv').value;


function guardar() {
	let correcto = false;

	if (validarIban()) {
		iban.className= '';
		correcto = true;
	} else {
		iban.className= 'error';
		mensaje.value = "IBAN incorrecto."
		correcto = false;
	}

	if (validarCuenta()) {
		cuenta.className= '';
		correcto = true;
	} else {
		cuenta.className= 'error';
		mensaje.value = "Número de cuenta incorrecto."
		correcto = false;
	}

	if (validarTarjeta()) {
		tarjeta.className= '';
		correcto = true;
	} else {
		tarjeta.className= 'error';
		mensaje.value = "Número de tarjeta incorrecto."
		correcto = false;
	}

	if (validarCvv()) {
		tarjeta.className= '';
		correcto = true;
	} else {
		tarjeta.className= 'error';
		mensaje.value = "Número CVV incorrecto."
		correcto = false;
	}

	if (correcto) {
		mensaje.value = "Transacción completada."
	}
}

function validarIban() {

	let patron = /^ES7[68]$/;

	if (patron.test(iban)) {
		quitarError(iban);
	} else {
		mostrarError(iban);
	}

	return patron.test(iban);
}

function validarCuenta() {
	let patron = /^\d{20}$/;

	if (patron.test(cuenta)) {
		quitarError(cuenta);
	} else {
		mostrarError(cuenta);
	}

	return patron.test(cuenta);
}

function validarTarjeta() {
	let patron = /^\d{16}$/;

	if (patron.test(tarjeta)) {
		quitarError(tarjeta);
	} else {
		mostrarError(tarjeta);
	}

	return patron.test(tarjeta);
}

function validarCvv() {
	let patron = /^\d{3}$/;

	if (patron.test(cvv)) {
		quitarError(cvv);
	} else {
		mostrarError(cvv);
	}

	return patron.test(cvv);
}

function mostrarError(elemento) {
	elemento.className = 'error';
}

function quitarError(elemento) {
	elemento.className = '';
}