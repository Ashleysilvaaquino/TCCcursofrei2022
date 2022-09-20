
import './index.scss';
//import lupa from '../../assets/images/lupa.png'
//import login from '../../assets/images/login.png'
//import carrinho from '../../assets/images/carrinho.png'
//import setaesquerda from '../../assets/images/setaesquerda.png'


function LandPage() {
    return (
        <div className='landpage'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <input type="text" placeholder='pesquise aqui...' className='input-pesquisa' />

                <img className='lupa'   />
                <div className='login'>
                    <img  />
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img  />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <div>
                <p className='mais-vendidos'>Mais vendidos</p> <hr></hr>
            </div>
            <div className='pt-carrosel'>
                <div>
                    <p>Explore os Montes</p>
                </div>
                <div>
                    <img />
                  
                </div>
            </div>

        </div>
    );
}

export default LandPage;
