import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandPage from './pages/landpage';
import Loginadm from './pages/loginadm';
import CadastrarLivro from './pages/cadastrarlivro'
import Teste from './pages/teste'
import LoginUsuario from './pages/loginusuario';
import CadastrarCliente1 from './pages/cadastrarcliente1';
import CardLivro from './components/cardGerenciarLivro';
import CadastrarCliente2 from './pages/cadastrarcliente2';
import PesquisarLivro from './pages/pesquisarlivro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<LandPage/>}/>
        <Route path = '/loginadm' element ={<Loginadm/>}/>
        <Route path = '/cadastrarlivro' element ={<CadastrarLivro/>}/>
        <Route path = '/teste' element ={<Teste/>}/>
        <Route path = '/loginusuario' element ={<LoginUsuario/>}/>
        <Route path = '/cadastrarcliente1' element ={<CadastrarCliente1/>}/>
        <Route path = '/cadastrarcliente2' element ={<CadastrarCliente2/>}/>
        <Route path = '/cardlivro' element ={<CardLivro/>}/>
        <Route path = '/pesquisarlivro' element ={<PesquisarLivro/>}/>

      </Routes>
    </BrowserRouter>
   
   
  </React.StrictMode>
);

