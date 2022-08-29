<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditoresApi from "@/api/editores.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editoresApi = new EditoresApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categoria: {},
      categorias: [],
      editora: {},
      editoras: [],
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivro();
    this.autores = await autoresApi.buscarTodosOsAutores();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editoresApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivro();
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.editoras = await editoresApi.buscarTodasAsEditoras();
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivro();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
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
            <select name="cat" id="categorias" v-model="livro.categoria">
              <option disabled value="">escolha uma categoria</option>
              <option
                v-for="categoria of categorias"
                :key="categoria.id"
                :value="categoria.descricao"
              >
                {{ categoria.descricao }}
              </option>
            </select>
            <select v-model="livro.autor">
              <option disabled value="">escolha uma categoria</option>
              <option
                v-for="autor of autores"
                :key="autor.id"
                :value="autor.nome"
              >
                {{ autor.nome }}
              </option>
            </select>
          </div>
          <div class="select_autor">
            <select v-model="livro.editora">
              <option disabled value="">escolha uma categoria</option>
              <option
                v-for="editora of editoras"
                :key="editora.id"
                :value="editora.nome"
              >
                {{ editora.nome }}
              </option>
            </select>
          </div>

          <input
            id="input_quant"
            type="number"
            v-model="livro.quantidade"
            placeholder="Quantidade"
          />
          <input
            id="input_pre"
            type="number"
            v-model="livro.preco"
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
              <th>Titulo</th>
              <th>Categoria</th>
              <th>editora</th>
              <th>Autor</th>
              <th>Quantidade</th>
              <th>Preco</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro">

              <td>{{ livro.id }}</td>
              <td>{{ livro.titulo }}</td>
              <td>{{ livro.Categoria }}</td>
              <td>{{ livro.editora }}</td>
              <td>{{ livro.Autor }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
              <td>
                <button @click="excluir(livro)">excluir</button>
                 <button @click="editar(livro)">editar</button>
              </td>
            </tr>
          </tbody>	
        </table>
      </div>
    </div>
  </main>
</template>
