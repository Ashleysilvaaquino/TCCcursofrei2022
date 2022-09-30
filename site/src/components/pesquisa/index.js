import lupa from '../../assets/images/lupa-pretinha.png';
import filtrar from '../../components/cardGerenciarLivro';
import './index.scss';

export default function BarraPesquisa() {
  

    return (
        <div className='comp-pesquisa'>
            <input type="text" placeholder='Pesquise aqui...' className='input-pesquisa' />
            <img src={lupa} className='lupa' onClick={filtrar}/>
        </div>
    )
}