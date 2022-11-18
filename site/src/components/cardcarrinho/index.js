

import storage from 'local-storage'
import './index.scss'
import { useState } from 'react';


import { API_URL } from '../../api/config';

export default function Carrinhocard({ item , removerItem, carregarCarrinho }) {
    console.log(item);
    const [qtdProduto, setQtdProduto] = useState(item.qtd);

    function remover() {
        removerItem(item.produto.id);
    }

    function calcularSubtotal() {
        const subtotal = qtdProduto * item.produto.preco;
        return subtotal;
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd);

        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == item.produto.id);
        itemStorage.qtd = novaQtd;

        storage('carrinho', carrinho);
        carregarCarrinho();
    }

    return (
        <div>
            <div className='comp-card2' key={item.produto.id} >

                <div className='capa'>
                    <img src={API_URL + '/' + item.produto.imagem} />
                </div>


                <div className="coluna-tx">


                    <h3>{item.produto.nome}</h3>
                </div>
                <div className="preco2">

                    <label>Preço</label>
                    <p>{item.produto.preco}</p>

                </div>

                <div className="quantidade">

                    <label>Quantidade</label>
                    <input type='Number' className='qtd' onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}></input>


                </div>
                <div className="total">

                    <label>Total</label>
                    <p>{calcularSubtotal()}</p>

                </div>




                <div className='botao-comprarcarrinho'>

                    <button onClick={remover}>
                        Remover
                    </button>

                </div>


            </div>





        </div>
    )
}