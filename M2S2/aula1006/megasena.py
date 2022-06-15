from random import randint, shuffle, sample

def geraNumeros(qtd = 6):
    if qtd < 6:
        qtd = 6
    elif qtd > 14:
        qtd = 14

    numeros = []
    while len(numeros) < qtd:     
        numero = randint(1, 60)                 
        numeros.append(numero)
        numeros = list(set(numeros))
    return numeros

nums = int(input('-- Terminal Mega Sena --\n\n Informe quantos números você quer na sua aposta: \n'))
aposta = geraNumeros(nums)
print('Sua aposta é: ', str(aposta))

r = input('Deseja realizar o sorteio agora? s/n ')
if r.lower() == 's':
    sorteio = geraNumeros()
    print('Sorteio Realizado: ' + str(sorteio))    
    conj_aposta = set(aposta)
    conj_sorteio = set(sorteio)
    
    #if sorted(aposta) == sorted(sorteio):
     #   print('voce ganhou')
    
    acertos = len(conj_aposta & conj_sorteio)
    if acertos == 6:
        print('Parabéns!! Você ganhou!')        
    else:
        print(f'Não rolou. {acertos} acertos.')