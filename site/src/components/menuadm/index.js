import './index.scss'
import Home from '../../assets/images/home.png'
import Cadastrar from '../../assets/images/cadastrar.png'
import Gerenciar from '../../assets/images/gerenciar.png'
import Pedidos from '../../assets/images/pedidos.png'
import Sair from '../../assets/images/sair.png'
import {Link} from 'react-router-dom'

export default function Menu(){

   return(
      <nav className="menu-total">
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
               <div>Pedidos</div>
            </div>
  
  
      </div>
  </div>
  
  <div className='items'>
      <div className='items2'>
          <img src={Sair} />
          <div>Sair</div>
      </div>
  </div>
  </nav>
   );
   
}
