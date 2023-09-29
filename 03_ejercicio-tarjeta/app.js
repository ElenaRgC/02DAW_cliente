/*
Otros requisitos:
Cuando se cambien el número de tarjeta automáticamente si el CVV esta relleno se limpiará el campo.
*/

let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('boton');

let elementos = {
	iban: "",
	cuenta: "",
	tarjeta: "",
	cvv: "",
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

recogerElementos();
crearListeners();

function crearListeners() {
	for (let input in elementos) {
		elementos[input].addEventListener('change', function() {
			validar(this);
		});
	}
}

boton.addEventListener('click', function(){
	guardar();
});

elementos['tarjeta'].addEventListener('change', function(){
	elementos['cvv'].value = "";
	elementos['cvv'].classList.remove('error');
	elementos['cvv'].classList.remove('correcto');
});

function guardar() {
	recogerElementos();
	let guardar = true;

	for (let input in validaciones) {
		if (!validaciones[input]) {
			guardar = false;
			mostrarError(elementos[input])
			mensaje.innerText = "No se pudo completar la transacción.";
		}
	}


	if (guardar) {
		datos.iban = elementos['iban'].value;
		datos.cuenta = elementos['cuenta'].value;
		datos.tarjeta = elementos['tarjeta'].value;
		datos.cvv = elementos['cvv'].value;

		console.log(datos);
		mensaje.innerText = "Transacción completada.";
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
	mensaje.innerText = "El número de su " + elemento.getAttribute('name') + " es incorrecto.";
}

function quitarError(elemento) {
	elemento.classList.remove('error');
	elemento.classList.add('correcto');
	mensaje.innerText = "El número de su " + elemento.getAttribute('name') + " es correcto.";
}

function recogerElementos() {
	elementos['iban'] = document.getElementById('iban');
	elementos['cuenta'] = document.getElementById('cuenta');
	elementos['tarjeta'] = document.getElementById('tarjeta');
	elementos['cvv'] = document.getElementById('cvv');
}
