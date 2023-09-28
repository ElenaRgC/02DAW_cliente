const boton = document.getElementById('boton')
const mensaje = document.getElementById('mensaje')
var cajaTexto = document.getElementById('cajaTexto')

// Ejemplo de evento de clic
boton.addEventListener('click', function() {
    mensaje.textContent = '¡Hiciste clic en el botón!'
})

// Ejemplo de evento de mouse sobre el botón
boton.addEventListener('mouseover', function() {
    boton.style.backgroundColor = 'lightblue'
})

// Ejemplo de evento de mouse fuera del botón
boton.addEventListener('mouseout', function() {
    boton.style.backgroundColor = ''
})

// Ejemplo de evento de teclado
document.addEventListener('keypress', function(event) {
    if(event.keyCode == 13){
        entrar()
    } else {
        mensaje.textContent = 'Presionaste la tecla: ' + event.key;
    }
})

//Se activa cuando seleccionas un texto
cajaTexto.addEventListener('select', function(event){
    mensaje.textContent = cajaTexto.value
})

function entrar(){
    mensaje.textContent = 'Has iniciado sesion'
}

//change, se activa solo cuando cambias el foco
cajaTexto.addEventListener('change', function(event){
    mensaje.textContent = 'Cambiado'
})
