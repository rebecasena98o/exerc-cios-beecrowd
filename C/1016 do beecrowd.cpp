
#include <stdio.h>

int main() {
    int distancia;
    int tempo;

    scanf("%d", &distancia);

    // O carro Y se distancia do carro X a 30 km/h (90 - 60)
    // Como ele se distancia 1 km a cada 2 minutos, tempo = distancia * 2
    tempo = distancia * 2;

    printf("%d minutos\n", tempo);

    return 0;
}

