let numeros = [1,2,3,4];

let num = numeros[1] // 2

numeros.length // 4

for (let i = 0; i < numeros.length; i++) {
    
}

numeros.push(5) // [1,2,3,4,5]
numeros.pop() // [1,2,3,4]

console.log(num);
console.log(numeros);

console.log(Math.round(Math.random() * 50));

numeros.unshift(0); // [0,1,2,3,4,5]
console.log(numeros);

numeros.shift() // [1,2,3,4,5]

function isGreaterThanTwo(element, index, array) {
   return element > 2;
}

console.log(numeros.find(isGreaterThanTwo));
//numeros.findIndex(2);
numeros.splice(3, numeros.length()) // Quita los elementos a partir del índice 3.