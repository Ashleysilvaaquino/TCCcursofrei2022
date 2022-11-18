import './index.scss';
import { useState } from "react";



import { toast } from "react-toastify";
import Storage from 'local-storage'
import Logo from '../../assets/images/logo.png'
import FotoCartao from '../../assets/images/cartao.png'
import { Link, useNavigate} from 'react-router-dom';
import { salvarNovoPedido } from '../../api/pedidoApi';

function PagarCartao() {

    const [numero , setNumero] = useState('');
    const [cvv , setCvv] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [nomeproprietario, setNomeproprietario] = useState('');
    const [idpedido, setidpedido] = useState('');
    const [idEndereco, setIdEndereco] = useState

    function SalvarClick(){
        try{
            toast('Pagamento Aprovado')
        }catch{
            console.log('Erro!')
        }
    }

    const navigate = useNavigate();

    async function salvarpedido(){

        try {
            let produtos = Storage('carrinho');  
            let id = Storage('usuario-logado').id;
 
            let pedido =
         {
             
                 idEndereco: idEndereco,
                 tipoPagamento: 'Cartao',
                  cartao:{
                       idPedido: idpedido,
                       numero: numero,
                       cvv: cvv,
                       vencimento: vencimento,
                      nomeProprietario: nomeproprietario
                  },
                   
                  produtos: produtos
              
            
            
         }
         const r = await salvarNovoPedido(id, pedido);
         toast.dark('Pedido foi inserido com sucesso');
         Storage('carrinho', []);
         navigate('/');
        } catch (err) {
            toast.error(err.response.data.erro);
        }
          
          
    }
    return (

        <main className="pag-cartao">
            <div className='titulo'>
                <h1>LIVRARIA MONTES</h1>
            </div>
            <div className='voltar'>
                <Link to="/loginusuario">Voltar</Link>
            </div>
            <div className='flex'>

                <div className='quadrado1'>
                    <div className='dados'>


                        <div>
                            <label>Nome completo do títular:</label>
                            <input type="text" placeholder='Insira seu nome ' value={nomeproprietario} onChange={e => setNomeproprietario(e.target.value)}/>

                        </div>


                        <div>

                            <label>Número do cartão:</label>

                            <input type="text" placeholder='Insira seu número do cartão ' value={numero} onChange={e => setNumero(e.target.value)}/>
                        </div>

                        
                    </div>
                </div>


                <div>

                    <div>
                        <label>Código de segurança:</label>
                        <input type="text" placeholder='Insira o codigo ' value={cvv} onChange={e => setCvv(e.target.value)} />
                    </div>


                    <div>
                        <label>Vencimento:</label>
                        <input type="text" placeholder='Insira o vencimento ' value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                    </div>

                    <p className='vamo'> O código do produto é:</p>
                    <p className='codigo'> 054854120521</p>
                </div>

                </div>
                <div className='botoes'>

                    

                    <div className='botao2'>
                        <button onClick={salvarpedido}>Pagar</button>
                    </div>
            </div>
        </main>

    )




}
export default PagarCartao;