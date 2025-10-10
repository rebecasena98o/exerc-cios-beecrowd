A, B, C = map(int, input().split())

regras = {A, B, C}

maiorAB = (A + B + abs(A - B)) // 2
maior = (maiorAB + C + abs(maiorAB - C)) // 2

print(f"{maior} eh o maior")