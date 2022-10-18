import axios from 'axios'
import { API_URL } from './config';
const api = axios.create({
    baseURL: API_URL
})



export async function InserirCliente(nome, email, senha, celular){
    const resposta = await api.post('/cadastrarcliente', {
        nome,
        email,
        senha,
        celular
    } )

    return resposta.data

}

export async function listarEstado() {
    const r = await api.get('/estado');
    return r.data;
}

export async function usuarioendereco(cep, numero, estado){
    const r= await axios.post('/endereco', 
    {
        cep:cep, 
        numero:numero,
        estado:estado

    });

    return r.data;
} 

export async function LoginCliente(email, senha){
    const r= await axios.post('http://localhost:5000/cliente/login ', 
    {
        email:email, 
        senha: senha
    });

    return r.data;
} 
