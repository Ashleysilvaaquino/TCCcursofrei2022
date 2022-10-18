import './index.scss'
import { useEffect, useState } from 'react';

import Esperto from '../../assets/images/esperto.png';
import Favorito from '../../assets/images/favorito.png';
import Close from '../../assets/images/Close.png'; 



import Storage from 'local-storage'

function LivroDetalhe(props){
    const [livros, setLivros] = useState([]);

    function adicionarAoCarrinho(){
        let carrinho = [];
        if(Storage('carrinho')){
            carrinho = Storage('carrinho');
        }
        if(!carrinho.find(livros.id === livros.id)){
            carrinho.push({
                id: livros.id,
                qtd:1
            })
         Storage('carrinho, carrinho');    
        } 
    }
    

    return(
     <div className='pag-detalhe'>
        <img src={Favorito} className='img-favorito'/> 
        <imr src={Close} className='img-x'/>
        <div className='nome-autor'>
            <h3>NOME</h3>
            <h3>AUTOR</h3>
        </div>
        <div className='cont-nome-autor'>
            <p>{props.livros.nome}</p>
            <p>{props.livros.autor}</p>
        </div>
        <div className='genero-paginas'>
            <h3>GENÊRO</h3>
            <h3>PÁGINAS</h3>
        </div>
        <div className='cont-genero-pag'>
            <p>{props.livros.paginas}</p>
            <p>{props.livros.genero}</p>
        </div>
        <div className='div-desc'>
            <h3>DESCRIÇÃO</h3>
            <p>{props.livros.descricao}</p>
        </div>
        
        <div className='buttons-pg-detalhe'>
            <button onClick={adicionarAoCarrinho} className='button-add'>ADICIONAR AO CARRINHO</button>
            <button className='button-comprar'>COMPRAR</button>
        </div>

        <div>
            <img src={Esperto} className='img-livro-detalhe'/>
        </div>
     </div>
    )
}

export default LivroDetalhe;