import { con } from   './connection.js';


//cadastrarcliente
export async function cadastrarcliente(usuario){
    const comando =  `insert into tb_conta_usuario(nm_usuario, ds_email, ds_senha,ds_celular)
    values(?,?,?,?);`
       
    
     const [resposta] = await con.query (comando, [usuario.nome, usuario.email, usuario.senha, usuario.celular]);
     usuario.id = resposta.insertId;
    
        return usuario.data;
     }   
     
     //login usuario
export async function loginUsuario(email, senha) {
   const comando = `select tb_conta_usuario.id_conta_usuario,
   tb_conta_usuario.ds_email,
    tb_conta_usuario.ds_senha,
   tb_login_usuario.id_login_usuario
                     from tb_conta_usuario 
                     inner join tb_login_usuario
                     on tb_conta_usuario.id_conta_usuario = tb_login_usuario.id_conta_usuario
                     where ds_email = '?'
                     and ds_senha = '?' `

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


