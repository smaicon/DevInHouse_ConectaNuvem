class Cachorro:
    
    def __init__(self, nome):
        self.nome = nome
        
    def setCor(self, cor):
        self.cor = cor
        
c1 = Cachorro ("Buzzy")

c1.setCor('preto')
print(c1.nome)
print(c1.cor)