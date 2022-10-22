import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import Menu from '../../components/menucliente';
import { useEffect } from 'react';
import Cardcarrinho from '../../components/cardcarrinho'
import './index.scss'


export default function Carrinho() {
     const navigate = useNavigate();
    
    
   
    useEffect(() => {
         if(!storage('adm-logado')){
            navigate('/loginadm');
         }
    }, [])
   
    

    return (
        <div className='pg-consultar'>
            <Menu></Menu>
            <div className='coluna-dir'>
                <div className='f-card'><Cardcarrinho/></div>
               
               
            </div>

        </div>
    )
}

