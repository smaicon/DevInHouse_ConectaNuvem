/*class Carro {
  constructor(modelo, velocidade) {
    this.modelo = modelo;
    this.velocidade = velocidade;

  }
}
// funcao ou metodos
acelerar(){
 
}
*/

class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
  latir() {
    console.log(`meu nome é ${this.nome} e minha raça é ${this.raca}`);
  }
}

var rex = new Cachorro("bob", "Pastor ALemão");

rex.latir();

var salsicha = new Cachorro("Salomão", "Shitzu");
salsicha.latir();

class Quadrado {
  constructor(lado) {
    this.lado = lado;
  }
}
const quadrado = new Quadrado(4);
console.log(quadrado);

class Monstro {
  constructor(vida, velocidade) {
    this.vida = vida;
    this.velocidade = velocidade;
  }

  ataque() {
    return "O nosso monstro vai atacar";
  }
}

const monstro1 = new Monstro(30, 5);
const monstroAtaque = new Monstro(30, 5).ataque();

console.log(monstro1);
console.log(monstroAtaque);

// crie uma classe endereço com os atributos
// logradouro numero cidade estado pais cep retorno = logradouro + numero

class endereco {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;

    console.log(
      `Meu logradouro é : ${this.logradouro} e numero ${this.numero}`
    );
  }
}
const endereco1 = new endereco("Rua azul", 156);
console.log(endereco1);

// crie uma classe veiculos com os seguintes atribusots
// tipoVeiculo marca modelo ano placa numMultas velocidadeMaxima
