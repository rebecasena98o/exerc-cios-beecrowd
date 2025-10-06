var input = require('fs').readFileSync('Data/1048.txt', 'utf8');
var lines = input.split('\n');

//criando a variável salario atual
const salarioAtual = parseFloat(lines[0]);

// Variáveis para o cálculo
let novoSalario;
let aumento;
let percentual

//Verificando a faixa do salário e aplicando o aumento
if (salarioAtual <= 400.00) {
    let percentual1 = 0.15;
    let aumento1 = salarioAtual * percentual1
    let novoSalario1 = salarioAtual + aumento1;
    console.log(`Novo salario: ${novoSalario1.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento1.toFixed(2)}`);
    console.log(`Em percentual: ${(percentual1 * 100).toFixed(0)} %`);

} else if (salarioAtual <= 800.00) {
    let percentual2 = 0.12;
    let aumento2 = salarioAtual * percentual2
    let novoSalario2 = salarioAtual + aumento2;
    console.log(`Novo salario: ${novoSalario2.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento2.toFixed(2)}`);
    console.log(`Em percentual: ${(percentual2 * 100).toFixed(0)} %`);

} else if (salarioAtual <= 1200.00) {
    let percentual3 = 0.10;
    let aumento3 = salarioAtual * percentual3
    let novoSalario3 = salarioAtual + aumento3;
    console.log(`Novo salario: ${novoSalario3.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento3.toFixed(2)}`);
    console.log(`Em percentual: ${(percentual3 * 100).toFixed(0)} %`);

} else if (salarioAtual <= 2000.00) {
    let percentual4 = 0.07;
    let aumento4 = salarioAtual * percentual4;
    let novoSalario4 = salarioAtual + aumento4;
    console.log(`Novo salario: ${novoSalario4.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento4.toFixed(2)}`);
    console.log(`Em percentual: ${(percentual4 * 100).toFixed(0)} %`);

} else {
    let percentual5 = 0.04;
    let aumento5 = salarioAtual * percentual5;
    let novoSalario5 = salarioAtual + aumento5;
    console.log(`Novo salario: ${novoSalario5.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento5.toFixed(2)}`);
    console.log(`Em percentual: ${(percentual5 * 100).toFixed(0)} %`)
}