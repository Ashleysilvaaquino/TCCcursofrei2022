import { Router } from "express";
const server = Router();
import randomString from 'randomstring'
import { buscarProdutoPorId } from "../repository/admrepository.js";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido, inserirPedidoItem } from "../repository/compraUsuariorepository.js";
import { criarCodigoPedido, criarNovoPedido } from "../services/pedidovalidacao.js";



server.post('/api/pedido/:idUsuario/', async (req,resp) => {
     try{
        const {idUsuario} = req.params;
        

        const info = req.body;
        const codigo = criarCodigoPedido();
        const pedidoNovo = criarNovoPedido(idUsuario, info.tipoPagamento,info, codigo);
        const idPedidoCriado = await inserirPedido(pedidoNovo);
        for(let item of info.produtos ){
            const prod = await buscarProdutoPorId(item.id);
            const idItemPedidoCriado =  await inserirPedidoItem(idPedidoCriado, prod,  item.qtd, item.preco );
        }
    
        resp.status(204).send();
               
            
     }
     catch (err) {
        console.log(err);
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;