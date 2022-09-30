import './index.scss'
import logofrei from '../../assets/images/logofrei.png'

export default function CadastrarCliente() {
    return (

        <main>
            <div className='logo'>
                <img src={logofrei} alt="" className='loguinho' />
            </div>


        <div className='nomee'>
            <section className='section1'>

               <div className = "opa">
                    <h1>OPA, VOCÊ ESTÁ <span>QUASE LÁ </span></h1>
                </div>


                <div className="dados">
               

                    <label className= "dado">Estado</label> 
                    <select>
                            <option selected disabled hidden>Ex: São Paulo</option>

                    </select>
                
        

                    <label className='dado'>CEP:</label>
                    <input  className='input-cep' placeholder='Ex: 22222-222' />


                    <p className="dado">Número:</p>
                    <input  className='input-numero'  placeholder='Ex: 100' />

                    <p className="dado">Celular:</p>
                    <input className='input-numero' placeholder='11 9999-1010'/>

                </div>


                <div className="botaoo">
                    <button className="botao">Criar conta</button>
                </div>
            </section>
        </div>
        </main>
    )
}