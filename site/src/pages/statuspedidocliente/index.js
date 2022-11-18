import './index.scss'


import Menu from '../../components/menucliente';

import Caixa from '../../assets/images/caixa.png'
import Caminhao from '../../assets/images/caminhao.png'
import Casa from '../../assets/images/casa.png'
import N1 from '../../assets/images/n1.png'




export default function StatusPedidoCliente(){
    return(
        <div>
            
            <div className='flexbox-status-cliente'>
                <Menu></Menu>
                <section className="quadrante-menor-status-pedido">
                    
                        <h3 className="h3-status-pedido">STATUS</h3>
                    
                    
                    <div className="status-fotos">
                        <div className="div-status-pedido">
                            <img src={Caixa} /> 
                            
                            <p>Preparando</p>
                            
                        </div>
                        <div className="div-status-pedido">
                            <img src={Caminhao} />
                            <p>A caminho</p>
                        </div>
                        <div className="div-status-pedido">
                            <img src={Casa} />
                            <p>Entregue</p>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    )
}