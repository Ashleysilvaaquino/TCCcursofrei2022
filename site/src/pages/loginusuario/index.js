
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

  return (
    <div className="pag-total-adm">
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
       </style>
       <style>
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>
      <LoadingBar color='#3E7797' height={3} ref={ref} />
      <div className="comp-logo">
        <h1 >LIVRARIA MONTES</h1>
        <p className="logo-voltar">Voltar</p>
      </div>
      <div className="cabecalho-login">
        <h1 className="text-principal">
          ENTRAR COM EMAIL <span> E SENHA</span>{" "}
        </h1>

        <label className="email-login">Email:</label>
        <input
          type="text"
          placeholder="Insira seu email"
          className="input-email-login-adm"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className="email-login">Senha:</label>
        <input
          type="password"
          placeholder="********"
          className="input-senha-login-adm"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
      </div>
      <div className="cadastrar-agora">
        <p className="p-1">
          Não possui conta? 
        </p>
      <div className="cadastrar">
      <Link to="/cadastrarcliente">Cadastre-se agora</Link>
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
