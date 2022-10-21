import "./index.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Endereco() {
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
        <div className="cep">
          <label>CEP:</label>
          <input type="text" placeholder="Ex: 22222-222" />
        </div>

        <div className="numero">
          <label>Número:</label>
          <input type="text" placeholder="Ex:13" />
        </div>

        <div className="estado">
          <label>Estado:</label>

          <select>
            <option value="" key=""></option>
          </select>

          <section className="botoes">
            <button>Cadastrar</button>

            <Link to="/carrinho">
              <button>Avançar</button>
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
