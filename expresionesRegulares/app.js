//Pruebas de si contiene letra
let cadenaTiene =/a$/
console.log(cadenaTiene.exec('aa'))
console.log(cadenaTiene.exec('aab'))
console.log(cadenaTiene.test('saa'))


//Valida que los dos primeros digitos sean numeros del 0 al 9 y dos letras en el rango indicado
let cadena = /[0-9]{2}[B-DF-HJ]{2}/
console.log(cadena.test('0909JSDAA'))
console.log(cadena.exec('0A909JDAA'))
console.log(cadena.test('0909J8D'))



//le ponemos el simbolo del $ al final con esto le estamos restringiendo a que valide solo lo escrito correcto
//si hay cadena de texto posterior da false en caso de test o null en caso de exec
let cadena1 = /[0-9]{2}[B-DF-HJ]{2}$/
console.log(cadena1.test('0909JSDAA'))
console.log(cadena1.exec('0A909JDAA'))
console.log(cadena1.test('0909J8D'))

//Valida con el simbolo ^ el primer digito que este contenido en el rango
//con el +$ valida los siguientes digitos
let cadena2 = /^[A-Za-z0-9_]+$/
console.log(cadena2.exec('$manzana'))
console.log(cadena2.test('$manzana'))
console.log(cadena2.test('manzana%'))

//[\w] equivale a [A-Za-z0-9_]
let cadena3 = /^[\w]+$/
console.log(cadena3.exec('$manzana'))
console.log(cadena3.test('$manzana'))
console.log(cadena3.test('manzana%'))

//[\W] equivale a negar [A-Za-z0-9_]
let cadena4 = /^[\W]+$/
console.log(cadena4.exec('%%&'))
console.log(cadena4.test('%a'))
console.log(cadena4.test('%&_'))

//[^\w%] con el simbolo ^ despues de los corchetes negamos es decir con esa expresion 
//no estan permitidos los siguientes caracteres A-Za-z0-9_% 
let cadena5 = /^[^\w%]+$/
console.log(cadena5.exec('%%'))
console.log(cadena5.test('mm'))
console.log(cadena5.test('manzana%'))

//indica la posibilidad de que este contenida una palabra
let cadena6 = /verde|roja/
console.log(cadena6.exec('verde manzana'))
console.log(cadena6.test('Manzana rojaa'))
console.log(cadena6.test('Manzana roja'))
console.log(cadena6.test('roja kk'))

//Formato dd/AAAXX
let cadena7 = /[0-9]{3}(\/)[A-Z]{3,5}/
console.log(cadena7.exec('000/AAA'))
console.log(cadena7.exec('000/2AA'))
console.log(cadena7.test('000/AAAAAA'))
console.log(cadena7.test('000/2AA'))

//Formato dd/AAAXX
let cadena8 = /[0-9]{3}(\/)[A-Z]{3,5}$/
console.log(cadena8.exec('000/AAA'))
console.log(cadena8.exec('000/2AA'))
console.log(cadena8.test('000/AAAAAA'))
console.log(cadena8.test('000/2AA'))

//Posibilidad
let cadenaPosibilidad= /^-?[\d]+$/
console.log(cadenaPosibilidad.exec('-9999'))
console.log(cadenaPosibilidad.exec('9999'))

//Formato twitter
let cadenaTwitter = /[@]{1}[\w]{3,15}$/
console.log(cadenaTwitter.exec('@fran'))
console.log(cadenaTwitter.exec('@fran-'))





