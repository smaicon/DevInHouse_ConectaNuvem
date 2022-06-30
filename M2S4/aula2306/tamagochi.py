class Tamagochi():
    def __init__(self) -> None:
        self.interacoes = 0
        self.fome = 3
        
    def deuComida(self):
        self.interacoes = 0
        self.fome = 0.5
        self.morto = False
        self.saude = 3
        
    def estaMorrendo(self) -> None:
        if self.fome => 3.5 and self.saude <= 1.5 :
            print("esta morrendo")
            print(f'mais {3-self.interacoes} e ele vai morrer')
    
    operacao = int(input(f"""
                         
             ############ Tamagochi ########
             
             1 -  Criar Tamagochi
             2 - Desligar            
             ###############################               
                         """))
    
    
    interacoes = 0
    
    tamagochi = Tamagochi()
    
    if operacao == 1:
        while True:
            itemMenu = int(input(f"""
                            ======== Tamagochi =================
                            1 - falar nome
                            2 - comer
                            0 - Sair \n\n
                            99 - Resetar     
                                 
                                 """))
            
                            if tamagochi.morto == True:
        print("ele morreu !!")       
        break
            
            
            