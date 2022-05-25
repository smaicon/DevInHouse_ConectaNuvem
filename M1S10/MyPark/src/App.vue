<template>
  <div class="container">

    <my-header v-bind:title="title"></my-header>

    <vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }">
      <div class="row g-2">
        <div class="col-md-4">
          <label for="nome">Nome</label>
          <vee-field :rules="nome" name="nome" class="form-control" v-model="reserva.nome" />
          <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
          <!--input type="text" class="form-control" v - model="reserva.nome" required!-->
        </div>

        <div class="col-3">
          <label for="">Data Reserva</label>
          <vee-field type="date" name="dataReserva" class="form-control" v-model="reserva.dataReserva" />
          <span class="text-danger" v-text="errors.dataReserva" v-show="errors.dataReserva"></span>

        </div>

        <div class="col-3">
          <label for="">Hora de Entrada</label>
          <vee-field type="time" name="horaEntrada" class="form-control" v-model="reserva.horaEntrada" />
          <span class="text-danger" v-text="errors.horaEntrada" v-show="errors.horaEntrada"></span>
        </div>

        <div class="col-2">
          <label for="">Qtd. Horas</label>
          <vee-field type="number" name="qtdHoras" class="form-control" v-model="reserva.qtdHoras" />
          <span class="text-danger" v-text="errors.qtdHoras" v-show="errors.qtdHoras"></span>
        </div>

        <div class="col-4">
          <label for="">Placa</label>
          <vee-field name="placa" class="form-control" v-model="reserva.placa" />
          <span class="text-danger" v-text="errors.placa" v-show="errors.placa"></span>
        </div>

        <div class="col-4">
          <label for="">Modelo</label>
          <vee-field name="modelo" class="form-control" v-model="reserva.modelo" />
          <span class="text-danger">{{ errors.modelo }}</span>
        </div>

        <div class="col-4">
          <label for="">Ano</label>
          <vee-field type="number" name="ano" class="form-control" v-model="reserva.ano" />
          <span class="text-danger" v-text="errors.ano" v-show="errors.ano"></span>
        </div>


        { {reservas }}

        <div class="col-12">
          <button type="submit" class="btn btn-primary" style="margin-right: 5px">Save</button>
          <button type="button" class="btn btn-danger" @click="clear">Limpar</button>
        </div>
      </div>
    </vee-form>
    <hr>
    <div class="text-center" v-if="reservas.length === 0">
      Não há reservas cadastradas
    </div>

    <table class="table" v-else>
      <thead>
        <tr v-for="reserva in reservas" :key="reserva.id">
          <th>Nome</th>
          <th>Data Reserva</th>
          <th>Hora de Entrada</th>
          <th>Qtd Horas</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        <td>{{ reserva.nome }}</td>
        <td>{{ reserva.dataReserva }}</td>
        <td>{{ reserva.horaEntrada }}</td>
        <td>{{ reserva.qtdHoras }}</td>
        <td>{{ reserva.placa }}</td>
        <td>{{ reserva.modelo }}</td>
        <td>{{ reserva.ano }}</td>


      </tbody>
    </table>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import { Form, Field, defineRule } from 'vue-validate';

defineRule("required", value => {
  if (!value || value.length === 0) {
    return "Campo Obrigatorio"
  }


  return true;
});
defineRule("dataSuperior", value => {
  if (new Date(value + ' 00:00:00') < new Date()) {
    return "Data deve ser posterior a data atual"
  }
  return true;
});

defineRule("placaValida", value => {
  //[a-z]{numero de posicoes}
  //[A-Z]
  //[0-7]
  //regra para validar placa padrao mercosul
  let regexp = /^ [a-zA-Z]{3}-[0-9]{1}[a-zA-Z0-9]{1}[0-9]{2}$/
  if (!regexp.test(value)) {
    return "Placa invalida"
  }
  return true;

});
export default {
  components: {
    'my-header': Header,
    'vee-form': Form,
    'vee-field': Field
  },
  data() {

    return {
      schema: {
        nome: "required",
        dataReserva: "required|dataSuperior",
        horaEntrada: "required",
        qtdHoras: "required",
        placa: "required|placaValida",
        modelo: "required",
        ano: "required"

      },
      show: true,
      title: 'Cadastro e listagem de reservas',
      reserva: {},
      reservas: [],
      tempo: "00:00:00.000",
      valor: 0,

    }
  },
  methods: {
    save() {
      this.reserva.id = this.reservas.length + 1;
      this.reservas.push(this.reserva);
      this.reserva = {};
    },
    clear() {
      this.reserva = {};
    }
  }
}
</script>

