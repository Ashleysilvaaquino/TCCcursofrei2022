import { con } from "./connection";

//login usuario
export async function listarEndereco(ID_CONTA_USUARIO) {
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