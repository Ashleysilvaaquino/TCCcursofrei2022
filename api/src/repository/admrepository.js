import { con } from   './connection.js';


export async function inserirLivro(livro){
    const comando = 
           `insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
           values(?, ?, ?, ?, ?, ? ) `

    const [resposta] = await con.query(comando [livro.nome, livro.autor, livro.preco, livro.descricao, livro.paginas, livro.genero]);
    livro.id = resposta.insertId;
    return livro;



}

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