import { con } from "./connection.js";

//login usuario
export async function listarEndereco(idContaUsuario) {
    const comando = `select 	id_usuario_endereco			id,
      ds_referencia     referencia,
      nr_cep						cep,
      nr_residencia				residencia,
      ds_estado					estado,
      ds_cidade					cidade,
      ds_logradouro				logradouro,
      ds_complemento				complemento,
      ds_bairro					bairro
from 	tb_usuario_endereco
where id_usuario = ?`
 
    const resp = await con.query(comando, [idContaUsuario]);
    const linhas = resp[0];
    return linhas[0];
 }


 export async function salvarEndereco(idContaUsuario, endereco ) {
   const comando = `insert into tb_usuario_endereco(ds_referencia, nr_cep, nr_residencia, ds_estado, ds_cidade, ds_logradouro, ds_complemento, ds_bairro)
                                             values(?,?,?,?,?,?,?)`

   const [info] = await con.query(comando, [idContaUsuario, endereco.cep, endereco.residencia, endereco.estado, endereco.cidade, endereco.logradouro, endereco.complemento, endereco.bairro ]);
   return info.insertId;
}
