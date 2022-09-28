import './index.scss'

import Lapis from '../../assets/images/lapis.png'
import Lixo from '../../assets/images/lixo.png'
import Capa from '../../assets/images/capa.png'

export default function CardLivro(props) {
    return (
        <main className="comp-card">

            <div className="capa">
                <img src={Capa} alt="" />
            </div>

            <div className="coluna-txt">

                <label>Nome</label>
                <p>É assim que acaba</p>

                <label>Autor</label>
                <p>Collen Hoover</p>

                <label>Gênero</label>
                <p>Romance</p>

            </div>

            <div className="preco">

                <label>Preço</label>
                <p>80,00</p>

            </div>

            <div className="descricao">

                <label>Descrição</label>
                <p>Id ex labore cillum id id amet. Eu reprehenderit voluptate voluptate officia ipsum nostrud. Excepteur ea minim ad voluptate magna duis dolor eiusmod enim. Sit ipsum officia est occaecat qui mollit amet Lorem consectetur veniam magna cupidatat Lorem. Sint veniam quis et veniam qui excepteur dolor id. Esse veniam culpa excepteur voluptate anim ad velit minim. Consectetur consequat nostrud id qui et tempor sit ad ullamco ullamco ipsum.</p>

            </div>

            <div className="imgs">

                <img src={Lixo} alt="" />
                <img src={Lapis} alt="" />

            </div>

        </main>
    );
}