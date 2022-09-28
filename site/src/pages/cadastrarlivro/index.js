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
    const [idgenero, setIdgenero ] = useState();
    
    const [imagem , setImagem] = useState();
    async function salvar() {
      try {
        if(!imagem)
            throw new Error('Escolha uma capa para o livro');
      
            const produtoLivro = Number(preco.replace(',', '.'));
            const r = await inserirLivro(nome, autor, produtoLivro,descricao, paginas);
            await enviarimagemLivro (r.id, imagem);
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
        
           

          </div>
           
        <section className='segundo-quadrante'>
          <div className='quadrado'>
  
            <div className='div-imagem' onClick={escolherImagem}>
             
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
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className='input-box'>
              <label >Autor</label>
              <input type="text"  value={autor} onChange={e => setAutor(e.target.value)} />
            </div>
            
             <div className='input-box'>
                <label >Genero</label> 
                <select value={idgenero} onChange={e => setIdgenero(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {genero.map(item =>
                                <option value={item.id}> {item.nome} </option>
                            )}
                        </select> 

             </div>
             <div className='input-box'>
                 <label >Preço</label>
                 <input type="text"  value={preco} onChange={e => setPreco(e.target.value)} />
             </div>
             <div className='input-box'>
                <label>Páginas</label>
                <input type="text"  value={paginas} onChange={e => setPaginas(e.target.value)} />      
             </div>
             <div className='input-box'>
               <label>Descrição</label>
               <input type="text" className='descricao' value={descricao} onChange={e => setDescricao(e.target.value)} /> 
             </div>
           
             </div>

              <div className='salvar-botao'>
               <button onClick={salvar} >Salvar</button>
              </div>
  
      
          </div>
        </section>
      </main>
    );
  }