

#include <stdio.h>
 
int main() {
 
    double salario, imposto = 0.0;
    scanf("%lf", &salario);

    if (salario <= 2000.0) {
        printf("Isento\n");
    } else {
        if (salario > 2000.0 && salario <= 3000.0) {
            imposto = (salario - 2000.0) * 0.08;
        } else if (salario > 3000.0 && salario <= 4500.0) {
            imposto = (1000.0 * 0.08) + (salario - 3000.0) * 0.18;
        } else if (salario > 4500.0) {
            imposto = (1000.0 * 0.08) + (1500.0 * 0.18) + (salario - 4500.0) * 0.28;
        }
        printf("R$ %.2lf\n", imposto);
    }

    return 0;

}
