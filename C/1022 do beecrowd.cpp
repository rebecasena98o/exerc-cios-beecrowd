
#include <stdio.h>

int mdc(int a, int b) {
    if (b == 0) return a;
    return mdc(b, a % b);
}

int main() {
    int N;
    int N1, D1, N2, D2;
    char op, barra;

    scanf("%d", &N);

    while (N--) {
        scanf("%d %c %d %c %d %c %d", &N1, &barra, &D1, &op, &N2, &barra, &D2);

        int num, den;

        if (op == '+') {
            num = N1 * D2 + N2 * D1;
            den = D1 * D2;
        } else if (op == '-') {
            num = N1 * D2 - N2 * D1;
            den = D1 * D2;
        } else if (op == '*') {
            num = N1 * N2;
            den = D1 * D2;
        } else {
            num = N1 * D2;
            den = N2 * D1;
        }

        int simpl = mdc(num < 0 ? -num : num, den);
        printf("%d/%d = %d/%d\n", num, den, num / simpl, den / simpl);
    }

    return 0;
}

