
import './index.scss';



function LoginUsuario() {

    return (
        <div className='pag-total-adm'>
            <div className='comp-logo'>
                <h1 className='comp-logo-azul'>LIVRARIA MONTES</h1>
                <p className='logo-voltar'>Voltar</p>
            </div>
            <div className='cabecalho-login'>
                <h1 className='text-principal'>ENTRAR COM EMAIL <span> E SENHA</span> </h1>
                
                    <label className='email-login'>Seu email:</label>
                <input type="text" placeholder='maria@gmail.com' className='input-email-login-adm'/>
                
                
                    <label className='email-login'>Senha:</label>
                    <input type="password" placeholder='********' className='input-senha-login-adm'/>
                
                
            </div>
            <div className='cadastrar-agora'>
                <p className='p-1'>Não possui conta? <span></span></p>
                <p>Cadastre-se agora</p>
            </div>
            <div>
                <button className='botao-entrar-adm' >Entrar</button>
            </div>
            <div className='credenciais-invalidas'>
                
            </div>
        </div>
    )
}

export default LoginUsuario;