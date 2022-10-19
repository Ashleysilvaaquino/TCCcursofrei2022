import './index.scss'
import Perfil from '../../assets/images/meuperfil.png'
import Site from '../../assets/images/visitarsite.png'
import Carrinho from '../../assets/images/mecarrinho.png'
import Favoritos from '../../assets/images/favoritos.png'
import Pedidos from '../../assets/images/meuspedidos.png'
import Sair from '../../assets/images/sair.png'
import {Link, useNavigate} from 'react-router-dom'
import storage from 'local-storage'


export default function MenuUsuario(){
   
   const navigate = useNavigate();
   
   function sairClick(){
      storage.remove('usuario-logado');
      navigate('/loginusuario');

   }
   

   return(
      <nav className="menu-total2">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>
      <style>
       @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
       </style>
      <div>
         <div className='items'>
             <div>
              <img src={Perfil}  />
              <div><Link to='/homecliente'>Meu perfil</Link></div>
            </div>

            <div>
               <img src={Site} />
               <div><Link to=''>Visitar Site</Link></div>
            </div>
            <div>
               <img src={Carrinho} className='imgcarrinho'/>
               <div ><Link to=''>Meu carrinho</Link></div>
            </div>
            <div>
               <img src={Favoritos}/>
               <div>Favoritos</div>
            </div>
            <div>
               <img src={Pedidos}/>
               <div>Pedidos</div>
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
