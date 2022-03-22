// escopo global

var global = " estou no escopo global";


//  escopo de função 

function funcao() {
    var fucn = "estou no escopo de funcao "
    console.log({global, func});

}

// exemplo de blocos
// if, else, for, while, switch 
if (funcao) {

    const bloco = 'estou no escopo de bloco'
}

console.log({'estou no escopo de bloco'});

//funcao
/*
function definirLargura(){
    var largura = 100;
    console.log(largura);
}
definirLargura();

console.log(largura);

var vaz 
*/
//escopo de bloco let e const nao vazam do escopo de bloco
//se deixar var pega a ultima info sedeixar o const nao altera fica o primeiro numero com var 
//se deixar o var troca pega a ultima info. EVITAR O VAR A MENOS QUE PRECISE NO ESCOPO GLOBAL
// professor raramente usou o var só const e let
var altura = 100;

if(altura > 90){
    var largura = 100;
    console.log(largura);
}
console.log(largura);


let pontos = 50
let vencedor = false;

if (pontos < 40 ) {

}


//exemplo variaveis "içadas"
/*console.log(a);
const a = 6; //gera erro
var a = 6 ;
*/
//rever aula até 20:20

//exemplo de funçao "içada"
mostraOi();
function mostraOi(){
    console.log("Oi!")
}

window.nomeDaVar = 'bla';

console.log(nomeDaVar);
