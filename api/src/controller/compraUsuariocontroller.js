import { Router } from "express";
const server = Router();
import randomString from 'randomstring'
import { buscarProdutoPorId } from "../repository/admrepository.js";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido, inserirPedidoItem } from "../repository/compraUsuariorepository.js";
import {  criarNovoPedido } from "../services/pedidovalidacao.js";



server.post('/api/pedido/:idUsuario/', async (req,resp) => {
     try{
        const {idUsuario} = req.params;
      
        
        const info = req.body;
        const pedidoNovo = criarNovoPedido(idUsuario, info);
        const idPedidoCriado = await inserirPedido(pedidoNovo);
        for(let item of info.produtos ){
            const prod = await buscarProdutoPorId(item.id);
            const idItemPedidoCriado =  await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.preco);
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