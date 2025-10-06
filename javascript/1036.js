var input = require('fs').readFileSync('Data/1036.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split(' '); // quebra de linha (pula linha ou espaço)

//Declarando as variáveis 
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

//declarando e atribuindo a variável delta
let delTa = parseFloat((Math.pow(B, 2)) - 4 * A * C);

//como a variável delta em js é expressa em um número muito grande(double), nós a reatribuímos para que ela seja expressa com duas
//casas decimais depois da vírgula, mantendo seu valor em ponto flutuante e auxiliando nos cálculos


//Calculo raiz1
let raiz1 = (((- B) + (Math.sqrt(delTa))) / (2 * A));
raiz1 = parseFloat(raiz1.toFixed(5));

//Calculo raiz2
let raiz2 = (((- B) - (Math.sqrt(delTa))) / (2 * A));
raiz2 = parseFloat(raiz2.toFixed(5));

if (A !== 0 && delTa > 0) {
    console.log(`R1 = ${raiz1}`);
    console.log(`R2 = ${raiz2}`);
} else {
    console.log(`Impossivel calcular`);
}
