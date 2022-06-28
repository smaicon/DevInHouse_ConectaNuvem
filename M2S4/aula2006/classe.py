from numpy import append
from random import randint


class Garcom:
    def __init__(self, nome):
        self.nome = nome


class Pizza:
    def __init__(self, tamanho, preco, sabor='calabresa'):
        self.tamanho = tamanho
        self.preco = preco
        self.sabor = sabor


class Cliente:
    def __init__(self, nome, mesa=1, valor_gasto=0):
        self.nome = nome
        self.mesa = mesa
        self.valor_gasto = valor_gasto

    def somaValor(self, valor):
        self.valor_gasto += valor


class Pedido:
    def __init__(self, codigo, mesa, valor, nomeCliente, nomeGarcom):
        self.codigo = codigo
        self.mesa = mesa
        self.valor = valor
        self.nomeCliente = nomeCliente
        self.nomeGarcom = nomeGarcom


p1 = Pizza('p', 39.90)
p2 = Pizza('m', 59.90)
p3 = Pizza('g', 79.90)

garcom = Garcom('Pedro')
cliente = Cliente('Joao')

pedidos = []

while True:
    pizzaPedido = int(input(f"""realizar pedido para o cliente{cliente.nome}(mesa: {cliente.mesa})

                            1 - Pizza P
                            2 - Pizza M
                            3 - Pizza G
                            - ---------------------------------------------------------------
                            0 - sair \n\n


                            """))
    if pizzaPedido == 0:
        break
    preco = 0

    if pizzaPedido == 1:
        preco = p1.preco
    elif pizzaPedido == 2:
        preco = p2.preco
    else:
        preco = p3.preco

    cliente.somaValor(preco)
    pedidos.append(Pedido(randint(0, 100), cliente.mesa,
                   preco, cliente.nome, garcom.nome))
print(f"\n\n\n o cliente {cliente.nome} gastou {cliente.valor_gasto}.")
print(pedidos[0].codigo)
