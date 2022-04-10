var p = document.getElementById("display");

var carro = {
  marca: "ford",
  modelo: "escort",
  ano: 1995,
  revisoes: [
    {
      data: "01/01/2022",
      descricao: "trocado oleo",
    },
    {
      data: "15/06/2022",
      descricao: "trocado pneus",
    },
  ],
};
carro.revisoes[0].descricao = "mudei";
console.log(carro);
console.log(carro.modelo);

carro.revisoes.forEach(function (item) {
  console.log(item);
});
//for in da o indice de cada um key/index
for (var key in carro) {
  console.log(key);
}

//for of me da os valores usa apenas com arrray mostra em pares key value
for (var item of Object.entries(carro)) {
  console.log(item);
}

console.log(carro);

//transforma o carro em string JSON
var carroJSON = JSON.stringify(carro);
console.log(carroJSON);

p.innerHTML = carroJSON;
//p.innerHTML("teste");
// // transforma string JSON em objeto
var carroObj = JSON.parse(carroJSON);
console.log(carroObj);

var exemplo = `{ 
    "nome" : "pedro",
    "idade" : 30,
    "tem_pet: true

}`;
console.log(exemplo);
//console.log(JSON.parse(exemplo));
//localstorage só aceita texto
//metodos set get remove e clear

//exemplo de uso de localstorage
/*
console.log(--> localStorage);
var carroJSON = JSON.stringify(carro);
localStorage.setItem("carro", carroJSON);

//recuperando item no localstorage e convertendo para obj
var item = localStorage.setItem(carro);
if(item){
    item = JSON.parse(item);
    console.log(item);
}else {
    console.log("item nao encontrado");
}
*/