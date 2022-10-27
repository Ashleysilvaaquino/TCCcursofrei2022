import './index.scss'
import LCorporal from '../../assets/images/lcomporal.png'
import Coracaozinho from '../../assets/images/Heart.png'

export default function LivroUsuario(){
    return(
        <div className='livro-usuario-component'>
            <img src={Coracaozinho} className='coracao-pg-livro'/>
            <img src={LCorporal} className='livro-img-component-usuario'/>
            <p className='nome-livro-usuario'>Desvendando os segredos da LINGUAGEM CORPORAL</p>
            <p className='preco-livro-usuario'>R$ 29,90</p>
            <button className='bt-comprar-livro-component'>COMPRAR</button>
        </div>
    )
}