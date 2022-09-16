def validar(funcao):
    return funcao


def soma(x,y):
    return x + y

if __name__ == "__main__":
    x = validar(soma)
    print(x(1,2))
    