import './index.scss'

//import Home from '../../assets/images/home.png'
//import Cadastrar from '../../assets/images/cadastrar.png'
//import Gerenciar from '../../assets/images/gerenciar.png'
//import Pedidos from '../../assets/images/pedidos.png'
//import Sair from '../../assets/images/sair.png'

export default function CadastrarLivro(){
    return(
    <div>
        <div className='rodape-esquerdo'>
            <div className='home'>
              
                <p>Home</p>
            </div>
            
            <div className='cadastrar'>
                
                <p>Cadastrar</p>
            </div>
            
            <div className='gerenciar'>
              
                <p>Gerenciar</p>
            </div>
            
            <div className='pedidos'>
                
                <p>Pedidos</p> 
            </div>
            
            <div>
             
                <p>Sair</p>
            </div>
            
        </div>

        
    </div>
    )
}