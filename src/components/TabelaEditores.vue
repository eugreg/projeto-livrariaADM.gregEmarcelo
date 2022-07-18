<script>
import EditoresApi from "@/api/editores.js";
const editoresApi = new EditoresApi();
export default {
  data() {
    return {
      editora: {},
      editores: [],
    };
  },
  async created() {
    this.editores = await editoresApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editoresApi.atualizarEditora(this.editora);
      } else {
        await editoresApi.adicionarEditora(this.editora);
      }
      this.editores = await editoresApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editoresApi.excluirEditora(editora.id);
      this.editores = await editoresApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="titulo">
        <h2>Gerenciamento de Editores</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="editora.editora" placeholder="editores" />
        <input type="text" v-model="editora.site" placeholder="site" />
        <button @click="salvar">Save</button>
      </div>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr class="tabela-titulo">
            <th id="tabela-titulo-id">ID</th>
            <th>Editora</th>
            <th>site</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editores" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.editora }}</td>
            <td>{{ editora.site }}</td>
            <td>
              <button @click="excluir(editora)">excluir</button>
              <button @click="editar(editora)">editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
