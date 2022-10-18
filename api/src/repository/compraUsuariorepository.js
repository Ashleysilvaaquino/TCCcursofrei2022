import { con } from   './connection.js';


// inserir pedido 
export async function inserirPedido(pedidoNovo){
    const comando = `
         INSERT INTO tb_pedido(
             id_usuario, 
             dt_horario,
             tp_pagamento,
             ds_status,
             qtd_livro
         )
         values(?,?,?,?,?)
    `
    const [info] = await con.query(comando, [
       pedidoNovo.idUsuario,
       pedidoNovo.data,
       pedidoNovo.tipoPagamento,
       pedidoNovo.status,
       pedidoNovo.quantidade
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
        nm_proprietario,
        nr_codigo
    )
    values(?,?,?,?,?,?)
 `
 const [info] = await con.query(comando, [
  idPedido,
  pagamentoNovo.numero,
  pagamentoNovo.cvv,
  pagamentoNovo.vencimento,
  pagamentoNovo.nomeProprietario,
  pagamentoNovo.numeroCodigo
 ]);
 
 return info.affectedRows;
 
 }
 
 export async function inserirPagamentoBoleto(idPedido, pagamentoNovo){
    const comando = `
    INSERT INTO tb_pedido_pag_boleto(
        id_pedido,
        nr_codigo
    )
    values(?,?)
 `
 const [info] = await con.query(comando, [
  idPedido,
  pagamentoNovo.numeroCodigo,
 
 ]);
 
 return info.affectedRows;
    
 }
 
 
 export async function inserirPagamentoPix( idPedido, pagamentoNovo){
    const comando = `
    INSERT INTO tb_pedido_pag_pix(
        id_pedido,
        nr_codigo
    )
    values(?,?)
 `
 const [info] = await con.query(comando, [
  idPedido,
  pagamentoNovo.numeroCodigo,
 
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
        values(?,?,?,?)
        
    `
 
    const [info] = await con.query(comando, [idPedido, idLivro, qtd, preco]);
    return info.affectedRows;
 
 }