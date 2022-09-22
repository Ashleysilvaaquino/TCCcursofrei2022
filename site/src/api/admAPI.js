import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function inserirLivro(nome, autor, preco, descricao, paginas) {
    const r = await api.post('/livro', { nome, autor, preco, descricao, paginas });
    return r.data;
}