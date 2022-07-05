<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editores: [],
      nova_editora: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_editora !== "", this.novo_site !=="") {
        const novo_id = uuidv4();
        this.editores.push({
          id: novo_id,
          editora: this.nova_editora,
          site: this.novo_site,
        });
        this.nova_editora = "";
        this.novo_site = "";
      }
    },
     excluir(editora) {
      const indice = this.editores.indexOf(editora);
      this.editores.splice(indice, 1);
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
        <input type="text" v-model="nova_editora" placeholder="editores"/>
        <input type="text" v-model="novo_site" placeholder="site"/>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editores" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.editora }}</td>
            <td>{{ editora.site }}</td>
            <td>
              <button @click="excluir(editores)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
