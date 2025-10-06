var input = require('fs').readFileSync('Data/1045.txt', 'utf8'); //acesso dos dados
var lines = input.split('\r\n'); // quebra de linha

let line1 = lines[0].split(" ")

let A = parseFloat(line1[0]);
let B = parseFloat(line1[1]);
let C = parseFloat(line1[2]);

const numbers = line1.map(Number); //transformando em números invês da string bruta

    for(i = 0; i < numbers.length - 1; i++){ //selection sort (decrescente)
        let maiorIndice = i;
    for (let j = i + 1; j < numbers.length; j++) { //maior valor no resto do array
        if (numbers[j] > numbers[maiorIndice] ){ //verifica quem é maior
            maiorIndice = j; //usado para comparar dps
        }
    }
        [numbers[i], numbers[maiorIndice]] = [numbers[maiorIndice], numbers[i]]; //faz a troca baseado na condição

    }

        A = numbers[0];
        B = numbers[1];
        C = numbers[2];

//for (let i = 0; i < numbers.length; i++) { //imprime na ordem decrescente
 // console.log(numbers[i]);
//}

        if (A >= B + C) {
            console.log("NAO FORMA TRIANGULO");
  // fim, não forma triângulo
        } else {
            const A2 = A * A;
            const B2 = B * B;
            const C2 = C * C;

        if (A2 === B2 + C2) {
            console.log("TRIANGULO RETANGULO");
        }    else if (A2 > B2 + C2) {
            console.log("TRIANGULO OBTUSANGULO");
        }    else { // A2 < B2 + C2
            console.log("TRIANGULO ACUTANGULO");
        }

        if (A === B && B === C) {
            console.log("TRIANGULO EQUILATERO");
        } else if (A === B || B === C || A === C) {
                console.log("TRIANGULO ISOSCELES");
  }
}
