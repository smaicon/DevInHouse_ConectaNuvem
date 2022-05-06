<template>
  <div id="app">
    <h1 v-show="count > 0">Count é maior que zero</h1>
    <h1 v-if="count === 0">Count = 0</h1>
    <h2 v-else-if="count > 0 && count < 3">Count maior 0 e Count menor 3</h2>
    <h1 v-else>Igual ou maior que 3</h1>
    <button @click="count++">Alterar estado</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: true,
      count: 0,
    };
  },
};
</script>

<style>
</style>
