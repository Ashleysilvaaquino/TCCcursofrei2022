
import axios from 'axios'
import { API_URL } from './config';


const api = axios.create({
    baseURL: API_URL
})



export async function Login(email, senha){
    const r= await axios.post('/loginadm', 
    {
        email:email, 
        senha: senha
    });

    return r.data;
} 

export async function inserirLivro(nome, autor, preco, descricao, paginas, genero) {
    const r = await api.post('/livro', { 
        nome,
        autor,
        preco,
        descricao,
        paginas,
        genero
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

export async function listarGenero() {
    const r = await api.get('/genero');
    return r.data;
}

export async function listarTodosLivros(){
    const resposta = await api.get ('/listarlivros');
    return resposta.data;
}

export async function buscarLivrosPorNome(nome){
    const resposta = await api.get(`/livro/busca?nome=${nome}`);
    return resposta.data;
}

export async function removerLivro(id){
    const resposta = api.delete(`/livro/${id}`);
    return resposta.data; 
}
