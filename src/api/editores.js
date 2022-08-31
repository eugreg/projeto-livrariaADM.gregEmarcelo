import axios from "axios";
export default class EditoresApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://backend-livrarias.herokuapp.com/editora");
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(`https://backend-livrarias.herokuapp.com/editora${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post("https://backend-livrarias.herokuapp.com/editora", editora);
    return response.data;
  }
  async excluirEditora(id) {
    const response = await axios.delete(`https://backend-livrarias.herokuapp.com/editora/${id}`);
    return response.data;
  }
  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://backend-livrarias.herokuapp.com/editora/${editora.id}`,
      editora
    );
    return response.data;
  }
}
