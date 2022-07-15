<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return{
      autor: {},
      autores: [],
    };  
  },
  async created(){
    this.autores = await autoresApi.buscarTodosOsAutores();
  }, 
  methods: {
    async salvar() {
      if (this.autor.id){
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor){
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
     editar(autor) {
      Object.assign(this.autor, autor);
    },
    
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="titulo">
        <h2>Gerenciamento de Autores</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="autor.autor" placeholder="insire autor " />
        <button @click="salvar">Save</button>
      </div>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr>
            <th class="tabela-titulo-id">ID</th>
            <th class="tabela-titulo">Autor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.autor }}</td>
            <td>
              <button @click="excluir(autor)">excluir</button>
              <button @click="editar(autor)">editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
