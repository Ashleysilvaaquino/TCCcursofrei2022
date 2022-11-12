import randomString from 'randomstring'
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido } from '../repository/compraUsuariorepository.js';


export function criarCodigoPedido(){
    return randomString.generate(11);

}

export async function lervalorPagamento(idUsuario,tipoPagamento, info){
    
   
    const pedidoNovo = criarNovoPedido(idUsuario, info.tipoPagamento, info);
    const idPedidoCriado = await inserirPedido(pedidoNovo);
    if(tipoPagamento == "cartao"){
        return await inserirPagamentoCartao(idPedidoCriado, info.cartao);            
    }
    else if(tipoPagamento == "boleto"){
       return await inserirPagamentoBoleto(idPedidoCriado, info.boleto);
        
    }    
    else if(tipoPagamento == "pix"){
       return await inserirPagamentoPix(idPedidoCriado, info.pix);
    }

    else{
        return "Não foi Inserido nenhum tipo de pagamento";
    }

}

export function criarNovoPedido(idUsuario, tipoPagamento, info){
   
    let agora = new Date();
    let valorPagamento = lervalorPagamento(info.tipoPagamento);
    return{
       idUsuario: idUsuario,
       data: agora, 
       tipoPagamento: info.tipoPagamento,
       valorPagamento : valorPagamento,
       status: 'Aguardando Pagamento',
       quantidade: info.quantidade

    }
}