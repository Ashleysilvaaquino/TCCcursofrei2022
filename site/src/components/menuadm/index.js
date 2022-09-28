import './index.scss'
import Home from '../../assets/images/home.png'
import Cadastrar from '../../assets/images/cadastrar.png'
import Gerenciar from '../../assets/images/gerenciar.png'
import Pedidos from '../../assets/images/pedidos.png'
import Sair from '../../assets/images/sair.png'


export default function Menu(){

   return(
      <nav className="menu-total">
      <div>
         <div className='menu-items'>
             <div>
              <img src={Home}  />
              <div>Home</div>
            </div>

            <div>
               <img src={Cadastrar} />
               <div>Cadastrar</div>
            </div>
            <div>
               <img src={Gerenciar} />
               <div>Gerenciar</div>
            </div>
            <div>
               <img src={Pedidos}/>
               <div>Pedidos</div>
            </div>
  
  
      </div>
  </div>
  
  <div className='menu-items'>
      <div className='menu-items2'>
          <img src={Sair} />
          <div>Sair</div>
      </div>
  </div>
  </nav>
   );
   
}
