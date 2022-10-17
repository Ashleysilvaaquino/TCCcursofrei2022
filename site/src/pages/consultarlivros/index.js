import { useNavigate } from 'react-router-dom';
import CardLivro from '../../components/cardGerenciarLivro';
import Menu from '../../components/menuadm';

import './index.scss'


function ConsultarLivro() {
   
    

    return (
        <div className='pg-consultar'>
            <Menu></Menu>
            <div className='coluna-dir'>
                <div className='f-card'><CardLivro/></div>
               
               
            </div>

        </div>
    )
}

export default ConsultarLivro;