import './index.scss'
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify'

import { API_URL } from '../../api/config'
 
import { useNavigate,  useParams } from 'react-router-dom';
import {buscarProdutoPorId} from '../../api/admAPI'
import BarraPesquisa from '../pesquisa';
import MenuUsuario from '../menucliente';



export default function LivroDetalhe(){
    

    const navigate = useNavigate();

    const [livro, setLivro] = useState({nome : [] , autor: [], preco: [],genero: [] , descricao: [], paginas: [] });
    
    const { idParam } = useParams();
    const { id } = useParams();
    
    useEffect(() =>{
        carregarLivro();
    });
    
    async function carregarLivro(){
        const resposta = await buscarProdutoPorId(id);
        setLivro(resposta);
    }
    
    function abrirDetalhes(id){
        navigate('/livro/' + id + '/detalhe');
    }

    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
    }
    function AdicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }
        if (!carrinho.find(livro => livro.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })
            Storage('carrinho', carrinho);
            
        }
        toast.dark('Produto adicionado ao carrinho!');
        
    }


    useEffect(() => {
        carregarLivro(); 
    }, [])

    
    return(
     <div className='pag-detalhe' onClick={() => abrirDetalhes(livro.id)}>
        
        <div className='nome-autor'>
            <h3>NOME</h3>
            <h3>AUTOR</h3>
        </div>
        <div className='cont-nome-autor'>
            <p>{livro.nome}</p>
            <p>{livro.autor}</p>
        </div>
        <div className='genero-paginas'>
            <h3>GÊNERO</h3>
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
            <button  onClick={AdicionarAoCarrinho} className='button-add' >ADICIONAR AO CARRINHO</button>
            <button className='button-comprar'>COMPRAR</button>
        </div>

        <div>
            <img src={exibirImagemProduto(livro.imagem)} className='img-livro-detalhe'/>
        </div>
     </div>
    )
}