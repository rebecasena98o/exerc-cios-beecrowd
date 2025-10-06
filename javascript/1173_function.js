var input = require('fs').readFileSync('Data/1173_function.txt', 'utf8');
var lines = input.split('\r\n');

arr = parseInt(lines[0]);

function valorVetor(arr){
    if(arr <= 50){ //para ele entrar no if ele precisa estar nesse intervalo abaixo de 50 ou ser igual a ele.

    const limite = 10; //definindo limite
    let numeros = []; //primeira posição recebe o valor lido
    numeros[0] = arr; //armazena o valor lido na primeira posição (índice)

    for (let i = 1; i < limite; i++) {
        numeros[i] = numeros[i - 1] * 2; // Cada posição recebe o dobro da anterior
    }

    // Exibe os valores do vetor
    for (let i = 0; i < limite; i++) { // ele coloca os índices de acordo com cada resposta do vetor 
        console.log(`N[${i}] = ${numeros[i]}`);
    }
}
}

valorVetor(arr);

//obrigada Jesus por ter me ajudado a entender o conteúdo e o código

/* 
Basicamente o que o for está fazendo é dizendo que o valor na posição "i" 
é o dobro da posição "i - 1" e assim preenchendo o vetor.

No caso ele dá 2 pq o valor de números[0] = 1 então ele processa dessa maneira
i = 1
números[i] = números[i-1] *2
números[1] =números[1-1] *2
números[1] = números [0]*2
números[1]= 1* 2 = 2

No caso a posição 0 possui o valor 1, 
pois ele é atribuído na linha 11.
Já que o número que ele lê é passado para a função 
e depois passado para essa primeira posição.

Ele pega o número na posição zero que é um (arr é o valor
dentro do arquivo de texto = 1) e assim ele multiplica 
pelo 2. Caso não entenda olhar as linhas 32 à 37

*/