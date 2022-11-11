import './index.scss';

export default function CardEndereco( { item : { referencia, bairro, logradouro, estado, cidade, complemento, cep, numero }}) {

    return (
        <main className="card-endereco">
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
                    <p>{numero}</p>
                </div>
            </section>
        </main>
    );
}