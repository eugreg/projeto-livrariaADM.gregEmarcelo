<script>
import axios from "axios";
export default {
  data() {
    return {
      livros: [],
      livro: {},
      categorias: [],
      editores: [],
      editora:{},
    };
  },
  async created() {
    await this.buscarTodosOsLivros();
    await this.buscarTodosAsCategorias();
    await this.buscarTodosOsEditores();
  },
  methods: {
    async buscarTodosAsCategorias() {
      const categorias = await axios.get("http://localhost:4000/categorias");
      this.categorias = categorias.data;
    },
    async buscarTodosOsEditores() {
      const editores = await axios.get("http://localhost:4000/editora");
      this.editores = editores.data;
    },
    async buscarTodosOsLivros() {
      const resposta = await axios.get(
        "http://localhost:4000/livros?expand=categorias"
      );
      this.livros = resposta.data;
    },
    async salvar() {
      await axios.post("http://localhost:4000/livros", this.livro);
      await this.buscarTodosOsLivros();
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="geren_tudo">
        <div class="title">
          <h1>Gerenciamento de livros</h1>
        </div>
        <div class="form-input">
          <input
            id="input_tit"
            type="text"
            v-model="livro.titulo"
            placeholder="Título"
          />
          <div class="select_categorias">
            <select name="cat" id="categorias" v-model="categoria.categoria">
              <option
                v-for="categoria in categorias"
                :key="categoria.id"
                :value="categoria.id"
              >
                {{ Categoria.Categoria }} {{ Categoria.id }}
              </option>
            </select>
            <select v-model="editora.editora">
               <option v-for="editora in editora" :key="editora.id" :value="editora.id"> {{editora.editora}} ({{editora.site}})</option>
            </select>
          </div>
            
          <input
            id="input_tit"
            type="text"
            v-model="novo_autor_ID"
            placeholder="ID Autor"
          />
          <input
            id="input_quant"
            type="number"
            v-model="novo_quant"
            placeholder="Quantidade"
          />
          <input
            id="input_pre"
            type="number"
            v-model="novo_pre"
            placeholder="Preço"
          />
          <button @click="salvar">Salvar</button>
        </div>
      </div>

      <div class="tabela">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>ISBN</th>
              <th>Categoria</th>
              <th>editora</th>
              <th>Autor_ID</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro">
              <td>{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td>{{ livro.ISBN }}</td>
              <td>{{ livro.Categoria }}</td>
              <td>{{ livro.editora }}</td>
              <td>{{ livro.Autor_ID }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
              <td>{{ livro.categoria.categoria }} ({{ livro.categoria.id }})
              </td>
              <td>
                <button @click="excluir(livro)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
