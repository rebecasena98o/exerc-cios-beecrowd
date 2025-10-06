
#include <stdio.h>

int main() {
    double A, B, C;
    const double PI = 3.14159;

    scanf("%lf %lf %lf", &A, &B, &C);

    double area_triangulo = (A * C) / 2.0;
    double area_circulo = PI * C * C;
    double area_trapezio = ((A + B) * C) / 2.0;
    double area_quadrado = B * B;
    double area_retangulo = A * B;

    printf("TRIANGULO: %.3lf\n", area_triangulo);
    printf("CIRCULO: %.3lf\n", area_circulo);
    printf("TRAPEZIO: %.3lf\n", area_trapezio);
    printf("QUADRADO: %.3lf\n", area_quadrado);
    printf("RETANGULO: %.3lf\n", area_retangulo);

    return 0;
}

