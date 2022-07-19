class Casa: 
    #private
    #protected
    
        def __init__(self,preco):
            self.__preco = preco
            self.preco = preco
    
@property
def preco(self):
    return self.__preco

@preco.setter

def preco (self, novo_preco):
    print(novo_preco)
    if novo_preco <= 0:
        self.__preco = novo_preco
    else:
        print("insira preco valido")

@preco.deletar

def preco(self):
    del self.__preco
    
casa1 = Casa(45000)
casa1.preco(20000)
casa1.__preco
        