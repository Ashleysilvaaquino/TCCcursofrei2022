import './index.scss'
import Home from '../../assets/images/home.png'
import Cadastrar from '../../assets/images/cadastrar.png'
import Gerenciar from '../../assets/images/gerenciar.png'
import Pedidos from '../../assets/images/pedidos.png'
import Sair from '../../assets/images/sair.png'
import {Link, useNavigate} from 'react-router-dom'
import storage from 'local-storage'


export default function Menu(){
   
   const navigate = useNavigate();
   
   function sairClick(){
      storage.remove('adm-logado');
      navigate('/loginadm');

   }
   

   return(
      <nav className="menu-total">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>
      <style>
       @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
       </style>
      <div>
         <div className='items'>
             <div>
              <img src={Home}  />
              <div><Link to='/admhome'>Home</Link></div>
            </div>

            <div>
               <img src={Cadastrar} />
               <div><Link to='/cadastrarlivro'>Cadastrar</Link></div>
            </div>
            <div>
               <img src={Gerenciar} />
               <div><Link to='/consultarlivro'>Gerenciar</Link></div>
            </div>
            <div>
               <img src={Pedidos}/>
               <div><Link to='/statuspedido'>Pedidos</Link></div>
            </div>
  
  
        </div>
       </div>
  
     <div className='items'  >
      <div onClick={sairClick} className='items2' >
          <img src={Sair} />
          <div >Sair</div>
      </div>
      </div>
    </nav>
   );
   
}
