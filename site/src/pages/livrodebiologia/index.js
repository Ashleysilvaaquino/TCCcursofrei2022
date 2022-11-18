import './index.scss'
import LivroUsuario from '../../components/livrousuario';
import {Link} from 'react-router-dom';
import BarraPesquisa from '../../components/pesquisa';
import { buscarLivrosPorGenero } from '../../api/admAPI';
import { useEffect, useState } from 'react';

export default function LivrosDeBiologia() {
/*const[livros,setLivros] = useState([]);

    async function listarporgenero(){
        try {
            const r = await buscarLivrosPorGenero();
            setLivros(r)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        listarporgenero()
    },[])*/

    return (
        <section>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                </div>
            </div>
            <div className='voltar2'>
                  <Link to="/">Voltar</Link>
                </div>
            <h2 className='livros-de-terror-h2'>LIVROS DE <span>BIOLOGIA</span></h2>
            <div className='livrinhos'> 

            <LivroUsuario />

</div>

        </section>
    )
}