class Peso():
    def __init__(self, peso) -> None:
        self.peso = peso
        
    def __str__(self) -> str:
        pass
    
    def __lt__(self, outro):
        return self.peso < outro.peso
        
        
        
        
a = Peso(50)
b = Peso(60)

print(a.peso < b.peso)
print(a > b)