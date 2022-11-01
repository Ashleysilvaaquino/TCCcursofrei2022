import './index.scss'
import { useState } from 'react';

import Esperto from '../../assets/images/esperto.png';
import Favorito from '../../assets/images/favorito.png';
import Close from '../../assets/images/Close.png'; 
import { useNavigate } from 'react-router-dom';



function LivroDetalhe(props){

    const navigate = useNavigate();

    function abrirDetalhes(id){
        navigate('/produto/' + id + '/detalhe')
    }
    
    return(
     <div className='pag-detalhe' onClick={() => abrirDetalhes(props.item.id)}>
        <img src={Favorito} className='img-favorito'/> 
        <imr src={Close} className='img-x'/>
        <div className='nome-autor'>
            <h3>NOME</h3>
            <h3>AUTOR</h3>
        </div>
        <div className='cont-nome-autor'>
            <p>{props.item.nome}</p>
            <p>{props.item.autor}</p>
        </div>
        <div className='genero-paginas'>
            <h3>GENÊRO</h3>
            <h3>PÁGINAS</h3>
        </div>
        <div className='cont-genero-pag'>
            <p>{props.item.genero}</p>
            <p>{props.item.paginas}</p>
        </div>
        <div className='div-desc'>
            <h3>DESCRIÇÃO</h3>
            <p>{props.item.descricao}</p>
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