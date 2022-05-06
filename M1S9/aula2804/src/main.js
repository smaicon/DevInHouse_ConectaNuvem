import Vue from "vue";
import App from "./App.vue";

let app = createApp(App);
//v-demo

app.directive("demo", {
  beforeMount(el, binding, vnode) {
    console.log(binding);
    /* if(binding.modifiers.lazy){
      console.log(binding)
    }*/
  }
});

app.mount("#app");
