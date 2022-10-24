
import './index.scss';

import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'
import BarraPesquisa from '../../components/pesquisa';
import SetEsq from '../../assets/images/setaesq.png'
import SetDir from '../../assets/images/setdir.png'
import Terror from '../../assets/images/generoterror.png'
import InfantilGenero from '../../assets/images/infantil.png'
import Programacao from '../../assets/images/programacao.png'
import Psico from '../../assets/images/psico.png'
import Romance from '../../assets/images/romance.png'



function LandPage() {
    return (
        <div className='landpage'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>
                
                <div className='login'>
                    <img src={login} />
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <div>
                <p className='mais-vendidos'>Mais vendidos</p> <hr></hr>
            </div>
            <div className='pt-carrosel'>
                <div>
                    <p className='explore-os-montes'>EXPLORE OS <span>MONTES</span></p>
                    <div className='carrosel-pt1'>
                        <img src={SetEsq} className='img-set-esq'/>
                        <div className='div-terror'>
                            <img src={Terror} className='img-terror'/>
                            <p>TERROR</p>
                        </div>
                        <div className='div-infantil'>
                            <img src={InfantilGenero} className='img-infantil'/>
                            <p>INFANTIL</p>
                        </div>
                        <div className='div-programacao'>
                            <img src={Programacao} className='img-programacao'/>
                            <p>PROGRAMAÇÃO</p>
                        </div>
                        <div className='div-psico'>
                            <img src={Psico} className='img-psico'/>
                            <p>PSICOLOGIA</p>
                        </div>
                        <div className='div-romance'>
                            <img src={Romance} className='img-romance'/>
                            <p>ROMANCE</p>
                        </div>
                        <img src={SetDir} className='img-set-dir'/>
                    </div>
                </div>
                <div>
                    <img />
                  
                </div>
            </div>

        </div>
    );
}

export default LandPage;
