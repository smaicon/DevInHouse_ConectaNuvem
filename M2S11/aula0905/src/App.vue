<template>
<div>
<button @click="buscaUsers"> GET</button>
<button @click="buscaUser"> GET/ID</button>
<button @click="salvaUser"> POST</button>
<button @click="atualizaUser"> PUT</button>
<button @click="excluiUser"> DELETE</button>

<input type="text" v-model="id">

{{user}}
</div>
  
</template>

<script>

import axios from 'axios'
export default {
data(){
       return {
         id:0,
         users:[],
         user:{}
       }
      },
methods:{
  //busca todos
     buscaUsers(){ 
      
        console.log('enviar !');
        const promisse = axios.get('https://627da7b9b75a25d3f3a9e67d.mockapi.io/api/v1/users')
         promisse.then((response) =>{
           this.users = response.data;
        }).catch((err) =>{
            console.log(err)
          })
        console.log("terminou a funcao")
        console.log(this.users);
    },
    //busca por id
   
    buscaUser(){
        const promisse = axios.get(`https://627da7b9b75a25d3f3a9e67d.mockapi.io/api/v1/users/${this.id}`);
         promisse.then((response) =>{
         this.user = ( response.data);
        }).catch((err) =>{
            console.log(err)
          })
        console.log("terminou a funcao")
        console.log(this.users);


    },
    salvaUser(){
      axios.post('https://627da7b9b75a25d3f3a9e67d.mockapi.io/api/v1/users', {
        name:'novo usuario',
        email: 'novo@usuario.com'
      }).then((response) =>{
        console.log(response.data);
      })

      axios.post()
    },
    atualizaUser(){
       axios.putaxios.get(`https://627da7b9b75a25d3f3a9e67d.mockapi.io/api/v1/users/${this.id}/`,{
         name: 'novo nome !!!',
       }).then((response) => {
         console.log(response.data);
       })

    },
    excluiUser(){
      axios.delete(`https://627da7b9b75a25d3f3a9e67d.mockapi.io/api/v1/users/${this.id}`)
      .then((response)=> {
        console.log(response);
      })

    },

  }
}

</script>

<style>

</style>