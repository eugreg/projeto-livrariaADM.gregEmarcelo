import { createRouter, createWebHistory } from "vue-router";
import AutoresView from "../views/AutoresView.vue";
import LivrosView from "../views/LivrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/autores",
      name: "autores",

      component: AutoresView,
    }
  ],
});

export default router;
