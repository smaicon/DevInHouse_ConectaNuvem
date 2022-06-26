def soma(a: int, b: int) -> int:
    return a + b

# reduce e map sao utilizados em conjuntos grandes


x = map(lambda valor: valor+10, lista_pares))
y = [x+10 for x in range(1000)]
z = filter(lambda valor: valor > 10, x)
print(x)
print(y)
print(z)
