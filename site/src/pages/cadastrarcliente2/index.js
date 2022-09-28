import './index.scss'
import logofrei from '../../assets/images/logofrei.png'

export default function CadastrarCliente() {
    return (

        <main className='nomee'>
            <div className='logo'>
                <img src={logofrei} alt="" className='loguinho' />
                
        <div className='main'>

            </div>

            <section className='section1'>

                <div className="dados">
                    <h1>Opa, você está <span> quase lá </span></h1>


                //select estado

                    <p className='dado'>CEP:</p>
                    <input type="number" className='input-cep' />


                    <p className="dado">Número</p>
                    <input type="number" className='input-numero' />

                    <p className="dado">Celular</p>
                    <input type="number" className='input-numero' />

                </div>


                <div className="botaoo">
                    <button className="botao">Criar conta</button>
                </div>
            </section>
        </div>
        </main>
    )
}