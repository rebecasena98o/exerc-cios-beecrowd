var input = require('fs').readFileSync('Data/1046.txt', 'utf8'); //acesso dos dados
var lines = input.split(' '); // quebra de espaço

let horaInicial = parseInt(lines[0]);
let horaFinal = parseInt(lines[1]);

if (horaFinal > horaInicial){ //começou e terminou no mesmo dia
    let duracao1 = horaFinal - horaInicial; //calculo do mesmo dia
    console.log(`O JOGO DUROU ${duracao1} HORA(S)`);

} else if (horaFinal < horaInicial) { //ultrapassou a meia noite
    const horaTotalDia = 24;
    let diaUm = horaTotalDia - horaInicial; //hora restante primeiro dia
    let duracao2 = diaUm + horaFinal; //horas restantes do outro dia
    console.log(`O JOGO DUROU ${duracao2} HORA(S)`);

} else {
    let duracao = 24;
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
}


