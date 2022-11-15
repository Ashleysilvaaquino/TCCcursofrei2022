
import {LoginCliente} from '../../api/usuarioAPI'  

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'


import "./index.scss";
import {Link} from 'react-router-dom'

function LoginUsuario() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
      if (storage('usuario-logado')) {
          navigate('/homecliente');
      }
  }, []);

  

  async function entrarClick(){
    ref.current.continuousStart();
    setCarregando(true);
 
    try{
        const r = await LoginCliente(email,senha);
       storage('usuario-logado', r)
       
        setTimeout(() => {
            navigate('/homecliente');
        }, 3000);
    
   }
   catch(err){
    ref.current.complete();
    setCarregando(false);
 
        if(err.response.status === 404){
            setErro(err.response.data.erro);
        }
   }
}

 async function voltarClick(){
        ref.current.continuousStart();
        setCarregando(true);
     
        try{
            
            setTimeout(() => {
                navigate('/');
            }, 1500);
        
       }
       catch(err){
        ref.current.complete();
        setCarregando(false);
     
            if(err.response.status === 404){
                setErro(err.response.data.erro);
            }
       }
    }



  return (
    <div className="pag-total-usuario">
      
      <LoadingBar color='#3E7797' height={2} ref={ref} />
      <div className="comp-logo">
        <h1 >LIVRARIA MONTES</h1>
       <p className='logo-voltar'onClick={voltarClick} disabled={carregando}>Voltar</p>
      </div>
      <div className="cabecalho-login">
        <h1 className="text-principal">
          ENTRAR COM EMAIL <span> E SENHA</span>{" "}
        </h1>

        <label className="email-login">Email:</label>
        <input
          type="text"
          placeholder="Insira seu email"
          className="input-email-login-usuario"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className="email-login">Senha:</label>
        <input
          type="password"
          placeholder="********"
          className="input-senha-login-usuario"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
      </div>
      <div className="cadastrar-agora">
        <p className="p-1">
          Não possui conta? 
        </p>
      <div className="cadastrar">
      <Link to="/CadastrarCliente">Cadastre-se agora</Link>
      </div>
        
      </div>
      <div className="botao">
        <button onClick={entrarClick} disabled={carregando}>
          Entrar
        </button>
      </div>
      <div className="credenciais-invalidas">{erro}</div>
    </div>
  );
}

export default LoginUsuario;
