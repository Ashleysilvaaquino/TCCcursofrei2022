
import './index.scss';
import login from '../../assets/images/login2.png';
import BarraPesquisa from '../../components/pesquisa';

import Terror from '../../assets/images/generoterror.png'
import InfantilGenero from '../../assets/images/infantil.png'
import Programacao from '../../assets/images/programacao.png'
import Psico from '../../assets/images/psico.png'
import Romance from '../../assets/images/romance.png'
import Menina from '../../assets/images/menina.png'
import Isabella from '../../assets/images/isabella.png'
import Ashley from '../../assets/images/ashley.png'
import Ana from '../../assets/images/ana.png'
import Guilherme from '../../assets/images/guilherme.png'
import Mulher from '../../assets/images/mulher.png'
import Pagamento from '../../assets/images/pagamento.png'
import Tiktok from '../../assets/images/TikTok.png'
import Instagram from '../../assets/images/Instagram.png'
import Email from '../../assets/images/email.png'
import LivroUsuario from '../../components/livrousuario';
import Biologia from '../../assets/images/biologia.png';
import Harry from '../../assets/images/harry-potter.png'
import Poesia from '../../assets/images/poesia.png'
import Famoso from '../../assets/images/revista.png'
import lupa from '../../assets/images/lupa-pretinha.png';


import Musica from '../../assets/images/notas-musicais.png'

import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useState } from 'react';
import 'swiper/scss'
import "swiper/scss/free-mode";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { listarTodosLivros } from '../../api/admAPI';





