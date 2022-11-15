import './index.scss'

import storage from 'local-storage'

import { useNavigate } from 'react-router-dom';
import { InserirCliente, listarEstado } from '../../api/usuarioAPI';
import {  useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

export default function CadastrarCliente() {
    const [celular, setCelular] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function salvarClick(){
        try {
           const r = await InserirCliente(nome, email, senha, celular);
           toast.dark('Você foi cadastrado com sucesso ❤️')
        } 
        catch (err) {
            toast.dark(err.message);
        }
       }


       const navigate = useNavigate();
    
    
   
       useEffect(() => {
            if(!storage('adm-logado')){
               navigate('/loginadm');
            }
       }, [])

    return (

        <main>
            <div className='titulo'>
                <h1>LIVRARIA MONTES</h1>
            </div>
            <div className='voltar'>
                <Link to="/loginusuario">Voltar</Link>
            </div>


        <div className='nomee'>
            <section className='section1'>

               <div className = "opa">
                    <h1>CADASTRE-SE <span> JÁ </span></h1>
                </div>


                <div className="dados">
                 
                    <label className='dado'>Nome:</label>
                    <input type="text" placeholder='Insira seu nome ' value={nome} onChange={e => setNome(e.target.value)}/>
                  
                   
                   
                    <label className='dado'>Email:</label>
                    <input type="text" placeholder='Insira o seu Email' value={email} onChange={e => setEmail(e.target.value)}/>
                   

                   
                    <label className='dado'>Senha:</label>
                    <input type="password" placeholder='********' value={senha} onChange={e => setSenha(e.target.value)}/>
                  

                    <label className="dado">Celular:</label>
                    <input placeholder='11 9999-1010'  value={celular} onChange={e => setCelular(e.target.value)}/> 
                    <button className='botaoo' onClick={salvarClick} >Cadastrar</button>
                    
                </div>

            </section>

        </div>
        </main>
    )
}