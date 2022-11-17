import { listarTodosLivros } from '../../api/admAPI';

import './index.scss'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CarrinhoTirar from '../../assets/images/tirarcarrinho.png'

import { API_URL } from '../../api/config';

export default function Carrinhocard(){
    const [livros, setLivros] = useState([]);

    async function carregarTodosLivros() {
        const resp = await listarTodosLivros();
        setLivros(resp);
    }

      
    useEffect(() => {
        carregarTodosLivros();
    }, []);

    function abrirDetalhes(id){
        navigate(`/finalizarcompra`);
    }
    const navigate = useNavigate();
    
    return(
        <div>
          
          
          
        
            {livros.map(item =>
                <div className='comp-card2' key={item.id} >
                    <div>
                    <img src={CarrinhoTirar}/>
                        </div>
                    <div className='capa'>
                      <img src={API_URL + '/' + item.imagem}/>
                     </div>                 


                    <div className="coluna-tx">

                       
                        <h3>{item.nome}</h3>
                    </div>
                    <div className="preco2">

                    <label>Preço</label>
                    <p>{item.preco}</p>

                    </div>

                    <div className="quantidade">

                    <label>Quantidade</label>
                    <input type='Number'  className='qtd' ></input>

                
                    </div>
                    <div className="total">

                    <label>Total</label>
                    <p>{item.preco}</p>

                    </div>

                 
              
              
              <div className='botao-comprarcarrinho'>
              <button onClick={() => abrirDetalhes(item.id)}>
                    Comprar
                </button>
              </div>
                    
                </div> 
            )}
         
 
          

         </div>
    )
}