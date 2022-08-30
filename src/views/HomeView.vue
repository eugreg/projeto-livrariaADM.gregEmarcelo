<script>
import BlocoConteudo from "../components/BlocoConteudo.vue";
export default {
  components: {
    BlocoConteudo,
  },
};
</script>

<template>
  <main>
    <div class="livros">
      <div>
         <h2>Livros Adicionados</h2>
      </div>
       <div class="conteudo">
        <div cass="cont1">
        <BlocoConteudo />
        <BlocoConteudo />
        </div>
        <div cass="cont2">
        <BlocoConteudo />
        <BlocoConteudo />
        </div>
       </div>
    </div>
  </main>
</template>

