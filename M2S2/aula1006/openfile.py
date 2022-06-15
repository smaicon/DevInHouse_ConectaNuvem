file = open('numeros.txt', 'r')
lista = file.readlines()
#print(lista)

with open('numeros.txt') as f:
    mylist = f.read().splitlines()
print(mylist)