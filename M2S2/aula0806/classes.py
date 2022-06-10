class Cachorro:
    
    def __init__(self, nome):
        self.nome = nome
        
    def setCor(self, cor):
        self.cor = cor
        
c1 = Cachorro ("Buzzy")

c1.setCor('preto')
print("A nome é " + c1.nome)
print(c1.cor)