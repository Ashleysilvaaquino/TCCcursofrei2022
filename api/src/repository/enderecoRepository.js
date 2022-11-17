import { con } from "./connection.js";

//login usuario
export async function listarEndereco(idUsuario) {
  const comando = ` select
      id_conta_usuario  idUsuario,
      ds_referencia		referencia,
      nr_cep				  cep,
      nr_residencia   residencia,
      ds_estado		   	estado,
      ds_cidade			  cidade,
      ds_logradouro		logradouro,
      ds_complemento	complemento,
      ds_bairro			bairro
      
  from tb_usuario_endereco
  where id_conta_usuario = ?;`

  const [registro] = await con.query(comando, [idUsuario]);
  return registro;
}


export async function salvarEndereco(idUsuario, endereco) {
  const comando = `insert into tb_usuario_endereco(id_conta_usuario, ds_referencia, nr_cep, nr_residencia, ds_estado, ds_cidade, ds_logradouro, ds_complemento, ds_bairro)
                                             values(?,?,?,?,?,?,?,?,?)`

  const [info] = await con.query(comando, [idUsuario, endereco.referencia, endereco.cep, endereco.residencia, endereco.estado, endereco.cidade, endereco.logradouro, endereco.complemento, endereco.bairro]);
  return info.insertId;
}
