import { Router } from "express";
const server = Router();
import randomString from 'randomstring'
import { buscarProdutoPorId } from "../repository/admrepository";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido, inserirPedidoItem } from "../repository/compraUsuariorepository";
import { criarCodigoPedido, criarNovoPedido } from "../services/pedidovalidacao";



server.post('/api/pedido/:idUsuario/', async (req,resp) => {
     try{
        const {idUsuario} = req.params;
        const info = req.boby;
        const codigo = criarCodigoPedido();
        const novoPedido = criarNovoPedido(idUsuario, tipoPagamento, info);
        const idPedidoCriado = await inserirPedido(novoPedido);
        const idPagCartaoCriado = await inserirPagamentoCartao(idPedidoCriado, info.cartao);
        const idPagBoletoCriado = await inserirPagamentoBoleto(idPedidoCriado, info.boleto);
        const idPagPixCriado = await inserirPagamentoPix(idPedidoCriado, info.pix);

        for(let item of info.produtos ){
            const prod = await buscarProdutoPorId(item.id);
            const idProdutoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.id,  item.qtd, item.preco );
        }

        resp.status(204).send();
               
            
     }
     catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})