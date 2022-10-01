import './index.scss'
import lupa from '../../assets/images/lupa-pretinha.png';
import {useEffect, useState} from 'react';


import Lapis from '../../assets/images/lapis.png'
import Lixo from '../../assets/images/lixo.png'
import Capa from '../../assets/images/capa.png'
import { removerLivro, buscarLivrosPorNome, listarTodosLivros } from '../../api/admAPI';


export default function CardLivro() {
    const [livros, setLivros] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar(){
        const resp = await buscarLivrosPorNome(filtro);
        setLivros(resp);
    } 

    async function carregarTodosLivros(){
        const resp = await listarTodosLivros();
        setLivros(resp);
    }

    useEffect(() =>{
        carregarTodosLivros();
    }, [])


    async function removerLivroClick(id, nome){
        const resposta = await removerLivro(id, nome);
    }

    return (
        <main className="comp-card">

        

            {livros.map(item =>
            <>
            <div className="capa">
                <img src={item.imagem} alt="" />
            </div>

            

            <div className="coluna-txt">

                <label>Nome</label>
                <p>{item.nome}</p>

                <label>Autor</label>
                <p>{item.autor}</p>

                <label>Gênero</label>
                <p className="genero">{item.genero}</p>

            </div>

            <div className="preco">

                <label>Preço</label>
                <p>{item.preco}</p>

            </div>

            <div className="descricao">

                <label>Descrição</label>
                <p>{item.descricao}</p>

            </div>
            </>
            )}

            

            <div className="imgs">

                <img src={Lixo} alt="" onClick={(item) => removerLivroClick(item.id, item.nome)}/>
                <img src={Lapis} alt="" />

            </div>

        </main>
    );
}