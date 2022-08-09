
from ast import Not


class Calculo:
    
    
    @staticmethod
    def soma(a: int, b:int) -> int:
        if isinstance (a, int) and isinstance (b, int):
            return a + b
        else:
            print("deu problema nos valores inteiros")
    
    @staticmethod
    def media(a:int, b:int) -> int:
        return Calculo.soma(a,b)/2
    @staticmethod
    def multiply():
        raise NotImplementedError("ainda nao foi")
    
    
class SomaException(Exception):
    def __init__(self, message):
        super().__init__(message)

if __name__ == "__main__":
    try:
        print(Calculo.soma(a=12, b=13))    
        print(Calculo.multiply(a=12, b=13))
    except  SomaException as exception:
        print(exception)
        
    except NotImplementedError as exception:
        print(exception)
    
    