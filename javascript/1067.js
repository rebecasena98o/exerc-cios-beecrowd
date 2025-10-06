var input = require('fs').readFileSync('Data/1067.txt', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines[0]);
let i = 1;

while(i <= X){
    if(i % 2 !== 0){
        console.log(i)
    }
    i++;
} 