import './index.scss'
import lupa from '../../assets/images/lupa-pretinha.png';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



import Lapis from '../../assets/images/lapis.png'
import Lixo from '../../assets/images/lixo.png'

import { removerLivro, buscarLivrosPorNome, listarTodosLivros, listartodasimagens } from '../../api/admAPI';

import { confirmAlert } from 'react-confirm-alert'

import { toast } from 'react-toastify';


export default function CardLivro() {
    const [livros, setLivros] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [imagem , setImagem] = useState([]);
    
       


    async function filtrar() {
        const resp = await buscarLivrosPorNome(filtro);
        setLivros(resp);
    }

    async function carregarTodosLivros() {
        const resp = await listarTodosLivros();
        setLivros(resp);
    }
    
    async function carregartodasimagens(){
        const resp = await listartodasimagens();
        setLivros(resp);
    }

    const navigate = useNavigate();
   
    useEffect(() => {
        carregarTodosLivros();
        

    }, [])

   
   

    async function removerLivroClick(id, nome) {
        confirmAlert({
            title: 'Remover Livro',
            message: `Deseja remover o livro ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        console.log();
                         const resposta = await removerLivro(id, nome);
                         if(filtro === '')
                            carregarTodosLivros();
                         else
                            filtrar();
                         toast.dark('Livro removido ✨');
                    }
                }, 
                {
                    label: 'Não'
                }
            ]
        })


    }

    function abrirDetalhes(id){
        navigate(`detalhes/${id}`);
    }

   
    return (
        <main>
              <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
            </style>

            <div>
                <div className='comp-pesquisa'>
                    <input type="text" placeholder='Pesquise aqui...' className='input-pesquisa' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img src={lupa}  onClick={filtrar} />
                </div>
            </div>

            {livros.map(item =>
                <div className='comp-card' key={item.id} onClick={() => abrirDetalhes(item.id)}>


                     <div className='capa'>
                      <img src={item.imagem}/>
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


                    <div className="imgs">
                        <img src={Lixo} alt="" onClick={e =>{
                            e.stopPropagation();
                            removerLivroClick(item.id)
                        }} />
                        <img src={Lapis} alt="" className='lapis'/>
                    </div>
                  

                </div>
            )}
        </main>
    );
}