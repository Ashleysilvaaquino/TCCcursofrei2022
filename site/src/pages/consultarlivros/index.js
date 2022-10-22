import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import Menu from '../../components/menuadm';
import { useEffect } from 'react';
import CardLivro from '../../components/cardGerenciarLivro';


import './index.scss'


function ConsultarLivro() {
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
                <div className='f-card'><CardLivro/></div>
               
               
            </div>

        </div>
    )
}

export default ConsultarLivro;