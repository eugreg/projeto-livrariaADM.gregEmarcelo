<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      titulo: "Gerenciamento de Livros",
      livros: [{}],
      novo_livro: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livro.push({
          id: novo_id,
          autor: this.novo_livro,
        });
        this.novo_livro = "";
      }
    },
  },
};
</script>
<template>
  <div class="title">
    <h2>{{ titulo }}</h2>
  </div>
  <div class="form-input">
    <input type="text" v-model="novo_livro" />
    <button @click="salvar">Save</button>
  </div>
  <div class="list-autores">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.id }}</td>
          <td>{{ livro.livro }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style></style>
