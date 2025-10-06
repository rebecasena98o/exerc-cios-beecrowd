var input = require('fs').readFileSync('Data/1101.txt', 'utf8');
var lines = input.split('\r\n');

let value = 0;

let resultado = '';  

var qnt = lines.length

for (let i = 0 ; i < qnt; i++) {
    let numbers = lines[i].split(' ');

    let x = parseInt(numbers[0]);
    let y = parseInt(numbers[1]);

    if (x < y) {
        [x, y] = [y, x];
    }
    let resultado = ''; 
    if (x > 0 && y > 0) {
        value = 0
        for (let i = y; i <= x; i++) {
            resultado = resultado + i + ' ';
            value = i + value;
        }
        console.log(resultado + `Sum=${value}`);
    }
}