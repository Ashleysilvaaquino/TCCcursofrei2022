import { con } from   './connection.js';


//cadastrarcliente
export async function cadastrarcliente(usuario){
    const comando =  `insert into tb_conta_usuario(nm_usuario, ds_email, ds_senha,ds_celular, id_usuario_endereco, id_estado)
    values(?,?,?,?,?,?);`
       
    
     const [resposta] = await con.query (comando, [usuario.nome, usuario.email, usuario.senha, usuario.celular, usuario.endereco, usuario.estado]);
     usuario.id = resposta.insertId;
    
        return usuario;
     }   
     
     //login usuario
export async function loginUsuario(email, senha) {
   const comando = `select 	tb_conta_usuario.id_conta_usuario,
   tb_conta_usuario.ds_email,
     tb_conta_usuario.ds_senha
     
      from tb_conta_usuario

     where ds_email = ?
and ds_senha = ?`

   const resp = await con.query(comando, [email, senha]);
   const linhas = resp[0];
   return linhas;
}


//mostrar estados
export async function listarEstados(nome) {
   const comando = `select id_estado      as id,
                           nm_estado       as nome
                    from tb_estado
                    `
   
   const [linha] = await con.query(comando);
   return linha;
   }



export async function usuarioendereco(usuario){
    const comando = `insert into tb_usuario_endereco(nr_cep, nr_residencia)
    values(?,?);`

    const [resposta] = await con.query(comando, [usuario.cep, usuario.numero]);
    usuario.id = resposta.insertId;
    return usuario;

}

