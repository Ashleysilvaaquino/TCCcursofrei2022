import { API_URL } from "./config";

import axios from 'axios'
const api = axios.create({
    baseURL:API_URL
})

export async function salvar(idContaUsuario, referencia, residencia, estado, cidade, logradouro, complemento, bairro ){
    const r = await api.post('/api/endereco' + idContaUsuario + '/endereco' , {referencia, residencia, estado, cidade, logradouro, complemento, bairro});
    return r.data; 
}

export async function listar(idContaUsuario){
    const r = await api.get('/api/endereco' + idContaUsuario + '/endereco');
    return r.data; 
}