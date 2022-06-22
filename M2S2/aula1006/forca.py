from random import choice
import os

def cls():
    os.system('cls' if os.name=='nt' else 'clear')

file=open('nomes.txt', 'r')
lista = file.readlines()
file.close()

palavra = choice(
    lista
    ).split('\n')[0].lower()

lista_letras=[]
lista_traco=[]
lista_erro=[]
digitos=[]
acertos=0

for i in range(len(palavra)):
    lista_letras.append(palavra[i])
    lista_traco.append('_')

print('Jogo da Forca')

while True:
    cls()
    if acertos == len(lista_letras):
        print('Parabéns. Você ganhou o jogo!')
        print(f'A palavra é \"{palavra}\"')
        break


    print(lista_traco)
    print('Tentativas: ' + str(digitos))
    print('Erros: ' + str(lista_erro))    
    letra = input('Informe uma letra para tentar acertar a palavra: ')        
    digitos.append(letra)
    c = lista_letras.count(letra)    
    if c > 0:
        print(f'Você acertou a letra {letra}')
        _index = 0
        for i in range(0, c):            
            _index = lista_letras.index(letra, _index)
            lista_traco[_index] = letra            
            _index+=1
            acertos+=1
        continue
    print(f'A letra {letra} não está presente.')
    lista_erro.append(letra)

    if (lista_erro == 10):
        print('Você perdeu.')
        break    
