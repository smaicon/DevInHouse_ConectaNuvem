<template>
  <div id="app">
<h1 v-once v-text="msg" class="colorLabel"></h1>
<input type="text" name="" id="" value="msg">
<button v-on:click="trocarMensagem">Trocar Mensagem</button>
<button @click="colorLabel = 'colorRed'">testes</button>
<input type="text" v-model="colorLabel">
 <p v-text="html"></p>
 <p v-html="html"></p>

 ----
 <h1 v-text="msg" :style="'color: ' + colorLabel"> </h1>
 <button @click="colorLabel = 'red'">troca Car</button>

<input type="text" v-model="msg" value="testeteste">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      html: "<input type='number' />",
      colorLabel: 'orange'
    }
  },
  methods:{
    trocarMensagem(){
      this.msg = 'Nova mensagem !!!';
    }
  },
}
</script>

<style>
.colorRed{
  color: red;
}
</style>
