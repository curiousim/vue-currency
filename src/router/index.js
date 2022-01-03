import Vue from "vue";
import VueRouter from "vue-router";
import Converter from "../views/Converter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Converter",
    component: Converter,
  },
  {
    path: "/rates",
    name: "Rates",
    component: () =>
      import(/* webpackChunkName: "rates" */ "../views/Rates.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
