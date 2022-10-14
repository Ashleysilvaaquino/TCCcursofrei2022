import storage from 'local-storage'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menuadm';
import './index.scss';
import Teste from '../../assets/images/teste3.gif';

export default function HomeAdm() {

    const navigate = useNavigate();
    
    
   
    useEffect(() => {
         if(!storage('adm-logado')){
            navigate('/loginadm');
         }
    }, [])
    
    return (
        <div className='pg-adm'>
             <style>
             @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
             </style>
            <Menu></Menu>
            <div className='boas-vindas'>
                <h3>Seja Bem-vindo Adm💙</h3>
                <img src={Teste} />
            </div>     
        </div>
    )
}

