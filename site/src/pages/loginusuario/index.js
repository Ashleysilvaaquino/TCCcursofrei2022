import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function LoginUsuario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

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
        navigate("/loginusuario");
      }
    } catch (err) {
      if (err.response.status === 401) {
        setErro(err.response.data.erro);
      }
    }
  }

  return (
    <div className="pag-total-adm">
      <div className="comp-logo">
        <h1 className="comp-logo-azul">LIVRARIA MONTES</h1>
        <p className="logo-voltar">Voltar</p>
      </div>
      <div className="cabecalho-login">
        <h1 className="text-principal">
          ENTRAR COM EMAIL <span> E SENHA</span>{" "}
        </h1>

        <label className="email-login">Seu email:</label>
        <input
          type="text"
          placeholder="maria@gmail.com"
          className="input-email-login-adm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="email-login">Senha:</label>
        <input
          type="password"
          placeholder="********"
          className="input-senha-login-adm"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="cadastrar-agora">
        <p className="p-1">
          Não possui conta? <span></span>
        </p>
        <p>Cadastre-se agora</p>
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
