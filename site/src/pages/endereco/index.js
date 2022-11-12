import "./index.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { salvar } from '../../api/enderecoAPI'
import Storage from "local-storage";
import { toast } from "react-toastify";

export default function Endereco() {
  const [referencia, setReferencia] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [residencia, setResidencia] = useState()
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  


  async function salvarEndereco() {
    try {
      const id = Storage('usuario-logado').id.ID_CONTA_USUARIO;
      const r = await salvar(id , referencia, cep, residencia, estado, cidade, logradouro, complemento, bairro);
      console.log(r);
      toast.dark('Endereço salvo 🏘️');
      
    } catch (err) {
      
      toast.error(err.message);
    }

  }

  return (
    <main className="endereco">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>

      <section>
        <div className="titulo2">
          <h1>LIVRARIA MONTES</h1>
        </div>
        <div className="voltar">
          <Link to="/loginusuario">Voltar</Link>
        </div>
      </section>

      <section className="formulario">

        <h1>CADASTRE SEU <span> ENDEREÇO </span></h1>

        <div className="pg-endereco-referencia">
          <label>Referencia:</label>
          <input type="text" placeholder="Ex: Casa" value={referencia} onChange={e => setReferencia(e.target.value)} />
        </div>

        <div className="pg-endereco-cep">
          <label>CEP:</label>
          <input type="text" placeholder="Ex: 22222-222" value={cep} onChange={e => setCep(e.target.value)} />
        </div>

        <div className="pg-endereco-numero">
          <label>Número:</label>
          <input type="text" placeholder="Ex:13" value={residencia} onChange={e => setResidencia(Number(e.target.value))} />
        </div>

        <div className="pg-endereco-estado">
          <label>Estado:</label>
          <input type="text" placeholder="Ex:SP" value={estado} onChange={e => setEstado(e.target.value)} />
        </div>

        <div className="pg-endereco-cidade">
          <label>Cidade:</label>
          <input type="text" placeholder="Ex:São Paulo" value={cidade} onChange={e => setCidade(e.target.value)} />
        </div>

        <div className="pg-endereco-logradouro">
          <label>Logradouro:</label>
          <input type="text" placeholder="Ex:Rua Um de Algum Lugar" value={logradouro} onChange={e => setLogradouro(e.target.value)} />
        </div>

        <div className="pg-endereco-bairro">
          <label>Bairro:</label>
          <input type="text" placeholder="Ex: jardim Itapura" value={bairro} onChange={e => setBairro(e.target.value)} />
        </div>

        <div className="pg-endereco-complemento">
          <label>Complemento:</label>
          <input type="text" placeholder="Ex: Campainha 3" value={complemento} onChange={e => setComplemento(e.target.value)} />
        </div>

        <section className="botoes">
          <button onClick={salvarEndereco}>Cadastrar</button>

          <Link to="/carrinho">
            <button>Avançar</button>
          </Link>
        </section>
      </section>
    </main>
  );
}
