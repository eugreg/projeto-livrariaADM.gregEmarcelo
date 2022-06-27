<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "./components/HeaderComp.vue";
import MenuVertical from "./components/MenuVertical.vue";
</script>

<template>
  <HeaderComp />
  <div class="app-main">
    <MenuVertical />
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style>
.app-main {
  display: flex;
}

.container {
  padding: 20px;
}
</style>
