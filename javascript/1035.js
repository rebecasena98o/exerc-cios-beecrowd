var input = require('fs').readFileSync('Data/1035.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split(' '); // quebra de linha (pula linha ou espaço)

//Declarando as variáveis 

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

//Declarando as condições
const condicao4 = D > 0;
const condicao5 = C > 0;
const condicao6 = A % 2 === 0;
const condicao1 = B > C;
const condicao2 = D > A;
const condicao3 = (C + D) > (A + B);

//adicionando na função condicional if e else

if (condicao1 && condicao2 && condicao3 && condicao5 && condicao4 && condicao6){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}
