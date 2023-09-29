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

var patrones = {
	iban: /^ES7[68]$/,
	cuenta: /^\d{20}$/,
	tarjeta: /^\d{16}$/,
	cvv: /^\d{3}$/,
}

function validar(elemento) {

	let nombre = elemento.getAttribute('name');
	let patron = patrones[nombre];

	if (patron.test(elemento.value)) {
		quitarError(elemento);
	} else {
		mostrarError(elemento);
	}
	return patron.test(elemento);
}

function guardar() {
	let correcto = false;

	if (correcto) {
		mensaje.value = "Transacción completada."
	}
}

function mostrarError(elemento) {
	elemento.classList.remove('correcto');
	elemento.classList.add('error');
	mensaje.innerText = "El número de su " + elemento.getAttribute('name') + " es incorrecto."
}

function quitarError(elemento) {
	elemento.classList.remove('error');
	elemento.classList.add('correcto');
}