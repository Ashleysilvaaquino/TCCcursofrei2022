import { Router } from "express";
const server = Router();
import randomString from 'randomstring'
import { buscarProdutoPorId } from "../repository/admrepository.js";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido, inserirPedidoItem } from "../repository/compraUsuariorepository.js";
import { criarCodigoPedido, criarNovoPedido } from "../services/pedidovalidacao.js";



server.post('/api/pedido/:idUsuario', async (req,resp) => {
     try{
        const {idUsuario} = req.params;

        const info = req.boby;
        const codigo = criarCodigoPedido();
        const novoPedido = criarNovoPedido(idUsuario, tipoPagamento, info);
        const idPedidoCriado = await inserirPedido(novoPedido);
        for(let item of info.produtos ){
            const prod = await buscarProdutoPorId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id,  item.qtd, item.preco );
        }
        if(tipoPagamento === cartao){
            await inserirPagamentoCartao(idPedidoCriado, info.cartao);            
        }
        else if(tipoPagamento === boleto){
           await inserirPagamentoBoleto(idPedidoCriado, info.boleto);
            
        }    
        else if(tipoPagamento === pix){
           await inserirPagamentoPix(idPedidoCriado, info.pix);
        }

        resp.status(204).send();
               
            
     }
     catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;