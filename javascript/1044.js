var input = require('fs').readFileSync('Data/1044.txt', 'utf8');
var lines = input.split(' ');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

if( A % B === 0 || B % A === 0){
    console.log(`Sao Multiplos`);
} else {
    console.log(`Nao sao Multiplos`);
}

