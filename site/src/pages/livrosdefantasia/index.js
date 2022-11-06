import './index.scss'


import BarraPesquisa from '../../components/pesquisa';



export default function LivrosDeFantasia() {
    return (
        <section>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>
            </div>
            <h2 className='livros-de-terror-h2'>LIVROS DE <span>FANTASIA</span></h2>
        </section>
    )
}