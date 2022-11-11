import './index.scss';


import { useParams } from 'react-router-dom';
import Storage from 'local-storage'
import { useEffect, useState } from 'react';
import {buscarProdutoPorId} from '../../api/admAPI'
import LivroDetalhe from '../../components/livrodetalhe';


  
export default function Detalhes(){
    const [livro, setLivro] = useState({ nome : [] , autor: [], preco: [], genero: [], descricao: [], paginas: [] });
     
    
   
        
    


    return(
        <div>
            <LivroDetalhe livro={livro}/>
        </div>
    )
}

