

import CardEndereco from '../../components/cardEndereco'
import Cardcarrinho from '../../components/cardcarrinho'
import { toast } from "react-toastify";

import './index.scss';



import { Link, useNavigate} from 'react-router-dom';
import { listar } from '../../api/enderecoAPI';
import { useState, useEffect } from 'react';
import storage from 'local-storage'
import { salvarNovoPedido } from '../../api/pedidoApi';
import { useLocation } from 'react-router-dom';

export default function FinalizarCompra() {

    const [enderecos, setEnderecos] = useState([]);
    const [idEndereco, setIdEndereco] = useState();
    const [numero , setNumero] = useState();
    const [cvv , setCvv] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [nomeproprietario, setNomeproprietario] = useState('');


    const state = useLocation().state;
    console.log(state);

    async function carregarEnderecos() {
        try {
            const id = storage('usuario-logado').ID_CONTA_USUARIO;

            const r = await listar(id);
            console.log(r);
            setEnderecos(r);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        carregarEnderecos();
    }, []);

    const navigate = useNavigate();

    async function salvarpedido(){

        try {
            let produtos = storage('carrinho');  
            let id = storage('usuario-logado').ID_CONTA_USUARIO;
 
            let pedido =
         {
             
                 idEndereco: idEndereco,
                 tipoPagamento: 'Cartao',
                  cartao:{
                    
                       numero: numero,
                       cvv: cvv,
                       vencimento: vencimento,
                      nomeProprietario: nomeproprietario
                  },
                   
                  produtos: produtos
              
            
            
         }
         const r = await salvarNovoPedido(id, pedido);
         
         
         toast.dark('Pedido foi realizado com sucesso 🚀');
         storage('carrinho', []);
         navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.erro);
        }
        
      
          
    }
    return (
        <main className='pg-finalizarcompra'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
            
            </div>
            <div className='voltar2'>

            <Link to='/homecliente'><p>Voltar</p></Link>
            </div>
            <div>
                <h3 className='h3-pag-finalizar'>Pedidos</h3>
            </div>
            <section className='parte-baixo-pg-finalizar'>
                <div className='livros-pg-finalizar'>
                        
                </div>
               
                    <div className='total-pg-finalizar'>
                        <h3>Finalizar Compra</h3>
                        
                       <button className='bt-pg-finalizar' onClick={salvarpedido}>Pagar</button>
                    </div>

                    <div className='enderecos'>
                        {enderecos.map(item =>
                            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco} />
                        )}
                        <Link to='/endereco'><button className='bt-pg-finalizar2'>Novo</button></Link>
                    </div>

                    <div className='pagarcomcartao'>
                        <div className='cartao'>
                            <label>Nome completo do títular:</label>
                            <input type="text" placeholder='Insira seu nome ' value={nomeproprietario} onChange={e => setNomeproprietario(e.target.value)}/>

                        </div>


                        <div className='cartao2'>

                            <label>Número do cartão:</label>

                            <input type="text" placeholder='Insira seu número do cartão ' value={numero} onChange={e => setNumero(Number(e.target.value))}/>
                        </div>

                        
                    </div>
                


                <div className='cartao2'>

                    <div>
                        <label>Código de segurança:</label>
                        <input type="text" placeholder='Insira o codigo ' value={cvv} onChange={e => setCvv(e.target.value)} />
                    </div>


                    <div className='cartao2'>
                        <label>Vencimento:</label>
                        <input type="text" placeholder='Insira o vencimento ' value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                    </div>

                </div>

                </section>
                {state.itens.map((item)=>{
                    return(
                        <Cardcarrinho
                            item={item}  
                        />
                    );
                })}

        </main>
    )
}