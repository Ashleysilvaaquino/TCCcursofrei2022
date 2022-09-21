import { con } from   './connection.js';

//inserir um ivro
export async function inserirLivro(livro){
    const comando = 
           `insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas)
           values(?, ?, ?, ?, ?) `

    const [resposta] = await con.query(comando [livro.nome, livro.autor, livro.preco, livro.descricao, livro.paginas]);
    livro.id = resposta.insertId;
    return livro;



}

//inserir imagem
export async function inserirImagem(imagem , id){
    const comando = 
    `UPDATE tb_livro
    SET img_livro     = ?
     WHERE id_livro = ?`;

     const [resposta] = await con.query(comando, [imagem, id]);
     return resposta.affectedRows;

}

//adm logar
export async function loginAdm(email,senha){

    const comando = 
    
        `select  
                    ds_email            email,
                    ds_senha           senha
        from tb_adm_login
        where ds_email            = ?
        and ds_senha               =?`
    
    const[linhas] = await con.query(comando,[email, senha])
    
    return linhas[0]; 
    
    }