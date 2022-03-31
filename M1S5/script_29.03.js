import Pessoa, { daTchau, daOi as ola } from "./utils_29.03";

//console.log(testeExport);
console.log(testeExport);
const maicon = new Pessoa("Maicon", 31); // default
console.log(maicon);
//ola(); // função renomeada
//daTchau(); // função com mesmo nome

//exemplos com operador rest spread
/*const pedro = ["Pedro", 25, "Programador"];
function apresenta(nome, idade, prof) {
  console.log(`${nome}, ${idade} (${prof})`);
}
apresenta(...pedro);
*/
function somaTudo(a, ...numeros) {
  console.log(a);
  return numeros.reduce((acc, num) => acc + num, 0);
}

const result = somaTudo("Breno", 45, 3, 33, 78);
console.log(result);
// exemplos com spread | espalha os valores
const pedro = ["Pedro", 32, "Programador"];

function apresenta(nome, idade, prof) {
  console.log(`${nome}, ${idade} (${prof})`);
}
apresenta(...romeu);
//cria copia e fez novo array
const ex01 = [1, 2, 3, 4];
const ex02 = [5, 99, ...ex01];

const concat = [...ex01, ...ex02];
console.log(ex02);
console.log(concat);

const objUm = { nome: "Ada", idade: 34, prof: "Prog" };
// substitui itens com mesmo nome de acordo com a ordem da aplicação do spread
const objDois = { ...objUm, nome: "Romeu" };

console.log(objDois);

// EXEMPLOS DESTRUCT
const { nome, idade, ...sobrou } = obj3;
console.log(nome, idade, sobrou);

//
const vet = ["Maicon", 2, 3, 4, 5];

// destruct na definição da função com valores padrão
function apresentaP({ nome = "A", idade = 0, prof = "P" }) {
  console.log(`${nome}, ${idade}, ${prof}`);
}
apresentaP(objUm);
//apresentaP({});

/*const complex = {
  nome: "Juliana",
  itens: ["chave", "carteira"],
};
const {
  nome,
  itens: [a, b],
} = complex;*/
const complex = {
  nome: "Juliana",
  itens: { key: "chave" },
};

// destruct do desctruct (inception)
const {
  nome = "Marta",
  itens: { key },
} = complex;

console.log(nome, a, b);

//const complex = {
const complex1 = {
  nome: "Juliana",
  itens: { key: "chave" },
};

// destruct do desctruct (inception)
const {
  nome2 = "Marta",
  itens: { key },
} = complex;

console.log(nome, key);

const prods = [
  { titulo: "batata", preco: 3 },
  { titulo: "feijao", preco: 6 },
];

const [{ titulo, preco }, bar] = prods;

console.log(titulo, preco, bar);
