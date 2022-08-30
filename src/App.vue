<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "./components/HeaderComp.vue";
import MenuVertical from "./components/MenuVertical.vue";
</script>

<template>
  <body>
    <HeaderComp />
      <MenuVertical />
      <main class="container">
        <RouterView />
      </main>
  </body>

</template>

