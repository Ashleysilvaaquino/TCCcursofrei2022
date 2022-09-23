import './index.scss'
import { toast } from 'react-toastify';
import { enviarimagemLivro, listarGenero,inserirLivro } from '../../api/admAPI';
import { useEffect, useState } from 'react'
import Home from '../../assets/images/home.png'
import Cadastrar from '../../assets/images/cadastrar.png'
import Gerenciar from '../../assets/images/gerenciar.png'
import Pedidos from '../../assets/images/pedidos.png'
import Sair from '../../assets/images/sair.png'

export default function CadastrarLivro() {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [paginas, setPaginas] = useState('');
    const [genero, setGenero] = useState([]);
    
    const [imagem , setImagem] = useState();
    async function salvar() {
      try {
        if(!imagem)
            throw new Error('Escolha uma capa para o livro');
      
            const produtoLivro = Number(preco.replace(',', '.'));
            const r = await inserirLivro(nome, autor, preco,descricao, paginas);
            await enviarimagemLivro (r.insertedID,imagem);
            toast.dark('📚 Livro cadastrado com sucesso!');
        }
        catch (err) {
            if(err.response){
              toast.error(err.response.data.erro);
            }else{
              toast.error(err.message);
            }
            
        }
    }

    function escolherImagem(){
        document.getElementById('capaimagem').click();
    }
    function mostrarImagem(){
        return URL.createObjectURL(imagem); 
    }

    async function carregarGenero() {
        const r = await listarGenero();
        setGenero(r);
    }

    useEffect(() => {
        carregarGenero();
    }, [])
  

    return (
      <main className='mae'>
        <section className='rodape-esquerdo'>
          <div className='home'> 
            <p >Home</p>
            <img src={Home}  className='img-home'/>
          </div>
          <div className='cadastrar'>
            <p >Cadastrar</p>
            <img src={Cadastrar} className='img-cadastrar'/>
          </div>
          <div className='gerenciar'>
             <p>Gerenciar</p>
             <img src={Gerenciar} className='img-cadastrar'/>
          </div>
          <div className='pedidos'>
            <p >Pedidos</p>
            <img src={Pedidos} className='img-pedido' />
          </div>
          <div className='sair'>
            <p className='img-sair'>Sair</p>
            <img src={Sair} className='img-sair' />
          </div>
        </section>
            <p className='bem-vindo'>Seja bem-vindo, adm!</p>
        <section className='segundo_quadrante'>
          
  
          <div className='quadrado'>
  
            <div className='div_imagem' onClick={escolherImagem}>
             
             {!imagem && 
             <img />}
             {imagem &&
                 <img className='imagemcapa'src={mostrarImagem()} alt='' />
             }
             <input type = 'file' id="capaimagem" onChange={ e => setImagem(e.target.files[0])}/>
            </div>
  
            <div className='textos'>
  
            <label className='nome'>Nome</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)}  className='input-nome'/>
  
  
            <label className='autor'>Autor</label>
            <input type="text"  value={autor} onChange={e => setAutor(e.target.value)}  className='input-autor'/>
  
            <label className='genero'>Genero</label> 
            <select value={genero} onChange={e => setGenero(e.target.value)} className='input-genero'>
                            <option selected disabled hidden>Selecione</option>

                            {genero.map(item =>
                                <option value={item.id}> {item.nome} </option>
                            )}
                        </select> 

  
            <label className='preco'>Preço</label>
            <input type="text"  value={preco} onChange={e => setPreco(e.target.value)} className='input-preco'/>

            <label className='paginas'>Páginas</label>
            <input type="text"  value={paginas} onChange={e => setPaginas(e.target.value)} className='input-paginas'/>
 
            <label className='descricao'>Descrição</label>
            <input type="text"  value={descricao} onChange={e => setDescricao(e.target.value)} className='input-descricao'/> 
            <button className='salvar-botao' onClick={salvar} >Salvar</button>

  
  
            </div>
  
          </div>
        </section>
      </main>
    );
  }