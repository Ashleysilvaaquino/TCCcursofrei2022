import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandPage from './pages/landpage';
import Loginadm from './pages/loginadm';
import CadastrarLivro from './pages/cadastrarlivro'
import Teste from './pages/teste'
import LoginUsuario from './pages/loginusuario';
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
      </Routes>
    </BrowserRouter>
   
   
  </React.StrictMode>
);

