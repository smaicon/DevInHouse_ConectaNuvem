var listadeLinguagens = ["a", "b", "c"];

listadeLinguagens.push("java", "php", "c++");

console.log(listadeLinguagens[1]);
console.log("Tamanho:" + listadeLinguagens.length);

var count = 0;
console.log("Com for");
for (var i = 0; i < 11; i++) {
  console.log(i);
}
console.log("Com While");
while (count < 10) {
  console.log(count);
  count++;
}

var linguagens = ["python", "java", "php"];
console.log("Com For in | é menos flexivel ");
for (var index in linguagens) {
  console.log(linguagens[index]);
}

var listaDeCarros = ["uno", "fusca", "escort", "gol"];

for (var carro of listaDeCarros) {
  if (carro === "uno") continue;
  if (carro === "escort") break;
  console.log(carro);
}
console.log("fora");
/* para cada */
console.log("lista de carros 3");
const listaDeCarros3 = ["uno", "fusca", "escort", "gol", "hb20", "corsa"];

listaDeCarros3.forEach(function (nomeDoCarro, indice) {
  console.log(`${indice} - ${nomeDoCarro}`);
});

//for off
console.log("for off");
var listaDeCarros2 = ["uno", "fusca", "escort", "gol", "hb20", "corsa"];
for (var carro of listaDeCarros2) {
  console.log(carro);
}

function f(x, y) {
  var resultado = x ** 2 + y;
  return resultado;
}
var retorno = f(2, 1);
console.log(retorno);

function testeUm(batata, y) {
  console.log(batata, y);
  return batata ** 2 + y;
}
console.log(testeUm(2, 1, 4));

function preencheVetor(n) {
  var vetor = [];
  for (var i = 0; i <= n; i++) {
    vetor.push(i);
  }
  return vetor;
}
console.log(preencheVetor(4));

/*funcao botoes */

var botao = document.getElementById("botao");
var campo = document.getElementById("entrada");

function lidaComClick() {
  console.count("outra coisa");
}
//liga funcao com botao // onclick uma funcao aaddEventListener diversos
botao.onclick = lidaComClick;

campo.onkeydown = function. () {
  console.log("apertou a tecla");
};

