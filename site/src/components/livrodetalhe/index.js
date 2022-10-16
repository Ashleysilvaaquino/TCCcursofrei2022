import './index.scss'
import { useEffect, useState } from 'react';

import Esperto from '../../assets/images/esperto.png';
import Favorito from '../../assets/images/favorito.png';
import Close from '../../assets/images/Close.png'; 

import Storage from 'local-storage'

function LivroDetalhe(){
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
            <p>Mais esperto que o diabo</p>
            <p>Napoleon Hill</p>
        </div>
        <div className='genero-paginas'>
            <h3>GENÊRO</h3>
            <h3>PÁGINAS</h3>
        </div>
        <div className='cont-genero-pag'>
            <p>208</p>
            <p>Autoajuda</p>
        </div>
        <div className='div-desc'>
            <h3>DESCRIÇÃO</h3>
            <p>O livro Mais Esperto que o Diabo foi escrito como uma sessão de perguntas e respostas entre Napoleon Hill e o próprio Diabo, que afirma influenciar 98% da população. Ele afirma fazer isso através de 6 grandes medos que a maioria das pessoas tem, que são: Medo da pobreza. Medo da crítica.</p>
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