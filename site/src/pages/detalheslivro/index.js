import './index.scss';

import { Link } from 'react-router-dom';

import lupa from '../../assets/images/lupa.png'
import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'

function Detalhes(){
    return(
        <div>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div className='pesquisa'>
                <input type="text" placeholder='Pesquise aqui...' className='input-pesquisa' />

                </div>
             
                <img src={lupa} className='lupa1'/>
                <div className='login'>
                    <img src={login} />
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <br></br>
            <Link to='/'> Voltar </Link>
        </div>
    )
}

export default Detalhes;