

#include <stdio.h>

int main() {

int T, X, i;
    int fib[40], calls[40];

    // Pré-calcula Fibonacci e chamadas até 39
    fib[0] = 0;
    fib[1] = 1;
    calls[0] = 0; // fib(0) não chama mais nada
    calls[1] = 0; // fib(1) também não chama mais nada

    for (i = 2; i <= 39; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        calls[i] = calls[i - 1] + calls[i - 2] + 2;
        // +2 porque cada fib(n) chama fib(n-1) e fib(n-2)
    }

    scanf("%d", &T);

    while (T--) {
        scanf("%d", &X);
        printf("fib(%d) = %d calls = %d\n", X, calls[X], fib[X]);
    }

    return 0;

}
