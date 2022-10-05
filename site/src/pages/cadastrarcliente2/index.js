import './index.scss'
import logofrei from '../../assets/images/logofrei.png'
import { InserirCliente, listarEstado } from '../../api/usuarioAPI';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function CadastrarCliente2() {
    const [estado, setEstado] = useState([]);
    const [idestado, setIdestado] = useState();
    const [cep , setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [celular, setCelular] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

   


  

    async function salvarClick(){
        try {
           const r = await InserirCliente(nome, email, senha, celular, endereco, idestado );
           toast.dark('Você foi cadastrado com sucesso')
        } 
        catch (err) {
            toast.dark(err.message);
        }
       }

    async function carregarEstados() {
        const r = await listarEstado();
        setEstado(r);
    }
    
    useEffect(() => {
        carregarEstados();
    }, [])
    return (

        <main>
            <div className='logo'>
                <img src={logofrei} alt="" className='loguinho' />
            </div>


        <div className='nomee'>
            <section className='section1'>

               <div className = "opa">
                    <h1>CADASTRE-SE <span> JÁ </span></h1>
                </div>


                <div className="dados">
                 
                    <label className='dado'>Nome:</label>
                    <input type="text" placeholder='ex: maria silva'className='input-nome-cliente' value={nome} onChange={e => setNome(e.target.value)}/>
                  
                   
                   
                    <label className='dado'>Email:</label>
                    <input type="text" placeholder='ex: maria@gmail.com' className='input-email-cliente' value={email} onChange={e => setEmail(e.target.value)}/>
                   

                   
                    <label className='dado'>Senha:</label>
                    <input type="password" placeholder='********' className='input-senha-cliente' value={senha} onChange={e => setSenha(e.target.value)}/>
                  

                    <label className= "dado">Estado</label> 
                    <select value={idestado} onChange={e => setIdestado(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {estado.map(item =>
                                <option value={item.id}> {item.nome} </option>
                            )}
                        </select> 

                
        

                    <label className='dado'>CEP:</label>
                    <input  className='input-cep' placeholder='Ex: 22222-222' value={cep} onChange={e => setCep(e.target.value)} />


                    <p className="dado">Número:</p>
                    <input  className='input-numero'  placeholder='Ex: 100' value={numero} onChange={e => setNumero(e.target.value)}/>

                    <p className="dado">Celular:</p>
                    <input className='input-numero' placeholder='11 9999-1010'  value={celular} onChange={e => setCelular(e.target.value)}/>

                </div>


                <div className="botaoo">
                    <button className="botao" onClick={salvarClick}>Criar conta</button>
                </div>
            </section>
        </div>
        </main>
    )
}