import Menu from '../../components/menuadm';
import './index.scss'

export default function Carrinho(){
    return(
        <div className='pg-carrinho'>
           <Menu></Menu>
           <div>
            <p className='carrinho'>Meu Carrinho</p>
           </div>
           
        </div>
    )
}