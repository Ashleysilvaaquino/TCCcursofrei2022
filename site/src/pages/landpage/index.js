
import './index.scss';

import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'
import BarraPesquisa from '../../components/pesquisa';



function LandPage() {
    return (
        <div className='landpage'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>
                
                <div className='login'>
                    <img src={login} />
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <div>
                <p className='mais-vendidos'>Mais vendidos</p> <hr></hr>
            </div>
            <div className='pt-carrosel'>
                <div>
                    <p>Explore os Montes</p>
                </div>
                <div>
                    <img />
                  
                </div>
            </div>

        </div>
    );
}

export default LandPage;
