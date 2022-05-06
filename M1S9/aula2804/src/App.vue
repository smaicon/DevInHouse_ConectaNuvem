<template>
  <div id="app">
    <h1 v-text="Cabeçalho" v-demo.lazy></h1>
    <div v-demo="nome">
      <label for="">Label </label>
      <input type="text" v-model="nome" />
    </div>
    <ul>
      <li v-for="(elemento, i) in lista" key="i">
        {{ i + " - " + elemento }}
      </li>
    </ul>
    <table>
      <tr>
        <th>nome</th>
        <th>nome</th>
      </tr>
      <tr v-for="(p, index) in pessoas" :key="index">
        <td>{{ index }}</td>
        <td>{{ p.nome }}</td>
        <td>{{ p.idade }}</td>
        <td><button @click="del(index)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lista: ["Elem1", "Elem2", "Elem3"],
      pessoas: [
        {
          nome: "Joao da silva",
          idade: 50,
        },
        {
          nome: "Jose de Souza",
          idade: 30,
        },
        {
          nome: "Maria  Souza",
          idade: 40,
        },
      ],
    };
  },
  methods: {
    del(index) {
      this.pessoas.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
