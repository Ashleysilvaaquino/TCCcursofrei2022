import {Login} from '../../api/admAPI'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'

import { useState, useRef, useEffect } from 'react'
import './index.scss';




export default function LoginAdm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('adm-logado')) {
            navigate('/admhome');
        }
    }, []);





    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);
     
        try{
            const r = await Login(email,senha);
            storage('adm-logado', r);
            setTimeout(() => {
                navigate('/admhome');
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
        <div className='pag-total-adm'>
          
           
            <LoadingBar color='#3E7797' height={2} ref={ref} />
            <div className='comp-logo4'>
                <h1>LIVRARIA MONTES</h1>
                <p className='logo-voltar'onClick={voltarClick} disabled={carregando}>Voltar</p>
            </div>
            <div className='cabecalho-login'>
                <h1 className='text-principal'>SEJA BEM-VINDO (A)<span> A ÁREA ADMINISTRATIVA</span> </h1>
                
                    <label className='email-login2'>Email:</label>
                <input type="text" placeholder='Exemplo@gmail.com' className='input-email-login-adm'value={email} onChange={e =>setEmail(e.target.value)}/>
                
                
                    <label className='email-login2'>Senha:</label>
                    <input type="password" placeholder='********' className='input-senha-login-adm' value={senha} onChange={e =>setSenha(e.target.value)}/>
                
                
            </div>
            <div className='adm-botao'>
                <button className='botao-entrar-adm' onClick={entrarClick} disabled={carregando}>Entrar</button>
            </div>
            <div className='credenciais-invalidas'>
                {erro}
            </div>
        </div>
    )
}
