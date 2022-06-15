setA = {6, 9, 12, 24, 21}
setB = {9, 53, 12, 21, 30}

# Diferença 
# (pertencem A e não pertencem a B)
print("Diferença")
print(setA - setB)
print(setA.difference(setB))

# Diferença Simétrica 
# (itens que pertencem aos dois conjuntos e que não estão na interseção)
print("Diferença Simétrica")
print(setA ^ setB)
print(setA.symmetric_difference(setB))


# União 
# (união dos dois conjuntos)
print("União")
print(setA | setB)
print(setA.union(setB))

# Interseção 
# (pertencem ao conjunto A e B)
print("Interseção")
print(setA & setB)
print(setA.intersection(setB))