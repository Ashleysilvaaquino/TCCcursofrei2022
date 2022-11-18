import './index.scss';



export default function CardEndereco({ item : {id, referencia, bairro, logradouro, estado, cidade, complemento, cep, residencia }, selecionar, selecionado}  ) {
    
    
    console.log(selecionar);
    return (
        <main className="card-endereco" onClick={() => selecionar(id)} style={{borderColor: selecionado ? '#3E7797' : '#34363d'}}>
            <div className="titulo-comp-endereco">
             
                <h3>{referencia}</h3>

            </div>
            <section className="conteudo-card-endereco">
                <div className="f-esquerda-comp-endereco">
                    <label>Logradouro</label>
                    <p>{logradouro}</p>
                    <label>Bairro</label>
                    <p>{bairro}</p>
                    <label>Estado</label>
                    <p>{estado}</p>
                    <label>Cidade</label>
                    <p>{cidade}</p>

                </div>
                <div className="f-direita-comp-endereco">
                    <label>Complemento</label>
                    <p>{complemento}</p>
                    <label>CEP</label>
                    <p>{cep}</p>
                    <label>N°</label>
                    <p>{residencia}</p>
                </div>
            </section>
        </main>
    );
}