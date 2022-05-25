import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home/Home.vue";
import Cadastro from "./views/cadastro/Cadastro.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/cadastro", component: Cadastro }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

const app = createApp(App);

// Use Vue Router
app.use(router);

app.mount("#app");
