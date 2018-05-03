import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Story from "./Story.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: App },
  { path: "/story/:id", component: Story }
];

const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  router
  // render: h => h(App)
});
