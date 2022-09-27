import { inserirImagem, inserirLivro, listarGenero, loginAdm, removerLivro } from "../repository/admrepository.js";
import { Router } from "express";
import multer from 'multer'
const server = Router();
const upload = multer({ dest: 'storage/capalivros'})

//inserir um livro
server.post('/livro', async (req, resp) => {
    try {
        const livronovo = req.body;
       
        if (!livronovo.nome)
            throw new Error('Nome do livro é obrigatório!');

        if (!livronovo.autor)
            throw new Error('O autor do livro é obrigatório!');

        if (livronovo.preco === undefined || livronovo < 0)
            throw new Error('Preço do livro é obrigatório!');

        if (!livronovo.descricao)
            throw new Error('A Descrição do livro é obrigatória!');

        if (!livronovo.paginas)
            throw new Error('As Páginas do livro são obrigatórias!');

        console.log(livronovo);
        const livroinserido = await inserirLivro(livronovo);
        resp.send(livroinserido);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
           
        })
    }
}
)

//inserir imagem 
server.put('/livro/:id/imagem', upload.single('capa'), async (req,resp) => {
    try {
        if(!req.file)
          throw new Error('Insira uma capa');

        const {id} = req.params;
        const imagem = req.file.path;
        const resposta = await inserirImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A capa não pode ser salva.');
        resp.status(204).send();

        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

//adm entrar
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

//selecionar genero
server.get('/genero' , async (req , resp) => {
    try{
        const linhas = await listarGenero();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;

//apagar livro
server.delete('/livro/:id', async (req, resp) =>{
    try{
        const { id } = req.params;

        const resposta = await removerLivro(id);
        if(resposta != 1)
            throw new Error('Livro não pode ser removido :(');
        resp.status(204).send();
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//editar livro
server.put('/livro/:id', async (req, resp) {
    try{
        const { id } = req.params;
        //parei no vídeo 13, em 5min e 44 seg
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})