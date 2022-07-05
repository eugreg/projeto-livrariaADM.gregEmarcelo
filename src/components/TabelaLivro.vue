<script>
  import { v4 as uuidv4 } from "uuid";
  export default {
    data() {
      return {
        categorias: [
          {
            descricao: "Economia",
          },
          {
            descricao: "Estilo de Vida",
          },
          {
            descricao: "Biografias, Histórias Reais e True crime",
          },
          {
            descricao: "Acadêmicos",
          },
          {
            descricao: "Ficção",
          },
          {
            descricao: "HQs",
          },
          {
            descricao: "Romance",
          },
          {
            descricao: "Policial, Suspense e Mistério",
          },
        ],
        livros: [],
        novo_livro: "",
        novo_pre: "",
        novo_quant: "",
        novo_autor_ID: "",
        nova_categoria: "",
        novo_editora_ID: "",
      };
    },
    methods: {
      salvar() {
        if (
          (this.novo_livro !== "",
          this.novo_pre !== "",
          this.novo_quant !== "",
          this.novo_autor_ID !== "",
          this.nova_categoria !== "",
          this.novo_editora_ID !== "")
        ) {
          const novo_id = uuidv4();
          const novo_ISBN = uuidv4();
          this.livros.push({
            id: novo_id,
            nome: this.novo_livro,
            quantidade: this.novo_quant,
            preco: this.novo_pre,
            ISBN: novo_ISBN,
            Categoria: this.nova_categoria,
            Editora_ID: this.novo_editora_ID,
            Autor_ID: this.novo_autor_ID,
          });
          this.novo_livro = "";
          this.novo_quant = "";
          this.novo_pre = "";
          this.novo_autor_ID = "";
          this.nova_categoria = "";
          this.novo_editora_ID = "";
        }
      },
      excluir(livro) {
        const indice = this.livros.indexOf(livro);
        this.livros.splice(indice, 1);
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
            v-model="novo_livro"
            placeholder="Título"
          />
          <div class="select_categorias">
            <select name="cat" id="categorias" v-model="nova_categoria">
              <option disabled value="">Escolha uma categoria</option>
              <option
                v-for="descricao of categorias"
                :key="descricao.descricao"
              >
                {{ descricao.descricao }}
              </option>
            </select>
          </div>
          <input
            id="input_tit"
            type="text"
            v-model="novo_editora_ID"
            placeholder="ID Editora"
          />
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
              <th>Editora_ID</th>
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
              <td>{{ livro.Editora_ID }}</td>
              <td>{{ livro.Autor_ID }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
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
