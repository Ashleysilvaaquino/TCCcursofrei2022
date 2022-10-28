import './index.scss'
import lupa from '../../assets/images/lupa-pretinha.png';
import { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';

import { API_URL } from '../../api/config'


import Lapis from '../../assets/images/lapis.png'
import Lixo from '../../assets/images/lixo.png'

import { removerLivro, buscarLivrosPorNome, listarTodosLivros, listartodasimagens, buscarProdutoPorId, buscarProdutoImagem } from '../../api/admAPI';

import { confirmAlert } from 'react-confirm-alert'

import { toast } from 'react-toastify';


export default function CardLivro() {
    const [livros, setLivros] = useState([]);
    const [filtro, setFiltro] = useState('');  
    const id = useParams();
    
    async function informacoesLivro(){
        const resp = await buscarProdutoPorId();
        setLivros(resp); 
    }


    async function filtrar() {
        const resp = await buscarLivrosPorNome(filtro);
        setLivros(resp);
    }

    async function carregarTodosLivros() {
        const resp = await listarTodosLivros();
        setLivros(resp);
    }

    async function editar() {
        navigate(`/cadastrarlivro/livro/${id}`)
      }
     
  
    const navigate = useNavigate();
   
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


        
      

        useEffect(() => {
            carregarTodosLivros();
            buscarLivrosPorNome();

        }, [])

   
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
                <div className='comp-card' key={item.id}>


                     <div className='capa'>
                      <img src={API_URL + '/' + item.imagem}/>
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
                            removerLivroClick(item.id, item.nome)
                        }} />
                        <img src={Lapis} onClick={() => editar(item.id)} alt="" className='lapis'/>
                    </div>
                  

                </div>
            )}
        </main>
    );
}