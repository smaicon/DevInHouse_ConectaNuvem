var_1 = str(input("insira um texto :"))
var_2 = str(input("insira um texto :"))
var_3 = str(input("insira um texto :"))
var_4 = str(input("insira um texto :"))

print("tamanho dos textos : ")
print(len(var_1))
print(len(var_2))
print(len(var_3))


print("primeiro  texto 4x  : ")
print(var_1 * 4)

print("primeiro  texto 2x  : ")
print(var_2 * 2)

print("primeiro  texto 3x  : ")
print(var_2 * 3)


print("Juntar o primeiro texto com o terceiro")
var_4 = var_1 + var_3
print(var_4)


print("primeiro char do  quarto texto")

print(var_4[0])


print("validacao se existe o  texto 1  no terceiro texto")
print(var_1 in var_3)


print("validacao se existe o  texto 2  no quarto texto")
print(var_2 in var_4)
