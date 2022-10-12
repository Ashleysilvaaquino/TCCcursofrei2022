
import Menu from '../../components/menuadm';
import './index.scss';
import Home from '../../assets/images/homeadm.png';

export default function HomeAdm() {
    
    return (
        <div className='pg-adm'>
            <Menu></Menu>
            <div className='boas-vindas'>
                <h3>Seja Bem-vindo Adm!</h3>
            </div>
            <div className='icone'>
              <img src={Home} />
            </div>     
        </div>
    )
}

