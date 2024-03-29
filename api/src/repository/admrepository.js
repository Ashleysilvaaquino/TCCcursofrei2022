
import { con } from   './connection.js';

//inserir um ivro
export async function inserirLivro(livro){
    const comando = 
           `insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
                values(?, ?, ?, ?, ?, ?) `

    const [resposta] = await con.query(comando, [livro.nome, livro.autor, livro.preco, livro.descricao, livro.paginas, livro.genero]);
    
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
    
    //listar imagem 
    export async function listarImagens(){
        const comando = 
        `SELECT img_livro   imagem
        from tb_livro`

        const [linhas] = await con.query(comando);
        return linhas;
        
    }
    
    //listar livros
    export async function listarTodosLivros() {
       const comando =
           `SELECT id_livro		         id,
                   nm_livro		         nome,
                   nm_autor	             autor,
                   vl_preco              preco,
                   ds_livro              descricao,
                   nr_paginas            paginas,
                   img_livro             imagem,
                   tb_livro.id_genero    genero,
                   nm_genero             nomeGenero
              FROM tb_livro
              JOIN tb_genero on tb_livro.id_genero = tb_genero.id_genero`;
       
       const [linhas] = await con.query(comando);
       
       return linhas;
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
    
    const resp = await con.query(comando,[email, senha])
    const linhas = resp[0]; 
    return linhas[0];
    
    }

    //selecionar gênero
export async function listarGenero(nome) {
    const comando = `select id_genero       as id,
                            nm_genero       as nome
                     from tb_genero
                     `
    
    const [linha] = await con.query(comando);
    return linha;
    }




    //apagar livro
export async function removerLivro(id){
    const comando = `DELETE FROM tb_livro
                           WHERE id_livro=? `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}



//editar livro
export async function alterarLivro(id, livro){
    const comando = 
        `UPDATE tb_livro
            SET nm_livro       =?,
                nm_autor       =?,
                vl_preco       =?,
                ds_livro       =?,
                nr_paginas     =?,
                id_genero      =?
          WHERE id_livro       =?` 

    const [resposta] = await con.query(comando, [livro.nome, livro.autor, livro.preco, livro.descricao, livro.paginas, livro.genero, id]);
    return resposta.affectedRows;
 }


    



// buscar por nome
export async function buscarporNome(nome){
    const comando = 
    `select id_livro		id,
        nm_livro		nome,
        nm_autor	    autor,
        vl_preco       preco,
        ds_livro       descricao,
        nr_paginas     paginas,
        id_genero      genero
     from tb_livro
     where nm_livro like ?`;


     const [linhas] = await con.query(comando, [`${nome}%`]);
     return linhas;
}
///buscar por genero 
export async function buscarporGenero(genero){
    const comando = 
    `select id_livro		id,
        nm_livro		nome,
        nm_autor	    autor,
        vl_preco       preco,
        ds_livro       descricao,
        nr_paginas     paginas,
        id_genero      genero
     from tb_livro
     where id_genero = ?`;


     const [linhas] = await con.query(comando, [`${genero}%`]);
     return linhas;
}
//ENDPOINTS PARA CONEXÃO ALTERAR

//buscar produto por id
export async function buscarProdutoPorId(id) {
    const comando =
        `SELECT id_livro		as id,
                nm_livro		as nome,
                nm_autor	    as autor,
                vl_preco       as preco,
                ds_livro       as descricao,
                nr_paginas     as paginas,
                img_livro      as imagem,
                id_genero     as genero
           FROM tb_livro
           WHERE id_livro = ?`;

    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarProdutoGenero(id) {
    const comando = 
    `select id_genero       as id,
     nm_genero       as nome
    from tb_genero
    where id_genero = ?`
    
    const [linha] = await con.query(comando, [id]);
    return linha;
    }

    export async function buscarProdutoImagem(id){
        const comando = 
        `select img_livro       as imagem

        from tb_livro   
        where id_livro = ?`
        const [linha] = await con.query(comando, [id]);
        return linha;
    }

         