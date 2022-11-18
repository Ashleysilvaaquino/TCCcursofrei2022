import './index.scss'
import {Link} from 'react-router-dom';


import LivroUsuario from '../../components/livrousuario';
import BarraPesquisa from '../../components/pesquisa';



export default function LivrosDeProgramacao() {
    return (
        <section>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>
            </div>
            <div className='voltar2'>
                  <Link to="/">Voltar</Link>
                </div>
            <h2 className='livros-de-terror-h2'>LIVROS DE <span>PROGRAMACAO</span></h2>
            <div className='livrinhos'> 

<LivroUsuario></LivroUsuario>

</div>
        </section>
    )
}