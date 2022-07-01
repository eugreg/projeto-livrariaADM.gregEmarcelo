<script>
import BlocoConteudo from "../components/BlocoConteudo.vue";
import BlocoConteudo2 from "../components/BlocoConteudo2.vue";
export default {
  components: {
    BlocoConteudo,
    BlocoConteudo2,
  },
};
</script>

<template>
  <div class="titulo-geral">
    <p>Administração Geral</p>
  </div>
  <div class="conteudo-livro">
    <BlocoConteudo />
    <BlocoConteudo />
    <BlocoConteudo />
    <BlocoConteudo />
  </div>
  <div class="conteudo-secundario">
    <BlocoConteudo2 />
  </div>
</template>
