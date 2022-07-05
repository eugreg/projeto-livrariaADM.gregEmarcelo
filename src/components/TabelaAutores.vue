<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [],
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
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
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
        <input type="text" v-model="novo_autor" placeholder="insire autor " />
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
