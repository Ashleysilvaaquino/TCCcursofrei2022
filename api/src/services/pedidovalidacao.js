import randomString from 'randomstring'


export function criarCodigoPedido(){
    return randomString.generate(11);

}

export function criarNovoPedido(idUsuario, tipoPagamento, info){
    
    let agora = new Date();
    return{
       idUsuario: idUsuario,
       data: agora,
       tipoPagamento: info.tipoPagamento, 
       status: 'Aguardando Pagamento',
       quantidade: info.quantidade

    }
}