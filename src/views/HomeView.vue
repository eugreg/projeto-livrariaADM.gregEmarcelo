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
        <div class="titulo-home">
           <h2>Livros Adicionados</h2>
        </div>
         <div class="conteudo">
          <BlocoConteudo />
          <BlocoConteudo />
          <BlocoConteudo />
          <BlocoConteudo />
         </div>
         <div class="conteudo">
          <BlocoConteudo />
          <BlocoConteudo />
          <BlocoConteudo />
          <BlocoConteudo />
         </div>
      </div>
    </main>
  </template>
  
  