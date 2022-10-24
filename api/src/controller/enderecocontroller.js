import { loginUsuario } from "../repository/usuariorepository"; 

import { Router } from 'express'
const server = Router();
    

server.get('/api/usuario/:id/endereco' , async (req , resp) => {
    try {
        


    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
});

server.post('/api/usuario/:id/endereco' , async (req , resp) => {
    try {
        


    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
});