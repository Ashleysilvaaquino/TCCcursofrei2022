import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})



export async function InserirCliente(nome, email, senha,celular, endereco, estado){
    const resposta = await api.post('/usuario', {
        nome,
        email,
        senha,
        celular,
       endereco, 
        estado
    } )

    return resposta.data

}

export async function listarEstado() {
    const r = await api.get('/estado');
    return r.data;
}

export async function usuarioendereco(cep, numero){
    const r= await axios.post('/endereco', 
    {
        cep:cep, 
        numero:numero
    });

    return r.data;
} 

