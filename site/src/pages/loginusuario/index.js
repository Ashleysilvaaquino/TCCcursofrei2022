import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import {Link} from 'react-router-dom'

function LoginUsuario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  async function entrarClick() {
    try {
      const r = await axios.post("http://localhost:5000/cliente/login", {
        email: email,
        senha: senha,
      });
      if (r.status === 401) {
        setErro(r.data.erro);
      } else {
        navigate("/cadastrarlivro");
      }
    } catch (err) {
      if (err.response.status === 401) {
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
      <Link to="/cadastrarcliente2">Cadastre-se agora</Link>
      </div>
        
      </div>
      <div>
        <button className="botao-entrar-adm" onClick={entrarClick}>
          Entrar
        </button>
      </div>
      <div className="credenciais-invalidas">{erro}</div>
    </div>
  );
}

export default LoginUsuario;
