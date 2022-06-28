class Animal:
    def __init__(self, nom, cor):
        self.nome = nome
        self.cor = cor
    def comer(self):
        print('....')
        

class Felino:
        def __init__(self, nome, cor):
            self.nome = nome
            self.cor = cor
    

class Gato(Animal, Felino):
    def __init__(self, nome, cor):
        super(Gato, self).__init__(nome, cor)