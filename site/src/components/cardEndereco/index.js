import './index.scss';

export default function CardEndereco() {

    return (
        <main className="card-endereco">
            <div className="titulo-comp-endereco">
                <h3>Casa</h3>
            </div>
            <section className="conteudo-card-endereco">
                <div className="f-esquerda-comp-endereco">
                    <label>Logradouro</label>
                    <p>Rua Ave Maria</p>
                    <label>Bairro</label>
                    <p>Veleiros</p>
                    <label>Estado</label>
                    <p>SP</p>
                    <label>Cidade</label>
                    <p>São Paulo</p>

                </div>
                <div className="f-direita-comp-endereco">
                    <label>Complemento</label>
                    <p>Campainha 3</p>
                    <label>CEP</label>
                    <p>04467-050</p>
                    <label>N°</label>
                    <p>22-13</p>
                </div>
            </section>
        </main>
    );
}