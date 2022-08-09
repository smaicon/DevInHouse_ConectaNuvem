class Pessoa:
    
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        
        def falar(self)
            print("Pessoa está falando")

class Medico(Pessoa):
    
        def __init__(self, nome, idade):
            self.class_name = __class__.__name__
            super().__init__(nome=nome, idade=idade)
            
        def atender(self):
            print('f  {self.class.name} esta atendendo')
        def falar(self)
            print("medico tá malucooo")

class Cliente(Pessoa):
    
        def __init__(self, nome, idade):
            self.class_name = __class__.__name__
            super().__init__(nome=nome, idade=idade)
            
        def comprar(self):
            print('f  {self.class.name} esta comprando')

class Aluno(Pessoa):
    
        def __init__(self, nome, idade):
            self.class_name = __class__.__name__
            super().__init__(nome=nome, idade=idade)
            
        def estudar(self):
            print('f  {self.class.name} esta dormindo')

if __name__ == '__main__':
    Medico(nome="Natan", idade=25).falar()
    Cliente(nome="Natan", idade=25).comprar()
    Aluno(nome="Natan", idade=25).dormir()