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

function guardar() {
	if (validarIban() && validarCuenta() && validarTarjeta() && validarCvv()) {

	}
}

function validarIban() {
	let iban = document.getElementById('iban').value;
	let patron = /^ES7[68]$/;

	return patron.test(iban);
}

function validarCuenta() {
	let cuenta = document.getElementById('cuenta').value;
	let patron = /^\d{20}$/;

	return patron.test(cuenta);
}

function validarTarjeta() {
	let tarjeta = document.getElementById('tarjeta').value;
	let patron = /^\d{16}$/;

	return patron.test(tarjeta);
}

function validarCvv() {
	let cvv = document.getElementById('cvv').value;
	let patron = /^\d{3}$/;

	return patron.test(cvv);
}