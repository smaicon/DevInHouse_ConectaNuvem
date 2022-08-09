class SomaException (Exception):
    
    def __init__(self,message):
        super().__init__(message)

def validador(f, x, y):

    def valida(x, y):
    
        if x is None or y is None:
            raise SomaException("valores nunos não são aceitos neste calculo")
        if not isinstance(x, int) or not isinstance(y, int):
            raise SomaException("Para realizar o calculo da soma é necessário que os numeros sejam inteiros")

def calcular(f, x, y):
    return f(x, y)

    return valida

@validador
def soma(x, y):
    return(x + y)

@validador
def media(x, y):
    return soma(x,y) / 2


if __name__ == "__main__":
    print(soma(3, 3))





if __name__ == "__main__":  
    print(validador(soma, 10, 20))    