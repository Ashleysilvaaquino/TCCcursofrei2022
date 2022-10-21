import { con } from './connection.js';


//cadastrarcliente
export async function cadastrarcliente(usuario) {
   const comando = `insert into tb_conta_usuario(nm_usuario, ds_email, ds_senha,ds_celular)
    values(?,?,?,?);`


   const [resposta] = await con.query(comando, [usuario.nome, usuario.email, usuario.senha, usuario.celular]);
   usuario.id = resposta.insertId;

   return usuario;
}

//login usuario
export async function loginUsuario(email, senha) {
   const comando = `SELECT	TB_CONTA_USUARIO.ID_CONTA_USUARIO,
   TB_CONTA_USUARIO.DS_EMAIL,
 TB_CONTA_USUARIO.DS_SENHA
 FROM TB_CONTA_USUARIO
WHERE DS_EMAIL = ?
and DS_SENHA = ?`

   const resp = await con.query(comando, [email, senha]);
   const linhas = resp[0];
   return linhas[0];
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



export async function usuarioendereco(usuario) {
   const comando = `insert into tb_usuario_endereco(nr_cep, nr_residencia, id_estado)
    values(?,?,?);`

   const [resposta] = await con.query(comando, [usuario.cep, usuario.numero, usuario.estado]);
   usuario.id = resposta.insertId;
   return usuario;

}


