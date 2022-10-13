
import Menu from '../../components/menuadm';
import './index.scss';
import Home from '../../assets/images/homeadm.png';
import Teste from '../../assets/images/teste3.gif';

export default function HomeAdm() {
    
    return (
        <div className='pg-adm'>
             <style>
             @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
             </style>
            <Menu></Menu>
            <div className='boas-vindas'>
                <h3>Seja Bem-vindo Adm!💙</h3>
                <img src={Teste} />
            </div>     
        </div>
    )
}

