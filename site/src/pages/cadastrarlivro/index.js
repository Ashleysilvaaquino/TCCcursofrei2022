import './index.scss'
import { toast } from 'react-toastify';
import { enviarimagemLivro, listarGenero,inserirLivro } from '../../api/admAPI';
import { useEffect, useState } from 'react'
import Menu from '../../components/menuadm/index.js'
import Imgcadastro from '../../assets/images/imgcadastro.png'


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
          <Menu/>
          <div>
        
             <p className='bem-vindo'>Seja bem-vindo, adm!</p>

          </div>
           
        <section className='segundo-quadrante'>
          <div className='quadrado'>
  
            <div className='div_imagem' onClick={escolherImagem}>
             
             {!imagem && 
             <img src={Imgcadastro}/>}
             {imagem &&
                 <img className='imagemcapa'src={mostrarImagem()} alt='' />
             }
             <input type = 'file' id="capaimagem" onChange={ e => setImagem(e.target.files[0])}/>
            </div>
  
            <div className='textos'>
  
            <div className='input-box'>
               <label>Nome</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)}  className='input-nome'/>
            </div>
            <div className='input-box'>
              <label className='autor'>Autor</label>
              <input type="text"  value={autor} onChange={e => setAutor(e.target.value)}  className='input-autor'/>
            </div>
            
             <div className='input-box'>
                <label className='genero'>Genero</label> 
                <select value={genero} onChange={e => setGenero(e.target.value)} className='input-genero'>
                            <option selected disabled hidden>Selecione</option>

                            {genero.map(item =>
                                <option value={item.id}> {item.nome} </option>
                            )}
                        </select> 

             </div>
             <div className='input-box'>
                 <label className='preco'>Preço</label>
                 <input type="text"  value={preco} onChange={e => setPreco(e.target.value)} className='input-preco'/>
             </div>
             <div className='input-box'>
                <label className='paginas'>Páginas</label>
                <input type="text"  value={paginas} onChange={e => setPaginas(e.target.value)} className='input-paginas'/>      
             </div>
             <div className='input-box'>
               <label className='descricao'>Descrição</label>
               <input type="text"  value={descricao} onChange={e => setDescricao(e.target.value)} className='input-descricao'/> 
             </div>
           

              <div>
               <button className='salvar-botao' onClick={salvar} >Salvar</button>
              </div>
  
            </div>
  
          </div>
        </section>
      </main>
    );
  }