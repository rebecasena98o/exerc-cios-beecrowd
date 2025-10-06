var input = require('fs').readFileSync('Data/1051.txt', 'utf8'); //acesso dos dados
var lines = input.split(' '); // quebra de linha

let imposto = 0.0;

if (lines > 4500.00) {
    imposto += (salario - 4500.00) * 0.28;
    salario = 4500.00;
}

if (lines > 3000.00) {
    imposto += (salario - 3000.00) * 0.18;
    salario = 3000.00;
}

if (lines > 2000.00) {
    imposto += (salario - 2000.00) * 0.08;
}

if (imposto === 0.0) {
    console.log("Isento");
} else {
    console.log(`R$ ${imposto.toFixed(2)}`);
}