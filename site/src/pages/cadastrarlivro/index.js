import './index.scss'
import { toast } from 'react-toastify';
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

    async function salvar() {
        try {
            const produtoLivro = Number(preco.replace(',', '.'));

            const r = await produtoLivro(nome, autor, preco,descricao, paginas);
            toast.dark('Produto cadastrado com sucesso');
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }
  

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
  
            <div className='div_imagem'>
              imagem aqui kkkk
            </div>
  
            <div className='textos'>
  
            <label>Nome</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
  
            <label>Autor</label>
            <input type="text"  value={autor} onChange={e => setAutor(e.target.value)} />
  
            <label>Genero</label>
            <input type="text"/>  

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