function LandPage() {
    const [livros, setLivros] = useState([]);





    return (

        <div className='landpage'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    
                    {livros.map(item =>
                        <div className='comp-card' key={item.id}>

                            <div className="coluna-txt">

                                <label>Nome</label>
                                <p>{item.nome}</p>

                                <label>Autor</label>
                                <p>{item.autor}</p>

                                <label>Gênero</label>
                                <p className="genero">{item.nomeGenero}</p>

                            </div>

                            <div className="preco">

                                <label>Preço</label>
                                <p>{item.preco}</p>

                            </div>

                            <div className="descricao">

                                <label>Descrição</label>
                                <p>{item.descricao}</p>

                            </div>

                        </div>
                    )}
                </div>

                <div className='login'>
                    <Link to="/loginusuario" className='login'> <img src={login} /></Link>
                    <p>Login</p>
                </div>
            </div>
            <div>
                <hr></hr>
            </div>
            <div className='pt-carrosel'>
                <div>
                    <p className='explore-os-montes'>EXPLORE OS <span>MONTES</span></p>

                    <div >
                        <Swiper className='carrosel-pt1'
                            modules={[Navigation, Pagination]}
                            spaceBetween={15}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}


                        >

                            <SwiperSlide className='div-terror'> <img src={Terror} className='img-terror' /> <p >TERROR</p> </SwiperSlide>
                            <SwiperSlide className='div-infantil'><img src={InfantilGenero} className='img-infantil' /><p>INFANTIL</p></SwiperSlide>
                            <SwiperSlide className='div-programacao'><img src={Programacao} className='img-programacao' />
                                <p>PROGRAMAÇÃO</p></SwiperSlide>
                            <SwiperSlide className='div-psico'><img src={Psico} className='img-psico' /><p>PSICOLOGIA</p></SwiperSlide>
                            <SwiperSlide className='div-romance'><img src={Romance} className='img-romance' />
                                <p>ROMANCE</p></SwiperSlide>
                            <SwiperSlide className='div-psico'><img src={Biologia} className='img-romance' />
                                <p>BIOLOGIA</p></SwiperSlide>
                            <SwiperSlide className='div-romance'><img src={Harry} className='img-romance' />
                                                     <p>FANTASIA</p></SwiperSlide>
                            <SwiperSlide className='div-psico'><img src={Poesia} className='img-romance' />
                                                     <p>POESIA</p></SwiperSlide>
                            <SwiperSlide className='div-psico'><img src={Famoso} className='img-romance' />
                                <p>ARTÍSTAS</p></SwiperSlide>
                            <SwiperSlide className='div-psico'><img src={Musica} className='img-romance' />
                                                    <p>MUSICA</p></SwiperSlide>
                        </Swiper>







                    </div>
                </div>
            </div>

            <div>
                <h3 className='novidades-ladpage'>Novidades que você <span>precisa conhecer </span></h3>
                <div className='livros-landpage'>
                    <LivroUsuario className="livros"/>
                </div>
            </div>



            <div className='beneficios-landpage'>
                <h2 className='titulo-land'>Beneficios da leitura</h2>
                <div className='paragrafos-landpage'>
                    <div className='paragrafo1-landpage'>
                        <h3>Expande a criatividade</h3>
                        <p>Livros que narram fantasias, aventuras ou até mesmo romances levam você a outro mundo. Apenas o ato de imaginar como é um personagem descrito estimula a criatividade. Essa mesma habilidade pode ser incentivada com a leitura de diversos gêneros literários.</p>
                    </div>
                    <div className='paragrafo1-landpage'>
                        <h3>Desenvolve o pensamento crítico</h3>
                        <p>O pensamento crítico nada mais é do que ter a própria visão sobre um conjunto de assuntos, sendo capaz de formular a própria opinião, questionar conceitos e desenvolver os próprios argumentos. A leitura coloca você em contato com novos conteúdos, o que ajuda a estimular essa habilidade.</p>
                    </div>
                </div>
                <div className='menina'>
                    <img src={Menina} />
                </div>

            </div>

            <section className='nos'>
                <h2 className='agazinho2'>CONHEÇA A ADMINISTRAÇÃO <span>DA LIVRARIA MONTES</span></h2>
                <div className='f-quem-somos'>
                    <div className='administracao'>
                        <div className='div-isabella'>
                            <img src={Isabella} className='foto-isabella' />
                            <p className='txt-desenvolvedora'>Desenvolvedora Back-End</p>
                        </div>
                        <div className='div-ashley'>
                            <img src={Ashley} className='img-ashley' />
                            <p className='txt-desenvolvedora1'>Desenvolvedora Back-End</p>
                        </div>
                        <div className='div-ana'>
                            <img src={Ana} className='foto-ana' />
                            <p className='txt-desenvolvedora2'>Desenvolvedora Front-End</p>
                        </div>
                        <div className='div-guilherme'>
                            <img src={Guilherme} className='foto-guilherme' />
                            <p className='txt-desenvolvedora2'>Desenvolvedor Front-End</p>
                        </div>
                    </div>
                    <div className='mulher-ti'>
                        <img src={Mulher} />
                    </div>
                    <div className='quemsomos'>
                        <h2 >QUEM <span>SOMOS?</span></h2>
                        <p className='quemsomos-desc'>Somos uma empresa nacional de livros que se deu início em setembro de 2011, e que se teve maior reconhecimento em abril de 2020 graças ao frete mais rápido do Brasil. Entregamos livros para todo o território brasileiro. Rapidez, confiança e segurança.</p>
                    </div>

                </div>
            </section>

            <div className='rodape-landapage'>
                <div>
                    <p className='p-pagamento'>Formas de pagamento</p>
                    <img src={Pagamento} className='p-pagamento' />
                </div>

                <div>
                    <p className='r-redes'>Redes Sociais</p>
                    <div className='div-insta'>
                        <img src={Instagram} />
                        <p>@monteslivraria</p>
                    </div>
                    <div className='div-insta'>
                        <img src={Tiktok} />
                        <p>@livrariamontes</p>
                    </div>
                </div>

                <div>
                    <p className='r-redes'>Entre em contato</p>
                    <div className='div-insta'>
                        <img src={Email} />
                        <p>livrariamontes@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandPage;
