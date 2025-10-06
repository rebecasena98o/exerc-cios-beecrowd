var input = require('fs').readFileSync('Data/1041.txt', 'utf8');
var lines = input.split(' ');

let ponto1 = parseFloat(lines[0]);
let ponto2 = parseFloat(lines[1]);

if(ponto1 > 0 && ponto2 > 0){
    console.log(`Q1`);
} else if(ponto1 < 0 && ponto2 > 0){
    console.log(`Q2`);
} else if(ponto1 < 0 && ponto2 < 0){
    console.log(`Q3`);
} else if(ponto1 > 0 && ponto2 < 0){
    console.log(`Q4`)
} else if(ponto1 == 0 && ponto2 == 0){
    console.log(`Origem`);
} else if (ponto1 === 0) {
    console.log("Eixo Y");
} else if (ponto2 === 0) {
    console.log("Eixo X");
}