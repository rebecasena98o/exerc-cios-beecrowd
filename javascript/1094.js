var input = require('fs').readFileSync('Data/1094.txt', 'utf8');
var lines = input.split('\r\n');

let N = parseInt(lines[0]);
let totalCobaias =  0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for(let i = 1; i <= N;  i++){
    let valores = lines[i].split(' ');
    let quantidade = parseInt(valores[0]);
    let tipo = valores[1];

    totalCobaias += quantidade;

    if (tipo === 'C'){
        totalCoelhos += quantidade
    } else if (tipo === 'R'){
        totalRatos += quantidade
    } else if (tipo === 'S'){
        totalSapos += quantidade;
    }
}

let percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
let percentualRatos = (totalRatos / totalCobaias) * 100;
let percentualSapos = (totalSapos / totalCobaias) * 100;

console.log('Total: ' + totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + totalCoelhos);
console.log('Total de ratos: ' + totalRatos);
console.log('Total de sapos: ' + totalSapos);
console.log('Percentual de coelhos: ' + percentualCoelhos.toFixed(2) + ' %');
console.log('Percentual de ratos: ' + percentualRatos.toFixed(2) + ' %');
console.log('Percentual de sapos: ' + percentualSapos.toFixed(2) + ' %');

