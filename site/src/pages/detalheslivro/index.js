import './index.scss';


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {buscarProdutoPorId} from '../../api/admAPI'
import LivroDetalhe from '../../components/livrodetalhe';

  
export default function Detalhes(){
    const [livro, setLivro] = useState({});

    const { idParam } = useParams();

    useEffect(() =>{
        carregarLivro();
    });

    async function carregarLivro(){
        const resposta = await buscarProdutoPorId(idParam);
        setLivro(resposta);
    }
    return(
        <div>
            <LivroDetalhe livro={livro}/>
        </div>
    )
}

