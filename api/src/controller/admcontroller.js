import { inserirLivro, loginAdm } from "../repository/admrepository.js";
import { Router } from "express";

const server = Router();


server.post('/livro', async (req, resp) => {
    try {
        const livronovo = req.body;
        const livroinserido = await inserirLivro(livronovo);
        resp.send(livroinserido);

    } catch (err) {
        resp.send(400).send({
            erro:err.message
        })
    }
}
)

server.post('/loginadm', async (req, resp) => {

    try {
    
    const {email, senha }= req.body;
    
    const resposta =  await loginAdm( email, senha);
    
    if(!resposta) {
    
    throw new Error('Credenciais inválidas')
    
    }
    
    resp.send(resposta)
    
    }catch(err){
    
    resp.status(401).send({
    
    erro: err.message
    
    });
    
    }
    
})


export default server;