import Carrinhocard from '../../components/cardcarrinho'
import BarraPesquisa from '../../components/pesquisa'
import CardEndereco from '../../components/cardEndereco'


import './index.scss';

import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'
import Pix from '../../assets/images/pix.png'
import Cartao from '../../assets/images/cartaocredito.png'
import Boleto from '../../assets/images/imgboleto.png'

import { Link } from 'react-router-dom';
import { listar } from '../../api/enderecoAPI';
import { useState, useEffect } from 'react';
import Storage from 'local-storage'


export default function FinalizarCompra() {

    const [enderecos, setEnderecos] = useState([]);
    const [idEndereco, setIdEndereco] = useState();

    async function carregarEnderecos() {
        try {
            const id = Storage('usuario-logado').ID_CONTA_USUARIO;
            console.log(id);
            const r = await listar(id);
            setEnderecos(r);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        carregarEnderecos();
    }, []);

    console.log(enderecos);
    return (
        <main className='pg-finalizarcompra'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>

                <div className='login'>
                    <Link to="/loginusuario" className='login'> <img src={login} /></Link>
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <Link to='/menusuario'><p className='voltar-pg-finalizar'>Voltar</p></Link>
            <div>
                <h3 className='h3-pag-finalizar'>Finalizar compra</h3>
            </div>
            <section className='parte-baixo-pg-finalizar'>
                <div className='livros-pg-finalizar'>



                </div>
                <section className='pg-finalizar-f-direita'>
                    <section className='cards-2-pag-finalizar'>
                        <p>Selecione a forma de pagamento</p>
                        <div>
                            <div className='p-pg-finalizar' >
                                
                                <Link to= '/pagamentopix'><img src={Boleto} className='img-card2' /></Link> 
                                <p> Boleto bancário </p>
                            </div>
                            <div className='p-pg-finalizar'>
                            <Link to='/pagamentopix'><img src={Pix} className='img-card2' /></Link><p> Pix copia e cola </p> 
                            </div>
                            <div className='p-pg-finalizar'>
                            
                            <Link to= '/pagarcartao'><img src={Cartao} className='img-card2' /></Link> <p> Cartão de crédito </p>
                            </div>
                        </div>
                    </section>

                    <div className='enderecos'>
                        {enderecos.map(item =>
                            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco} />
                        )}
                    </div>

                    <div className='total-pg-finalizar'>
                        <h3>Total</h3>
                        <p>R$80,00</p>
                        <button className='bt-pg-finalizar'>Avançar</button>
                    </div>
                </section>
            </section>

        </main>
    )
}