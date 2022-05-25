<template>
  <div id="app">
    <transition name="header" mode="in-out">
      <h1>teste</h1>
      <h1 v-if="show">Header</h1>
      <h1 v-else>header 2 </h1>
    </transition>
    <button @click="show = !show"> Alterar estado </button>
    <transition-group tag="ul">
      <ul>
        <li v-for=" i in lista" :key="i" v-text="i"></li>
      </ul>
    </transition-group>
  </div>
  <button class="btn btn-primary" @click="addPessoa">Adicionar Pessoa</button>
  <div class="row">
    <div class="col-12">
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th></th>
          </tr>
        </thead>

        <transition-group tag="tbody" name="corpo">
          <tr v-for="(p, index)  in pessoas" :key="pessoa.id">
            <td>{{ pessoa.id }}</td>
            <td>{{ pessoa.nome }}</td>
            <td>{{ pessoa.idade }}</td>
            <td><button @click="remove(index)" class="btn btn-danger">X</button></td>
          </tr>
        </transition-group>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: true,
      lista: [1, 3, 5],
      numero: 0,
      id: 0,
      pessoas: [{
        idade: 10
      }, {
        id: 1,
        nome: 'Pessoa 2',
        idade: 20
      }
      ]
    },
      methods: {

      addPessoa(){
        this.pessoas({
          id: this.pessoas[this.pessoas.length - 1].id + 1,
          nome: "Qualquer",
          idade: 50
        })
        /* this.pessoas.sort((x, y) => {
           return x.idade > y.idade;
         })*/
      },
      remove(index){
        this.pessoas.splice(index, 1);

      }
    }
    if (indiceRemover >= 0) {
      this.pessoas.splice(indiceRemover, 1);
    }
  }
}


</script>

<style>
nome-leave-from {}

.header-leave-to,
.header-enter-from {
  opacity: 0;
}

/*nome padrao from ou leave from (partida) to (fim ) / active ação do resultaod inicial classe de animaçao */
.header-leave-from,
.header-enter-to {
  opacity: 1;
  background: black;
}

.header-enter-active .header-enter-active {
  transform: opacity 2s;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

/*revisar*/
</style>
