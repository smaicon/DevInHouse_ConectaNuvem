<template>
  <div id="app">
    <h1>teste</h1>
    <router-view></router-view>
    <hr>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'teste'
    }
  }
}
</script>

<style>
</style>
