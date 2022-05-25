import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// Importando Componentes Rotas
import Home from "./views/home/Home.vue";
//import Login from "./components/Login.vue";
//import Contatos from "./components/Contatos.vue";
import Cadastro from "./views/cadastro/Cadastro.vue";
import Usuario from "./views/cadastro/Usuario.vue";
//import Contato1 from "./components/Contato1.vue";

const routes = [
  { path: "/login", component: Login },

  {
    path: "/",
    component: Home,
    alias: ["/home"],
    beforeEnter: (to, from) => {
      if (from.fullPath === "/login") {
        return (to.fullPath = "/home");
      }
    }
  },

  {
    path: "/contatos",
    component: Contatos,
    children: [{ path: "contatoum", component: Usuario }]
  },

  { path: "/cadastro", component: Cadastro }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to, from) => {
  console.log("from: " + from.fullPath);
  console.log("To: " + to.fullPath);

  return true;
});

const app = createApp(App);

// Use Vue Router
app.use(router);

app.mount("#app");
//revisar com arquivo do maycon
