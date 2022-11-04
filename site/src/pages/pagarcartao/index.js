import './index.scss';

import Logo from '../../assets/images/logo.png'
import FotoCartao from '../../assets/images/cartao.png'

function PagarCartao() {
    return (

        <main>
            <div className='logo'>
            <img src={Logo} alt="" />
            </div>

            <div className='flex'>

                <div className='quadrado1'>
                    <div className='dados'>


                        <div className='div1'>
                            <label>Nome completo do títular:</label>
                            <input type="text" placeholder='Insira seu nome ' />

                        </div>


                        <div className='div1'>

                            <label>Número do cartão:</label>

                            <input type="text" placeholder='Insira seu número do cartão ' />
                        </div>

                        <div className='cartaozinho'>
                            <img src={FotoCartao} alt="" className='fotoCartao' />

                        </div>
                    </div>
                </div>


                <div className='quadrado2'>

                    <div className='div1'>
                        <label>Código de segurança:</label>
                        <input type="text" placeholder='Insira o codigo ' />
                    </div>


                    <div className='div1'>
                        <label>Vencimento:</label>
                        <input type="text" placeholder='Insira o vencimento ' />
                    </div>

                    <p className='vamo'> O código do produto é:</p>
                    <p> 054854120521</p>
                </div>

                </div>
                <div className='botoes'>

                    <div>
                        <p>Voltar</p>
                    </div>

                    <div className='botao2'>
                        <button>Pagar</button>
                    </div>
            </div>
        </main>

    )




}
export default PagarCartao;