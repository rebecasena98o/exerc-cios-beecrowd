
#include <stdio.h>

int main() {
    int tempo, velocidade;
    double distancia, litros;

    // Leitura dos valores
    scanf("%d", &tempo);
    scanf("%d", &velocidade);

    // Calcula a distância percorrida
    distancia = tempo * velocidade;

    // Calcula a quantidade de litros necessária
    litros = distancia / 12.0;

    // Imprime com 3 casas decimais
    printf("%.3lf\n", litros);

    return 0;
}

