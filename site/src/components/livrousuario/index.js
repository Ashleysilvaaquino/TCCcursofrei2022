import './index.scss'
import LCorporal from '../../assets/images/lcomporal.png'
import Coracaozinho from '../../assets/images/Heart.png'
import {useState, useEffect } from 'react';

import { API_URL } from '../../api/config'

import { Link } from 'react-router-dom'
import { listarTodosLivros } from '../../api/admAPI';

export default function LivroUsuario(){
    const [livros, setLivros] = useState([]);

    async function carregarTodosLivros() {
        const resp = await listarTodosLivros();
        setLivros(resp);
    }
    useEffect(() => {
        carregarTodosLivros();
    
    }, []);
    return(
        <div className='livro-usuario-component'>
            {livros.map(item =>
            <div className='livro-usuario-component' key={item.id}>
            <Link to='/detalhes'><img src={Coracaozinho} className='coracao-pg-livro'/></Link>
            <img src={API_URL + '/' + item.imagem} className='livro-img-component-usuario'/>
            <p className='nome-livro-usuario'>{item.nome}</p>
            <p className='preco-livro-usuario'>{item.preco}</p>
            <Link to='/finalizarcompra'><button className='bt-comprar-livro-component'>COMPRAR</button></Link>
            </div>
            )}
        </div>
    )
}