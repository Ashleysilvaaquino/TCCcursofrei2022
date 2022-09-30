import CardLivro from '../../components/cardGerenciarLivro';
import Menu from '../../components/menuadm';
import BarraPesquisa from '../../components/pesquisa';
import './index.scss'


    


function ConsultarLivro() {

    
    return (
        <div className='pg-consultar'>
            <Menu></Menu>
            <div className='coluna-dir'>
                <div className='f-pesquisa'><BarraPesquisa></BarraPesquisa></div>
                <div className='f-card'><CardLivro></CardLivro></div>

            </div>

        </div>
    )
}

export default ConsultarLivro;