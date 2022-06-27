import { createRouter, createWebHistory } from "vue-router";
import LivrosView from "../views/LivrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "livros",
      component: LivrosView,
    },
  ],
});

export default router;
