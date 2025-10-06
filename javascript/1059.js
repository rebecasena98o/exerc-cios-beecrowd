var input = require('fs').readFileSync('Data/1059.txt', 'utf8');
var lines = input.split('\n');
/*
for (let i = 0; i < lines.length; i++) { inicialmente ele diz que o i começa com 0, depois ele verifica a condição
da posição do i, pois o seu valor indica a posição do número que queremos, depois que ele executa o restante do
código ele incrementa(soma mais um) o i, verificando a próxima posição
    if (lines[i] % 2 == 0) { aqui ele verifica a divisão por dois (n° par) se resulta em resto zero, se sim
    ele entra na primeira condição, senão, na segunda
        nPar++
    } else {
        nImpar++;
    }
}
 */

//Definindo a váriavel limite
const limite = 100;

for( let i = 2; i <= limite; i += 2){
        console.log(i);
}
   