import { useNavigate } from 'react-router-dom';
import CardLivro from '../../components/cardGerenciarLivro';
import Menu from '../../components/menuadm';

import './index.scss'

const navigate = useNavigate();
    
async function editar(id){
    navigate(`/livro/${id}`)
  }

function ConsultarLivro() {
    //BOTÃO DE EDITAR - ERRADO?
//  <div className='alterar-botao'>
//<button onClick={editar(livro.id)} >Alterar</button>
//</div>
    
    return (
        <div className='pg-consultar'>
            <Menu></Menu>
            <div className='coluna-dir'>
                <div className='f-card'><CardLivro></CardLivro></div>
               
               
            </div>

        </div>
    )
}

export default ConsultarLivro;