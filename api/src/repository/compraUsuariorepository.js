import { con } from   './connection.js';


// inserir pedido 
export async function inserirPedido(pedidoNovo){
    const comando = `
         INSERT INTO tb_pedido(
             id_conta_usuario, 
             id_usuario_endereco,
             dt_horario,
             tp_pagamento,
             vl_pagamento,
             ds_status,
             cod_nota_fiscal
         )
         values(?,?,?,?,?,?,?)
    `
    const [info] = await con.query(comando, [
       pedidoNovo.idUsuario,
       pedidoNovo.idEndereco,
       pedidoNovo.data,
       pedidoNovo.tipoPagamento,
       pedidoNovo.valorpagamento,
       pedidoNovo.status,
       pedidoNovo.notaFiscal
    ]);
 
    return info.insertId;
 }
 
 
 export async function inserirPagamentoCartao(idPedido, pagamentoNovo){
    const comando = `
    INSERT INTO tb_pedido_pag_cartao(
        id_pedido, 
        nr_cartao,
        nr_cvv,
        dt_vencimento,
        nm_proprietario
      
    )
    values(?,?,?,?,?);
 `
 const [info] = await con.query(comando, [
  idPedido,
  pagamentoNovo.numero,
  pagamentoNovo.cvv,
  pagamentoNovo.vencimento,
  pagamentoNovo.nomeProprietario
 
 ]);
 
 return info.affectedRows;
 
 }
 
 export async function inserirPagamentoBoleto(idPedido){
    const comando = `
    INSERT INTO tb_pedido_pag_boleto(
        id_pedido
    )
    values(?);
 `
 const [info] = await con.query(comando, [
  idPedido
 
 ]);
 
 return info.affectedRows;
    
 }
 
 
 export async function inserirPagamentoPix( idPedido){
    const comando = `
    INSERT INTO tb_pedido_pag_pix(
        id_pedido
       
    )
    values(?);
 `
 const [info] = await con.query(comando, [
  idPedido

 ]);
 
 return info.affectedRows;
    
 }
 
 
 export async function inserirPedidoItem(idPedido, idLivro, qtd, preco){
    const comando = `
        INSERT INTO tb_item_pedido(
            id_pedido,
            id_livro,
            qtd_itens,
            vl_produto
        )
        values(?,?,?,?);
        
    `
 
    const [info] = await con.query(comando, [idPedido, idLivro, qtd, preco]);
    return info.affectedRows;
 
 }