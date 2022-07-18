<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [],
      nova_categoria: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_categoria !== "") {
        const novo_id = uuidv4();
        this.categorias.push({
          id: novo_id,
          categoria: this.nova_categoria,
        });
        this.nova_categoria = "";
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="titulo">
        <h2>Gerenciamento de categorias</h2>
      </div>
      <div class="form-input">
        <input
          type="text"
          v-model="nova_categoria"
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
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.categoria }}</td>
            <td>
              <button @click="excluir(categoria)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
