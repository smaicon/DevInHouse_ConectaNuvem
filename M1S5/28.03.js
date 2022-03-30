// ARROW FUNCTIONS

//declaracao normal
/*
function saudacoes() {
  console.log("Olá! A");
}

const saudacoesComum = function () {
  console.log("Olá ! Comum");
};

// declaracao arrow

const saudacoesArrow = () => {
  console.log("Olá! =>");
};
saudacoes();
saudacoesComum();
saudacoesArrow();

// rev
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

vetor.forEach(function (item) {
  console.log(item);
});
*/
//funcao normal
const quadrado = function (numero) {
  return numero ** 2;
};
console.log(quadrado(2));
// com arrow function
// arrow function sem chaves retorna
// automaticamente o valor da instrução
const quadrado2 = (numero) => numero ** 2;
console.log(quadrado2(3));

//const item = new Item("bla");
// a palavra reservada this, em uma função comum possui this no  contexto de execução
// this //em arrow function é o mesmo this que foi criada | contexto de definição
class ItemA {
  descricao;
  constructor(desc) {
    this.descricao = desc;
  }

  montaItem() {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function () {
      // este this é o checkbox no evento de click
      console.log(this);
    };

    const texto = document.createTextNode(this.descricao);
    li.appendChild(checkbox);
    li.appendChild(texto);
    return li;
  }
}
//arrow function pode omitir parenteses e chaves se tens apenas um parametro ou instruçao

// função criada fora de contexto
function mostraThisA() {
  console.log(this, this.nome);
}
const mostraThisB = () => {
  console.log(this, this.nom);
};

const fruta = {
  nome: "Melão",
  imprimirA: mostraThisA,
  imprimirB: mostraThisB,
};

// chamada no constexto do objeto
fruta.imprimirA(); // melao
fruta.imprimirB(); // Undefined

// EXEMPLOS FUNÇÕES DE ARRAY

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

vetor.forEach((n) => console.log(n));
// map monta um vetor novo a partircom os returns

const resultado = vetor.map(() => {});
console.log(resultado);

const result = vetor.map((n) => n * 2);

console.log(result);

const vetObj = [
  { nome: "batata", preco: 2 },
  { nome: "arroz", preco: 4 },
  { nome: "feijão", preco: 6 },
];

const m = vetObj.map((o) => o.preco);
console.log(m);
// cria novo array com itens que deu true
const filtrado = vetObj.filter((o) => o.preco > 4);

console.log(filtrado);
// ele retorna o primeiro item que satisfaz o teste
const obj = vetObj.find((o) => o.preco === 6);
//console.log(obj);

// true se todos itens  passarem no teste
const re = vetObj.every((o) => o.preco == 6);
//console.log(re);

// true se algum dos elementos passar  no teste
const rs = vetObj.some((o) => o.preco == 6);
//console.log(rs);

// includes testa se item está no vetor
console.log(vetor.includes(3));
