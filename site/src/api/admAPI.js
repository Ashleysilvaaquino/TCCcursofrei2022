import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function inserirLivro(nome, autor, preco, descricao, paginas) {
    const r = await api.post('/livro', { 
        nome:nome,
        autor:autor, 
        preco:preco, 
        descricao:descricao, 
        paginas:paginas
     });
    return r.data;
}


export async function enviarimagemLivro(id,imagem){
      const formData = new FormData();
      formData.append('capa', imagem);

      const resposta = await api.put(`/livro/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },

      });

      return resposta.status;
}