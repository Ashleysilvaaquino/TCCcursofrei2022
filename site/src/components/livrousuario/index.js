import './index.scss'
import LCorporal from '../../assets/images/lcomporal.png'
import Coracaozinho from '../../assets/images/Heart.png'
import {useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

import { API_URL } from '../../api/config'

import { Link } from 'react-router-dom'
import { listarTodosLivros } from '../../api/admAPI';

export default function LivroUsuario(){
    const [livros, setLivros] = useState([]);

    async function carregarTodosLivros() {
        let resp = await listarTodosLivros();
        setLivros(resp);
    }
    useEffect(() => {
        carregarTodosLivros();
    
    }, []);
    async function detalheslivro(id) {
        navigate(`/livro/${id}/detalhe`)
      }
      
      const navigate = useNavigate();
    return(
        <div className='livro-div'>
            {livros.map(item =>
            <div key={item.id}>
            <Link to='/detalhes'></Link>
            <img src={API_URL + '/' + item.imagem} className='livro-img-component-usuario'/>
            <p className='nome-livro-usuario'>{item.nome}</p>
            <p className='preco-livro-usuario'>{item.preco}</p>
            <p onClick={() => detalheslivro(item.id)}><button >COMPRAR</button></p>
            </div>
            )}
        </div>
    )
}