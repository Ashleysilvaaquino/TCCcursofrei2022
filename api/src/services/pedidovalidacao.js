import randomString from 'randomstring'
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPagamentoPix, inserirPedido } from '../repository/compraUsuariorepository.js';


export function criarNotaFiscal(){
    return randomString.generate(8);

}

export async function lervalorPagamento(idUsuario, tipoPagamento, info){
    

    const pedidoNovo = await criarNovoPedido(idUsuario, info);
    const idPedidoCriado = await inserirPedido(pedidoNovo);
    if(tipoPagamento === "cartao"){
        const cartao = await inserirPagamentoCartao(idPedidoCriado, info.cartao);            
        return cartao;
    }
    else if(tipoPagamento === "boleto"){
       const boleto = await inserirPagamentoBoleto(idPedidoCriado, info.boleto);
       return boleto;
        
    }    
    else if(tipoPagamento === "pix"){
       const pix = await inserirPagamentoPix(idPedidoCriado, info.pix);
       return pix;

    }

    else{
        return "Não foi Inserido nenhum tipo de pagamento";
    }

}

export function criarNovoPedido(idUsuario, info){
   
    let agora = new Date();
    let valorPagamento = lervalorPagamento(info.tipoPagamento);
    const notaFiscal = criarNotaFiscal();
    return{
       idUsuario: idUsuario,
       idEndereco: info.idEndereco,
       data: agora, 
       tipoPagamento: info.tipoPagamento,
       valorPagamento : valorPagamento,
       status: 'Aguardando Pagamento',
       notaFiscal: notaFiscal
    }
}