var input = require('fs').readFileSync('Data/1071_function.txt', 'utf8');
var lines = input.split('\r\n');

/*const variaveis = {
    X : parseInt(lines[0]),
    Y : parseInt(lines[1])
}*/

function somaImpares (a,b){
    const inicio = Math.min(a, b);
    const fim = Math.max(a, b);

    let soma = 0;

    for(let i = inicio + 1; i < fim; i++ ){
        if (i % 2 !== 0){
            soma += i;
        }
    }
        return soma;
}
let X = parseInt(lines[0])
let Y = parseInt(lines[1])
const resultado = somaImpares(X,Y)
console.log(resultado)