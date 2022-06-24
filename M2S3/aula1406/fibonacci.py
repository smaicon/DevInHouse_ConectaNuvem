n_termos = int(input("Quantos termos da sequência Fibonacci você quer ver? "))  
  
v_1 = 0  
v_2 = 1  
counter = 0  
  

if n_termos <= 0:  
    print ("Número inválido. Digite valor positivo.")  


elif n_termos == 1:  
    print ("Sequência Fibonacci solicitada: ", n_termos, ": ")  
    print(v_1)  


else:  
    print ("Sequência Fibonacci solicitada: ")  
    while counter < n_termos:  
        print(v_1)  
        val = v_1 + v_2  


        v_1 = v_2  
        v_2 = val 
        counter += 1  