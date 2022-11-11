import { loginUsuario } from "../repository/usuariorepository.js"; 

import { Router } from 'express'
import { listarEndereco, salvarEndereco } from "../repository/enderecoRepository.js";
const server = Router();
    

server.get('/api/usuario/:id/endereco' , async (req , resp) => {
    try {
        
        const id = req.params.id;

        const r = await listarEndereco(id);

        resp.send(r);

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
});

server.post('/api/usuario/:id/endereco' , async (req , resp) => {
    try {
        
        const id = req.params.id;
        const endereco = req.body;

        
        const r =  await salvarEndereco(id , endereco);
        resp.status(204).send();


    } catch (err) {
        console.log(err);
        resp.status(404).send({
            error: err.message
        })
    }
});

export default server;