import randomString from 'randomstring'
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido } from '../repository/compraUsuariorepository.js';


export function criarNotaFiscal(){
    return randomString.generate(5);

}

export async function lervalorPagamento(idUsuario, pagamento, info){
    
  
    const pedidoNovo = criarNovoPedido(idUsuario, info.pagamento, info);
    const idPedidoCriado = await inserirPedido(pedidoNovo);
    if(pagamento == "cartao"){
        return inserirPagamentoCartao(idPedidoCriado, info.cartao);            
    }
    else if(pagamento == "boleto"){
       return inserirPagamentoBoleto(idPedidoCriado, info.boleto);
        
    }    
    else if(pagamento == "pix"){
       return inserirPagamentoPix(idPedidoCriado, info.pix);
    }

    else{
        return "Não foi Inserido nenhum tipo de pagamento";
    }

}

export function criarNovoPedido(idUsuario, info){
   
    let agora = new Date();
    let valorPagamento = lervalorPagamento(info.pagamento);
    const notaFiscal = criarNotaFiscal();
    return{
       idUsuario: idUsuario,
       idEndereco: info.idEndereco,
       data: agora, 
       tipoPagamento: info.pagamento,
       valorPagamento : valorPagamento,
       status: 'Aguardando Pagamento',
       notaFiscal: notaFiscal
    }
}