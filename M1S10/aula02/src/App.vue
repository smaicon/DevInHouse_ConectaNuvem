<template>
  <div id="app">
    <h1>teste</h1>
    <router-view></router-view>

    <input type="text" v-model="texto">
  </div>

</template>

<script>
export default {

  data() {
    return {
      texto: "APP"
    }
  }
}
</script>

<style>
</style>
