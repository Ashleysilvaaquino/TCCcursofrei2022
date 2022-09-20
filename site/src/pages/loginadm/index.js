
import './index.scss';



function loginAdm() {
    return (
        <div className='pag-total-adm'>
            <div className='comp-logo'>
                <h1 className='comp-logo-azul'>LIVRARIA MONTES</h1>
                <p className='logo-voltar'>Voltar</p>
            </div>
            <div className='cabecalho-login'>
                <h1 className='text-principal'>SEJA BEM-VINDO (A)<span> A ÁREA ADMINISTRATIVA</span> </h1>
                
                    <label className='email-login'>Seu email:</label>
                <input type="text" placeholder='example@gmail.com' className='input-email-login-adm'/>
                
                
                    <label className='email-login'>Senha:</label>
                    <input type="text" placeholder='********' className='input-senha-login-adm'/>
                
                
            </div>
            <div>
                <button className='botao-entrar-adm'>Entrar</button>
            </div>
        </div>
    )
}

export default loginAdm;