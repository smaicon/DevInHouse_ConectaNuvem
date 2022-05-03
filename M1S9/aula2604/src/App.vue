<template>
  <div id="app">
    <p v-text="msg"></p>
    <br />
    <label>V-Bind</label>
    <input type="text" value="msg" />
    <br />
    <label>V-Model</label>
    <input type="text" :value="msg" />
    <br />
    <label>V-Model.lazy</label>
    <input type="text" v-model.lazy="msg" />

    <label>V-Model.number</label>
    <label for="">{{ typeof msg }} </label>

    <input type="text" v-model.number="msg" />

    <button @click="converte">Converter</button>

    <br />
    <label>v-model.trim</label>
    <input type="text" v-model.trim="msg" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
