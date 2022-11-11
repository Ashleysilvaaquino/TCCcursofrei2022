import { API_URL } from "./config";

import axios from 'axios'
const api = axios.create({
    baseURL:API_URL
})

export async function salvar(idUsuario, referencia, cep, residencia, estado, cidade, logradouro, complemento, bairro ){
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco' , {idUsuario , referencia, cep,residencia, estado, cidade, logradouro, complemento, bairro});

    return r.data; 
}

export async function listar(idUsuario){
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    console.log(r);
    return r.data; 
}