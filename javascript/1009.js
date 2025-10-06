var input = require('fs').readFileSync('Data/1009.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as variáveis

let Nome = (lines[0]);
let SalarioFixo = parseFloat(lines[1]);
let TotalDeVendas = parseFloat(lines[2]);
const PORCENTAGEM = 0.15;

//Multiplicamos o valor com a comissão sobre as vendas adicionando ao salário fixo

let ValorTotal = TotalDeVendas * PORCENTAGEM + SalarioFixo;

// saída de dados ou console

console.log(`TOTAL = R$ ${ValorTotal.toFixed(2)}`);