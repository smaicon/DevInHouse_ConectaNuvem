<template>
    <div>
        <router-view></router-view>
        <router-link to="/">
            Home
        </router-link>
        <router-link to="cadastro/usuario">Usuario</router-link>
        <button class="btn btn-primary" @click="abreUsuario">Abrir Cadastro Usuario</button>
    </div>
</template>

<script >
export default {
    methods: {
        abreUsuario() {
            this.$router.push('/cadastro/usuario');
        }
    }
}

</script>

<style>
</style>
