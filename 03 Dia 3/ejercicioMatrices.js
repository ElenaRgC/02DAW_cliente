// APARTADO 1

let matriz = ["María", "Sonia", "Clara", "María José", "Eva", "Pilar"];

let aux = matriz[1];

matriz[1] = matriz[2];

matriz[2] = aux;

console.log(matriz);

// APARTADO 2

let eliminadas = matriz.splice(-3, matriz.length);

console.log(matriz);
console.log(eliminadas);

// APARTADO 3

let eliminadasAnteriores = ["Bea", "Miriam"];

eliminadas = eliminadas.concat(eliminadasAnteriores);

console.log(eliminadas);

// APARTADO 4

let premios = ["150€", "100€", "50€"];

let clasificacion = [matriz, premios];

console.table(clasificacion);

// APARTADO 5

let numeros = []

for (let i = 0; i < 100; i++) {
    numeros[i] = Math.round(Math.random() * 100);
}

// console.log(numeros);

let numerosSinRepetir = [...numeros];

/*for (let i = 0; i < 100; i++) {
    for (let j = i; j >= 0 ; j--) {
        while (numerosSinRepetir[i] === numerosSinRepetir[j])  {
            numerosSinRepetir[i] = Math.round(Math.random() * 100);
        } 
    }
}*/

for (let i = 0; i < 100; i++) {
    let nuevoNumero;
    do {
        nuevoNumero = Math.round(Math.random() * 100);
    } while (numerosSinRepetir.includes(nuevoNumero));

    numerosSinRepetir[i] = nuevoNumero;
}

/*numerosSinRepetir = numerosSinRepetir.sort();*/

for (let i = 0; i < numerosSinRepetir.length - 1; i++) { // Algoritmo de burbuja
    for (let j = 0; j < numerosSinRepetir.length - i - 1; j++) {
        if (numerosSinRepetir[j] > numerosSinRepetir[j + 1]) {
            let aux = numerosSinRepetir[j];
            numerosSinRepetir[j] = numerosSinRepetir[j + 1];
            numerosSinRepetir[j + 1] = aux;
        }
    }
}


console.log(numerosSinRepetir);