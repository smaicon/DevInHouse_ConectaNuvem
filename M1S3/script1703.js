function falaOI() {
  console.count("OI");
}

var toi = setTimeout(falaOI, 2000);
//setInterval(falaOI, 2000);

//console.log(toi);

clearTimeout(toi);

//exemplo
var ioi = setInterval(falaOI, 1000);

setTimeout(function () {
  console.log("LImpando o interval");
  clearInterval(ioi);
}, 4000);

var i = 1;
var intervalOi = setInterval(function () {
  falaOI();
  i++;
  if (i > 3) {
    clearInterval(intervalOi);
  }
}, 1000);

var carros = ["gol", "escort", "corsa"];
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);

var carrosObj = {
  bla: "Gol",
  ble: "Escort",
  bli: "cORSA",
};

Document.getElementById;

console.log(carrosObj);
console.log(carrosObj.bla);
