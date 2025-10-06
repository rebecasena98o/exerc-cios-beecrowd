var input = require('fs').readFileSync('Data/1036function.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split(' '); // quebra de linha (pula linha ou espaço)

//Declarando as variáveis 
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

// [1212, 3123, 132]

// 1212
// 3123
// 132

function calcularDelta (A, B, C){
       let delta = parseFloat((Math.pow(B, 2)) - 4 * A * C);
       let raiz1 = (((- B) + (Math.sqrt(delta))) / (2 * A));
       let raiz2 = (((- B) - (Math.sqrt(delta))) / (2 * A));

    if (A !== 0 && delta > 0){
        return [raiz1, raiz2]
    } else {
        console.log(`Impossivel calcular`);
        return []
    }
}

// let resultado = calcularDelta(A, B, C)
let [raiz1, raiz2] = calcularDelta(A, B, C) 
if(raiz1 && raiz2){
    console.log(`R1 = ${raiz1.toFixed(5)}`)
    console.log(`R2 = ${raiz2.toFixed(5)}`)
}

// console.log(`a raiz é ${resultado.toFixed(4)}`)