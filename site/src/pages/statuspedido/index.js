import Menu from "../../components/menuadm";
import './index.scss'
import Caixa from '../../assets/images/caixa.png'
import Caminhao from '../../assets/images/caminhao.png'
import Casa from '../../assets/images/casa.png'

export default function StatusPedido() {
    return (
        <section className="pg-status-pedido">
            <div >
                <Menu></Menu>
            </div>
            <div className="quadrande-maior-pg-status-pedido">
                <main className="inputs-status-pedido">
                    <div className="input-text-status-pedido">
                        <p>Nº Pedido </p>
                        <input type="text" className="caixa-input-pg-status"/>
                    </div >
                    <div className="input-text-status-pedido">
                        <p>Nome </p>
                        <input type="text" className="caixa-input-pg-status"/>
                    </div>
                    <div className="input-text-status-pedido">
                        <p>CEP </p>
                        <input type="text" className="caixa-input-pg-status"/>
                    </div>
                    <div >
                        <div>
                            <p>Nº </p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Valor</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input-text-status-pedido">
                        <p>Livros </p>
                        <input type="text" className="caixa-input-pg-status"/>
                    </div>  
                </main>
                <section className="quadrante-menor-status-pedido">
                    <h3 className="h3-status-pedido">STATUS</h3>
                    <div className="status-fotos">
                        <div className="div-status-pedido">
                            <img src={Caixa} />
                            <p>Encaminhando</p>
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
            <button>SELECIONAR</button>
        </section>
    )
}