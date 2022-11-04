import './index.scss'
import { useState, useEffect } from 'react';

import Esperto from '../../assets/images/esperto.png';
import Favorito from '../../assets/images/favorito.png';
import Close from '../../assets/images/Close.png'; 
import { useNavigate,  useParams } from 'react-router-dom';
import {buscarProdutoPorId} from '../../api/admAPI'



function LivroDetalhe(){

    const navigate = useNavigate();

    const [livro, setLivro] = useState({nome : [] , autor: [], preco: [], descricao: [], paginas: [] });
    
    const { idParam } = useParams();
    
    useEffect(() =>{
        carregarLivro();
    });
    
    async function carregarLivro(){
        const resposta = await buscarProdutoPorId(idParam);
        setLivro(resposta);
    }
    
    function abrirDetalhes(id){
        navigate('/livro/' + id + '/detalhe');
    }
    
    
    return(
     <div className='pag-detalhe' onClick={() => abrirDetalhes(livro.id)}>
        <img src={Favorito} className='img-favorito'/> 
        <imr src={Close} className='img-x'/>
        <div className='nome-autor'>
            <h3>NOME</h3>
            <h3>AUTOR</h3>
        </div>
        <div className='cont-nome-autor'>
            <p>{livro.nome}</p>
            <p>{livro.autor}</p>
        </div>
        <div className='genero-paginas'>
            <h3>GENÊRO</h3>
            <h3>PÁGINAS</h3>
        </div>
        <div className='cont-genero-pag'>
            <p>{livro.genero}</p>
            <p>{livro.paginas}</p>
        </div>
        <div className='div-desc'>
            <h3>DESCRIÇÃO</h3>
            <p>{livro.descricao}</p>
        </div>
        
        <div className='buttons-pg-detalhe'>
            <button className='button-add'>ADICIONAR AO CARRINHO</button>
            <button className='button-comprar'>COMPRAR</button>
        </div>

        <div>
            <img src={Esperto} className='img-livro-detalhe'/>
        </div>
     </div>
    )
}

export default LivroDetalhe;