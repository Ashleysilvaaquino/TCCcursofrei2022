import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import Menu from '../../components/menucliente';
import { useEffect , useState } from 'react';
import './index.scss'
import { buscarProdutoPorId } from '../../api/admAPI';
import Carrinhocard from '../../components/cardcarrinho';

export default function Carrinho() {
     const navigate = useNavigate();
    
     const [itens, setItens] = useState([]);
   
     function irPedido() {
        navigate('/finalizarcompra', {state: {itens: itens}})
    }


    function qtdItens() {
        return itens.length;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            console.log(item);
            total = total + item.produto.preco * item.qtd;
        }
        return total;
    }


    function removerItem(id) {
        let carrinho = storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        storage('carrinho', carrinho);
        carregarCarrinho();
    }


    async function carregarCarrinho() {
        let carrinho = storage('carrinho');
        if (carrinho) {

            let temp = [];
            
            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            setItens(temp);
        }
    }
   

   console.log(itens);
    useEffect(() => {
         if(!storage('adm-logado')){
             navigate('/loginadm');
        }else{
            carregarCarrinho();
        }
    }, [])
    return (
        <div className='pg-consultar'>
          <Menu/>
            <div className='coluna-dir'>
                <div className='f-card2'>
                {itens.map(item => 
                        <Carrinhocard
                            item={item}
                            removerItem={removerItem}
                            carregarCarrinho={carregarCarrinho} />
                    )}
                </div>

            </div>
            <div className='resumo'>
                    <h1> Subtotal </h1>
                    <h3> ({qtdItens()} itens) </h3>
                    <p> R$ {calcularValorTotal()} </p>
                    <button onClick={irPedido}> Fechar Pedido </button>
                </div>

        

        </div>
    )
}

