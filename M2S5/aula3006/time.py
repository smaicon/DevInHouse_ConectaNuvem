import time


def retorna_hora():
    print(time.asctime(time.localtime()))
    print(time.strftime("%d/%b/%Y", time.localtime()))


if __name__ == "__main__":
    hora_inicial=time.time()
    time.sleep(3)
    retorna_hora()
    hora_final=time.time()
    total=hora_final - hora_inicial
    print(f"o tempo de execucao da funcao foi de {total}")
