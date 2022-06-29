class Onibus:
    def __init__(self, preco, trajeto, poltronas=46, marcadas=[]) -> None:
        self.preco = preco
        self.trajeto = trajeto
        self.poltronas = 46
        self.marcadas = marcadas

    def checaPoltrona(self, poltrona):
        if poltrona in self.marcadas:
            return False
        return True


    def marcaPoltrona(self, poltrona):
        self.marcadas.append(poltrona)


    def desmarcaPoltrona(self, poltrona):
         self.marcadas.remove(poltrona)


    def comprarPassagem(self, poltrona):
        return super().comprarPassagem(poltrona)


    def cancelarPassagem(self, poltrona):
        return super().cancelarPassagem(poltrona)


onibus = Onibus(25, 'fln->sp')
onibus.comprarPassagem(30)
