<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return{
      categoria: {},
      categorias: [],
    };  
  },
  async created(){
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  }, 
  methods: {
    async salvar() {
      if (this.categoria.id){
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria){
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
     editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
    
  },
};
</script>

<template>
  <main class="forms-geral-tabela">
    <div class="forms-geral">
      <div class="titulo">
        <h2>Gerenciamento de categorias</h2>
      </div>
      <div class="form-input">
        <input
          type="text"
          v-model="categoria.categoria"
          placeholder="insire categorias"
        />
        <button @click="salvar">Save</button>
      </div>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr class="tabela-titulo">
            <th id="tabela-titlo-id">ID</th>
            <th>categorias</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.categoria }}</td>
            <td>
              <button @click="excluir(categoria)">excluir</button>
              <button @click="editar(categoria)">editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
