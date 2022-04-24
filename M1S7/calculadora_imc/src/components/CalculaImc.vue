<template>
    <div class="calculadora">
        <h1> Calcule seu IMC </h1>
        <div class="entra">
            <p>informe seu peso</p>
            <input type="number" v-model="peso">
        </div>
        <div class="entrada-altura">
            <p>informe sua altura</p>
            <input type="number" v-model="altura"/>
        </div>
        <button @click="calcular"> Calcular  </button>  </div>
        {{resultado}}
        <p>Voce está com peso normal</p>
</template>

<script>
export default {
    data(){
        return{
         peso: null,
         altura:null,
         resultado: null
        }
    },
    methods :{
        calcular(){
          
         const imc = (this.peso / Math.pow(this.altura,2));

          if (imc < 18.5){
              this.resultado = `Voce esta abaixo do peso, seu imc é ${imc}`
          } else if (imc >= 18.5 && imc < 25) {
              this.resultado = `Voce esta com peso normal, seu imc é ${imc}`
          }
           else if (imc >= 25 & imc < 30){
              this.resultado = `Voce esta acima do peso, seu imc é ${imc}`
          }
        }
        }
    }

</script>

<style>

</style>