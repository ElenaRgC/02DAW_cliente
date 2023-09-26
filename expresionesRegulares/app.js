let re = /ab+c/
let reg = new RegExp("ab+c");
console.log(re)
console.log(reg)
var myArray = /d(b+)d/g.exec("dbbbbd");
console.log(myArray)
let regmul = new RegExp("era*");
let multi = 'eres un era'
console.log(regmul.exec(multi))
console.log('hola bb')
let regsum = /sss+/
let suma = 'eres un bsssh'
var myArrays = regsum.exec(suma)
console.log(myArrays)

let neg = /verde|roja/
console.log(neg.exec('Manzana verde'))
let cadena = /^[A-Za-z0-9_]+$/
console.log(cadena.exec('$manzana'))

let binario = /^[0-1]{8}[A-Z]{2}$/
console.log(binario.exec('01010110AA'))
 
