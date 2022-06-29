class Pessoa:
    def __init__(self, pessoa, valor_retornado = 0 ):
        self.pessoa = pessoa
        self.valor_retornado = valor_retornado
        
    def calcularComissaoVendas(self, vendas):
        self.valor_retornado = vendas * 0.10

class vendedorPj(Pessoa):
    def calcularComissaoVendas(self, vendas):
        self.valor_retornado = vendas * 0.18

class vendedorClt(Pessoa):
    def calcularComissaoVendas(self, vendas):
        self.valor_retornado = vendas * 0.03 + 1100


vendedorpj1 = vendedorPj('Miguel')

print(vendedorPj.calcularComissaoVendas())