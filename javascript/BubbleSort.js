function bubleSort(arr) { //função a ser usada
    for (let i = 0; i < arr.length-1; i++) { // usado para quando
        //o reset é feito e ele diminui uma casa para prosseguir
        //com as checagens, só que com o número anterior
        let flag = false; // Flag de troca e reset do que fez anteriormente
        for (let j = 0; j < arr.length-1-i; j++) { //checa a posição do número
            //que queremos usar no vetor 
            if (arr[j] > arr[j+1]) { // o número do índice em J é maior que o número índice
                // mais um ? 
                // se sim, entra aqui, senão, ele checa novamente no i
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = true; //trocou
            }
        }
        // Se não houve troca, o vetor já está ordenado
        if (!flag) {
            break;
        }
    }
    return arr
}

vetor = [20, 35, 18, 8, 14, 41, 3, 39]; //vetor a ser utilizado
console.log(bubleSort(vetor)); //chama a função