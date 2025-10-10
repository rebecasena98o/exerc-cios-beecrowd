P1 = map(float, input().split())
P2 = map(float, input().split())

x1, y1 = P1
x2, y2 = P2

distancia = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
print(f"{distancia:.4f}")