var input = require('fs').readFileSync('Data/1005function.txt', 'utf8');
var lines = input.split('\n');


let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);


    function calcularmedia( A, B ){
        let somaPeso = 3.5 + 7.5;
        let media = ( A * 3.5 + B * 7.5) / somaPeso
        return media
    }

    let resultado = calcularmedia( A , B)
    console.log(`MEDIA = ${resultado.toFixed(5)}`)