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

function recogerElementos() {

	elementos['iban'] = document.getElementById('iban').value,
	elementos['cuenta'] = document.getElementById('cuenta').value,
	elementos['tarjeta'] = document.getElementById('tarjeta').value,
	elementos['cvv'] = document.getElementById('cvv').value
}

let elementos = {
	iban: document.getElementById('iban').value,
	cuenta: document.getElementById('cuenta').value,
	tarjeta: document.getElementById('tarjeta').value,
	cvv: document.getElementById('cvv').value,
}

let patrones = {
	iban: /^ES7[68]$/,
	cuenta: /^\d{20}$/,
	tarjeta: /^\d{16}$/,
	cvv: /^\d{3}$/,
}

let validaciones = {
	iban: false,
	cuenta: false,
	tarjeta: false,
	cvv: false,
}

let datos = {
	iban: "",
	cuenta: "",
	tarjeta: "",
	cvv: ""
};

function guardar() {
	recogerElementos()
	let guardar = true;

	for (let elemento in validaciones) {
		if (!validaciones[elemento]) {
			guardar = false;
		}
	}

	if (guardar) {
		datos.iban = iban.value;
		datos.cuenta = cuenta.value;
		datos.tarjeta = tarjeta.value;
		datos.cvv = cvv.value;

		console.log(datos);
		mensaje.value = "Transacción completada."
	}
}

function validar(elemento) {
	let nombre = elemento.getAttribute('name');
	let patron = patrones[nombre];

	if (patron.test(elemento.value)) {
		validaciones[nombre] = true;
		quitarError(elemento);
	} else {
		validaciones[nombre] = false;
		mostrarError(elemento);
	}
	return patron.test(elemento);
}

function mostrarError(elemento) {
	elemento.classList.remove('correcto');
	elemento.classList.add('error');
	mensaje.innerText = "El número de su " + elemento.getAttribute('name') + " es incorrecto."
}

function quitarError(elemento) {
	elemento.classList.remove('error');
	elemento.classList.add('correcto');
	mensaje.innerText = "El número de su " + elemento.getAttribute('name') + " es correcto."
}