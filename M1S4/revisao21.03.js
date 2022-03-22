/*const pessoa = {
    rg : 3422251,
    nome : 'Fulano',
    dataNasc : '2000-05-21',
    posicaoX :0,
    caminha :funcao(){
        posicaoX  = 1;

    }

}*/

//funcao
function criaPessoa(nome, idade, rg) {
  const novaPessoa = {};
  novaPessoa.nome = nome;
  novaPessoa.idade = idade;
  novaPessoa.rg = rg;
  return novaPessoa;
}

//classe é como uma forma  que voce usa para criar objetos

class Pessoa {
  constructor(nome, idade, rg) {
    this.nome = nome;
    this.idade = idade;
    this.rg = rg;
  }
  correr() {
    console.log(`${this.nome} está correndo !`);
  }
}

const pessoa = new Pessoa("Juliana", 26, "74464545");

console.log(pessoa);
console.log(pessoa.rg);
