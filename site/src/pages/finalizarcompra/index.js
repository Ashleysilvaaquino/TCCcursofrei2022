import Carrinhocard from '../../components/cardcarrinho'
import BarraPesquisa from '../../components/pesquisa'


import './index.scss'


import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'
import Pix from '../../assets/images/pix.png'
import Cartao from '../../assets/images/cartaocredito.png'
import Boleto from '../../assets/images/imgboleto.png'

import { Link } from 'react-router-dom';


export default function FinalizarCompra(){
    return(
        <div>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>

                <div className='login'>
                     <Link to="/loginusuario" className='login'> <img src={login}/></Link>
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <p className='voltar-pg-finalizar'>Voltar</p>
            <div>
                <h3 className='h3-pag-finalizar'>Finalizar compra</h3>
            </div>
            <Carrinhocard></Carrinhocard>
            <div className='cards-2-pag-finalizar'>
                <p>Selecione a forma de pagamento</p>
                <div>
                    <div className='p-pg-finalizar'>
                        <img src={Boleto} className='img-card2'/> Boleto bancário 
                    </div>
                    <div className='p-pg-finalizar'>
                        <img src={Pix} className='img-card2'/> Pix copia e cola 
                    </div>
                    <div className='p-pg-finalizar'>
                        <img src={Cartao} className='img-card2'/> Cartão de Crédito 
                    </div>
                </div>
            </div>
            <p>Seus dados</p>
            <div>
                <div>
                    <h5>Nome</h5>
                    <input type='text'/>
                </div>
                <div>
                    <h5>E-mail</h5>
                    <input type='text'/>
                </div>                
                <div>
                    <h5>CEP</h5>
                    <input type='text'/>
                </div>             
                <div>
                    <h5>Nº</h5>
                    <input type='text'/>
                </div>
                <div>
                    <h5>Estado</h5>
                    <input type='text'/>
                </div>
            </div>
            <div>
                <h3>Total</h3>
                <p>R$</p>
            </div>
            <button>Avançar</button>
        </div>
    )
}