import './index.scss';


import { useParams } from 'react-router-dom';
import Storage from 'local-storage'
import { useEffect, useState } from 'react';
import {buscarProdutoPorId} from '../../api/admAPI'
import LivroDetalhe from '../../components/livrodetalhe';

import { toast } from 'react-toastify'

  
export default function Detalhes(){
    const [livro, setLivro] = useState({ nome : [] , autor: [], preco: [], descricao: [], paginas: [] });

    function AdicionarAoCarrinho(){
        let carrinho = [];
        if(Storage('carrinho')){
            carrinho = Storage('carrinho');
        }

        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })
            Storage('carrinho, carrinho');

            toast.dark('produto adicionado ao carrinho')
        }

        
    }
        
    

   
    return(
        <div>
            <LivroDetalhe livro={livro}/>
        </div>
    )
}

