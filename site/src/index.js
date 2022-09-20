import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandPage from './pages/landpage';
import Loginadm from './pages/loginadm';
import CadastrarLivro from './pages/cadastrarlivro'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<LandPage/>}/>
        <Route path = '/loginadm' element ={<Loginadm/>}/>
        <Route path = '/cadastrarlivro' element ={<CadastrarLivro/>}/>
      
      </Routes>
    </BrowserRouter>
   
   
  </React.StrictMode>
);

