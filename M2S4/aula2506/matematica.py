class Matematica():
    def __init__(self, numerador, denominador = 1 ) -> None:
        self.numerador = numerador
        self.__denominador = denominador
        
    @property
    def denominador(self):
        return self.__denominador
    
    @denominador.setter
    def denominador(self, denominador):
        if denominador != 0:
            self.__denominador = denominador
        else:
            print("Informe um denominador valido")
    
    def realizaCalculo(self):
        print(f'{self.numerador}/{self.__denominador} = {self.numerador / self.__denominador}')
        
    conta = Matematica(125)
    conta.denominador = 9
    conta.realizaCalculo()
        