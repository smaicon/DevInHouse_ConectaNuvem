/*function mostraVetor(v){
    for (var = 0; i < v.length; i++){
        console.log(v[i]);

    }
    return 'aqui';


}


    console.log(mostraVetor);
*/
var botao = document.getElementById("botao");
var campo = document.getElementById("entrada");

function lidaComClick(e) {
  console.log(e);
}

botao.addEventListener("click", lidaComClick);

campo.addEventListener("keydown", function (event) {
  console.log(event);
});
//revisar fim da aula 15-03
