class Pessoa():
    def __init__(self, nome, idade) -> None:
        self.idade = idade
    self.nome = nome
        
#def __str__(self):
    #return str(self. __dict__.get('nome'))

@staticmethod

def printar(self, key):
    print(self.__dict__.get(key))


@classmethod

def printar2(cls, ):
    pass

a = Pessoa('Matheus', 40)
a.printar('nome')
    
Pessoa.printar2()