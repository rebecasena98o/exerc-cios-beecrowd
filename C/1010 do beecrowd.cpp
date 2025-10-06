1010 do beecrowd

#include <stdio.h>

int main() {
    int codigo1, quantidade1, codigo2, quantidade2;
    double valor1, valor2, total;

    // lê a primeira linha: código, quantidade e valor unitário da peça 1
    scanf("%d %d %lf", &codigo1, &quantidade1, &valor1);

    // lê a segunda linha: código, quantidade e valor unitário da peça 2
    scanf("%d %d %lf", &codigo2, &quantidade2, &valor2);

    total = (quantidade1 * valor1) + (quantidade2 * valor2);

    printf("VALOR A PAGAR: R$ %.2lf\n", total);

    return 0;
}
