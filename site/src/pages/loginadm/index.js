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
        if (storage('usuario-logado')) {
            navigate('/cadastrarlivro');
        }
    }, [])

    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);
        try{
            const r= await Login(email, senha);
            storage('usuario-logado', r);

           
            setTimeout(() => {
                navigate('/cadastrarlivro');
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
        <div className='pag-total-adm'>
            <LoadingBar color='#3E7797' height={3} ref={ref} />
            <div className='comp-logo'>
                <h1 className='comp-logo-azul'>LIVRARIA MONTES</h1>
                <p className='logo-voltar'>Voltar</p>
            </div>
            <div className='cabecalho-login'>
                <h1 className='text-principal'>SEJA BEM-VINDO (A)<span> A ÁREA ADMINISTRATIVA</span> </h1>
                
                    <label className='email-login'>Email:</label>
                <input type="text" placeholder='Exemplo@gmail.com' className='input-email-login-adm'value={email} onChange={e =>setEmail(e.target.value)}/>
                
                
                    <label className='email-login'>Senha:</label>
                    <input type="password" placeholder='********' className='input-senha-login-adm' value={senha} onChange={e =>setSenha(e.target.value)}/>
                
                
            </div>
            <div>
                <button className='botao-entrar-adm' onClick={entrarClick} disabled={carregando}>Entrar</button>
            </div>
            <div className='credenciais-invalidas'>
                {erro}
            </div>
        </div>
    )
}
