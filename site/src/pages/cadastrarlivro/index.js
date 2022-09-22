import './index.scss'
import { toast } from 'react-toastify';
import { enviarimagemLivro } from '../../api/admAPI';
import { useEffect, useState } from 'react'
//import Home from '../../assets/images/home.png'
//import Cadastrar from '../../assets/images/cadastrar.png'
//import Gerenciar from '../../assets/images/gerenciar.png'
//import Pedidos from '../../assets/images/pedidos.png'
//import Sair from '../../assets/images/sair.png'

export default function CadastrarLivro() {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [paginas, setPaginas] = useState('');
    
    const [imagem , setImagem] = useState();
    async function salvar() {
        try {
            if(!imagem)
               throw new Error('Escolha uma capa para o livro');

            const produtoLivro = Number(preco.replace(',', '.'));
            const r = await produtoLivro(nome, autor, preco,descricao, paginas);
            await enviarimagemLivro(produtoLivro.id, imagem)
            toast.dark('📚 Livro cadastrado com sucesso!');
        }
        catch (err) {
            if(err.response)
            toast.error(err.response.data.erro);
            else
            toast.error(err.message);
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
        <section className='quadrado_azul'>
          <p>Home
            <p>Cadastrar</p>
            <p>Gerenciar</p>
            <p>Pedidos</p>
          </p>
        </section>
  
        <section className='segundo_quadrante'>
          <p>Seja bem-vindo</p>
  
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
  
            <label>Nome</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
  
            <label>Autor</label>
            <input type="text"  value={autor} onChange={e => setAutor(e.target.value)} />
  
            <label>Genero</label> 
            <select value={genero} onChange={e => setGenero(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {categorias.map(item =>
                                <option value={item.id}> {item.nome} </option>
                            )}
                        </select> 

            <label>Preço</label>
            <input type="text"  value={preco} onChange={e => setPreco(e.target.value)}/>
  
            <label>Páginas</label>
            <input type="text"  value={paginas} onChange={e => setPaginas(e.target.value)}/>
  
            <label>Descrição</label>
            <input type="text"  value={descricao} onChange={e => setDescricao(e.target.value)}/>
  
            <button className='salvar_botao' onClick={salvar}>Salvar</button>
  
  
  
            </div>
  
          </div>
        </section>
      </main>
    );
  }