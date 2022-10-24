import { con } from "./connection";

//login usuario
export async function listarEndereco(ID_CONTA_USUARIO) {
    const comando = `select 	id_usuario_endereco			id,
      nr_cep						cep,
      nr_residencia				residencia,
      ds_estado					estado,
      ds_cidade					cidade,
      ds_logradouro				logradouro,
      ds_complemento				complemento,
      ds_bairro					bairro
from 	tb_usuario_endereco
where id_usuario = ?`
 
    const resp = await con.query(comando, [ID_CONTA_USUARIO]);
    const linhas = resp[0];
    return linhas[0];
 }


 export async function salvarEndereco(ID_CONTA_USUARIO, endereco ) {
   const comando = `insert into tb_usuario_endereco(id_usuario, nr_cep, nr_residencia, ds_estado, ds_cidade, ds_logradouro, ds_complemento, ds_bairro)
                                             values(?,?,?,?,?,?,?,?)`

   const [info] = await con.query(comando, [ID_CONTA_USUARIO, endereco.cep, endereco.residencia, endereco.estado, endereco.cidade, endereco.logradouro, endereco.complemento, endereco.bairro ]);
   return info.insertId;
}
