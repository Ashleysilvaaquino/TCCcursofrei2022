import './index.scss'
import LCorporal from '../../assets/images/lcomporal.png'
import Coracaozinho from '../../assets/images/Heart.png'

import { Link } from 'react-router-dom'

export default function LivroUsuario(){
    return(
        <div className='livro-usuario-component'>
            <Link to='/detalhes'><img src={Coracaozinho} className='coracao-pg-livro'/></Link>
            <img src={LCorporal} className='livro-img-component-usuario'/>
            <p className='nome-livro-usuario'> LINGUAGEM CORPORAL</p>
            <p className='preco-livro-usuario'>R$ 29,90</p>
            <Link to='/finalizarcompra'><button className='bt-comprar-livro-component'>COMPRAR</button></Link>
        </div>
    )
}