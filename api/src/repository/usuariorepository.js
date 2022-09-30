import { con } from   './connection.js';


//cadastrarcliente
export async function cadastrarcliente(usuario){
    const comando =  `insert into tb_conta_usuario(nm_usuario, ds_email, ds_senha,ds_celular)
    values(?,?,?,?);`
       
    
     const [resposta] = await con.query (comando, [usuario.nome, usuario.email, usuario.senha, usuario.celular]);
     usuario.id = resposta.insertId;
    
        return usuario.data;
     }    



export async function mostrarEstados(nome) {
   const comando = 
   `select nm_estado from tb_estado
   where nm_estado like '%${nome}%'`

   const resposta = await con.query(comando, nome);
   const linhas = resposta[0]
   return linhas[0];
}