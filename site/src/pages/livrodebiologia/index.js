import './index.scss'
import LivroUsuario from '../../components/livrousuario';
import {Link} from 'react-router-dom';
import BarraPesquisa from '../../components/pesquisa';
import { buscarLivrosPorGenero, buscarProdutoPorId } from '../../api/admAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function LivrosDeBiologia() {
      const[livros,setLivros] = useState([]);
      const [idgenero, setIdgenero ] = useState(); 
      const { id } = useParams();

    async function listarporgenero(){
        try {
            const r = await buscarLivrosPorGenero(idgenero);
            if(idgenero == 1){
                carregarLivro();
            }
            setLivros(r);
          
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        carregarLivro();
        listarporgenero();
    },[]);

    
    async function carregarLivro(){
        const resposta = await buscarProdutoPorId(id);
        setLivros(resposta);
    }
    

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

            {livros.map(item =>
                            <LivroUsuario item={item} carregarLivro={setIdgenero} listarporgenero={item.id === idgenero} />
            )}

</div>

        </section>
    )
}