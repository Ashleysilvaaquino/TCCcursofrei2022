import './index.scss';

import { Link } from 'react-router-dom';


function CadastrarCliente1(){
  





    return(
        <div>
            <div className='comp-logo'>
                <h1 className='comp-logo-azul'>LIVRARIA MONTES</h1>
                <p className='logo-voltar'>Voltar</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='text-principal-cadastrarcliente'>
            <p>SEJA BEM<span>-VINDO(A)</span> </p>
            </div>
            <br></br>
            <br></br>
            <div className='inputs'>
                <div>
                    <p className='nome-cliente'>Nome:</p>
                    <input type="text" placeholder='ex: maria silva'className='input-nome-cliente'/>
                </div>
                <br></br>
                <br></br>
                <div>
                    <p className='email-cliente'>Email:</p>
                    <input type="text" placeholder='ex: maria@gmail.com' className='input-email-cliente' />
                </div>
                <br></br>
                <br></br>
                <div>
                    <p className='senha-cliente'>Senha:</p>
                    <input type="password" placeholder='********' className='input-senha-cliente' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Link to='/cadastrarcliente2' className='botao-avancar-cliente'> Avançar </Link>
            </div>
        </div>
    )
}

export default CadastrarCliente1;