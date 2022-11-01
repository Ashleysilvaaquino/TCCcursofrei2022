import './index.scss'
import { toast } from 'react-toastify';
import { enviarimagemLivro, listarGenero, inserirLivro, buscarProdutoPorId, alterarLivro } from '../../api/admAPI';
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/menuadm/index.js'
import Imgcadastro from '../../assets/images/imgcadastro.png'
import { API_URL } from '../../api/config';


export default function CadastrarLivro() {
  const [nome, setNome] = useState('');
  const [id, setId] = useState(0);
  const [autor, setAutor] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [paginas, setPaginas] = useState('');
  const [genero, setGenero] = useState([]);
  const [idgenero, setIdgenero] = useState();

  const [imagem, setImagem] = useState();


  
 
 
  const { idParam } = useParams();

   


  async function carregarLivro(){
    const resposta = await buscarProdutoPorId(idParam);
    console.log(resposta);

    setNome(resposta.nome);
    setAutor(resposta.autor);
    setPreco(resposta.preco);
    setDescricao(resposta.descricao);
    setPaginas(resposta.paginas);
    setIdgenero(resposta.genero);
   setImagem(resposta.imagem);
    setId(resposta.id);
  }

  async function salvar() {
    try {
      if (!imagem)
        throw new Error('Escolha uma capa para o livro');
      if(id == 0){
        const produtoLivro = Number(preco.replace(',', '.'));
        const r = await inserirLivro(nome, autor, produtoLivro, descricao, paginas, idgenero);
        await enviarimagemLivro(r.id, imagem);
        toast.dark('📚 Livro cadastrado com sucesso!');

      }

      else{
        await alterarLivro(nome, autor, preco, descricao, paginas, idgenero);
        if (typeof(imagem) == 'object')  
           await enviarimagemLivro(id, imagem);
        toast.dark('📚 Livro alterado com sucesso!');
        
      }
    }
    catch (err) {
  
      if (err.response) {
        toast.error(err.response.data.erro);
      } else {
        toast.error(err.message);
      }

    }
  }
  async function carregarGenero() {
    const r = await listarGenero();
    setGenero(r);

  }

 
  function escolherImagem() {
    document.getElementById('capaimagem').click();
  }

  function mostrarImagem() {
    if (imagem == undefined) {
      return '/image.svg'
    }
    else if (typeof (imagem) == 'string') {
      return `${API_URL}/${imagem}`
    }
    else {
      return URL.createObjectURL(imagem);
    }

  }



  useEffect(() => {
    carregarGenero();
    
    if(idParam){
      carregarLivro();
    }
    
    if (!storage('adm-logado')) {
      navigate('/loginadm');
    }
 
  }, [])

  const navigate = useNavigate();

  
   
   function novoClick(){
    setId(0);
    setNome('');
    setAutor('');
    setPreco('');
    setDescricao('');
    setPaginas('');
    setIdgenero('');
    setImagem();
   
  }

   
 



  return (
    <main className='mae'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>
      <Menu />
      <div>



      </div>

      <section className='segundo-quadrante'>
        <div className='quadrado'>

          <div className='div-imagem' onClick={escolherImagem}>

            {!imagem &&
              <img src={Imgcadastro} />}
            {imagem &&
              <img className='imagemcapa' src={mostrarImagem()} alt='' />
            }
            <input type='file' id="capaimagem" onChange={e => setImagem(e.target.files[0])} />
          </div>


          <div className='textos'>

            <div className='input-box'>
              <label>Nome</label>
              <input type="text" placeholder='Nome do Livro...' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className='input-box'>
              <label >Autor</label>
              <input type="text" placeholder='Autor do Livro...' value={autor} onChange={e => setAutor(e.target.value)} />
            </div>

            <div className='input-box'>
              <label >Genero</label>
              <select value={idgenero} onChange={e => setIdgenero(e.target.value)} >


                <option select >Selecione</option>
                {genero.map(item =>
                  <option value={item.id}> {item.nome} </option>

                
                )}
              </select>

            </div>
            <div className='input-box'>
              <label >Preço</label>
              <input type="text" placeholder='Preço do Livro...' value={preco} onChange={e => setPreco(e.target.value)} />
            </div>
            <div className='input-box'>
              <label>Páginas</label>
              <input type="text" placeholder='Páginas do Livro...' value={paginas} onChange={e => setPaginas(e.target.value)} />
            </div>
            <div className='input-box'>
              <label>Descrição</label>
              <input type="text" placeholder='Descrição do Livro...' className='descricao' value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>

          </div>




        </div>

        <div className='botoes'>
          <div className='salvar-botao'>
            <button onClick={salvar}>Alterar</button>
          </div>



          <div className='salvar-botao2'>
           
            <button onClick={novoClick} >Novo</button>
          </div>
        </div>

      </section>
    </main>
  );
}
