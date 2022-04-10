class Veiculo {
  constructor(
    tipoVeiculo,
    marca,
    modelo,
    ano,
    placa,
    numMultas,
    velocidadeMAX
  ) {
    this.tipoVeiculo = tipoVeiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.numMultas = numMultas;
    this.velocidadeMAX = velocidadeMAX;
  }

  getTipoModelo() {
    console.log(`Tipo: ${this.tipoVeiculo} Modelo: ${this.modelo}`);
  }

  adicionaMulta(placa) {
    if (placa == this.placa) {
      this.numMultas++;
      console.log(`Nº de Multas: ${this.numMultas}`);
    } else {
      console.log(`Placa inválida.`);
    }
  }
}

var carro1 = new Veiculo("Carro", "Renault", "Logan", 2021, "Ax1x20", 2, 140);
var carro2 = new Veiculo("Carro", "WV", "Gol", 2021, "Axv1012", 8, 140);

carro1.adicionaMulta("Ax1x20");
carro2.adicionaMulta("Axv1012");

carro1.getTipoModelo();
console.log(carro2);
