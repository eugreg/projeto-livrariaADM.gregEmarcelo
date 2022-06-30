<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [{}],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          autor: this.novo_autor,
        });
        this.novo_autor = "";
      }
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
        <input type="text" v-model="novo_autor" />
        <button @click="salvar">Save</button>
      </div>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
            <th>livro</th>
            <th>Editora</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.autor }}</td>
            <td>{{ autor.livro }}</td>
            <td>{{ autor.editora }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
