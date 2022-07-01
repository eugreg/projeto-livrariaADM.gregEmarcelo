import { createRouter, createWebHistory } from "vue-router";
import AutoresView from "../views/AutoresView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import EditorasView from "../views/EditorasView.vue";
import LivrosView from "../views/LivrosView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/editora",
      name: "editora",
      component: EditorasView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
  ],
});

export default router;
