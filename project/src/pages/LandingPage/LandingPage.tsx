// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createGlobalStyle } from 'styled-components';
import { LogoImage, NavBar, NavBarInner, SlideImage, Image } from './LandingPage.module';
// import AnalyticsComponent from '../../components/AnalyticsComponent';

import '../../assets/css/animate.css'
import '../../assets/css/bootstrap-responsive.css'
import '../../assets/css/bootstrap.css'
import '../../assets/css/jquery.bxslider.css'
import '../../assets/css/jquery.cslider.css'
import '../../assets/css/nectartec.css'
import '../../assets/css/style.css'

// import '../../assets/backend/js/app.js';
// import '../../assets/backend/js/bootstrap.js';
// import '../../assets/backend/js/jquery.bxslider.js';
// import '../../assets/backend/js/jquery.cslider.js';
// import '../../assets/backend/js/jquery.inview.js';
// import '../../assets/backend/js/jquery.mixitup.js';
// import '../../assets/backend/js/jquery.placeholder.js';
// import '../../assets/backend/js/modernizr.custom.js';
// import '../../assets/backend/js/respond.min.js';

import logo from '../../assets/images/logo.png';
import Slider01 from '../../assets/images/Slider01.png';
import Slider02 from '../../assets/images/Slider02.png';
import Slider03 from '../../assets/images/Slider03.png';
import MissaoNectarTec from '../../assets/images/missao_nectartec.jpeg';
import Visao from '../../assets/images/visao.jpg';
import Valores from '../../assets/images/valores.jpg';
import Service1 from'../../assets/images/Service1.png';
import Service2 from'../../assets/images/Service2.png';
import Service3 from'../../assets/images/Service3.png';
import Client01 from'../../assets/images/clients/nectarsistemas_logo.jpg';
import Client02 from'../../assets/images/clients/muniztec-logo.png';
import Client03 from'../../assets/images/clients/rieperBI.png';

export default function Home() {
    
    return (
        <>
            <NavBar>
                <NavBarInner>
                    <div className="container">
                        <a href="#" className="brand">
                            <LogoImage src={logo} alt="Logo"/>
                        </a>
                        <div className="nav-collapse">
                            <ul className="nav" id="top-navigation">
                                <li className="active"><a href="#home">Home</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><a href="#service">Serviços</a></li>
                                <li><a href="#clients">Parceiros</a></li>
                                <li><a href="#contact">Contato</a></li>
                                <li><a href="/signin">Acesso</a></li>
                            </ul>
                        </div>
                    </div>
                </NavBarInner>
            </NavBar>
        
            <div id="home">
                <div id="da-slider" className="da-slider">
                    <div className="triangle"></div>
                    <div className="mask"></div>
                    <div className="container">
                        <div className="da-slide">
                            <h2 className="fittext2">Bem Vindo a NectarTec</h2>
                            <h4>Consultoria e Serviços</h4>
                            <p>Uma empresa especializada no desenvolvimento de software. ERP - Enterprise Resource Planning.</p>
                            <div className="da-img">
                                <SlideImage src={Slider01} alt="image01"/>
                            </div>
                        </div>
                        <div className="da-slide">
                            <h2>business intelligence</h2>
                            <h4>Power BI</h4>
                            <p>Crie uma cultura controlada por dados com business intelligence para todos. Compartilhe, interaja e colabore em relatórios baseados em seus dados para encontrar insights, tendências e business intelligence cruciais de que você precisa.</p>
                            <a href="https://powerbi.microsoft.com/pt-br" target="_blank" className="da-link button">Leia mais</a>
                            <div className="da-img">
                                <SlideImage src={Slider02} alt="image02"/>
                            </div>
                        </div>
                        <div className="da-slide">
                            <h2>Software e Serviços</h2>
                            <p>Especialista no desenvolvimento de softwares de gestão empresarial com tecnologia Microsoft,
                                com foco em maximizar resultados.
                                As soluções são projetadas para: Agronegócio </p>
                            <a href="https://nectarsistemas.com.br" target="_blank" className="da-link button">Leia mais</a>
                            <div className="da-img">
                                <SlideImage src={Slider03} alt="image03"/>
                            </div>
                        </div>
                        <div className="da-arrows">
                            <span className="da-arrows-prev"></span>
                            <span className="da-arrows-next"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section primary-section" id="about">
                <div className="triangle"></div>
                <div className="container">
                    <div className="title">
                        <h1>Quem somos?</h1>
                    </div>
                    <div className="row-fluid team">
                        <div className="span4" id="first-person">
                            <div className="thumbnail">
                                <Image src={MissaoNectarTec} alt="team 1" />

                                <div className="mask">
                                    <h2>Missão</h2>
                                    <p>Levar a melhor experiência para todos os clientes, colaboradores de todas as áreas para que possamos atingir todos os nossos objetivos comuns e pessoais</p>
                                </div>
                            </div>
                        </div>
                        <div className="span4" id="second-person">
                            <div className="thumbnail">
                                <Image src={Visao} alt="team 1"/>

                                <div className="mask">
                                    <h2>Visão</h2>
                                    <p>Ter o Cliente como fonte de inspiração para os nossos produtos e serviços e por isso sermos reconhecidos no mercado.</p>
                                </div>
                            </div>
                        </div>
                        <div className="span4" id="third-person">
                            <div className="thumbnail">
                                <Image src={Valores} alt="team 1" />

                                <div className="mask">
                                    <h2>Valores</h2>
                                    <p>Respeito por nossos Clientes e Fornecedores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-text centered">
                        <h3>Sobre nós</h3>
                        <p>Somos apaixonados por tecnologia.</p>
                        <p>Com este principio criamos a NectarTec, para apoiar nossos clientes em diversas áreas de negócio e automatizar o seu ambiente de trabalho.</p>
                        <p>Para isso contamos com uma sólida parceria com a melhor consultoria de ERP para agronegócio a Nectar Sistemas.</p>

                    </div>
                    <h3>Skills</h3>
                    <div className="row-fluid">
                        <div className="span6">
                            <ul className="skills">
                                <li>
                                    <span className="bar" data-width="95%"></span>
                                    <h3>Implantação de sistemas</h3>
                                </li>
                                <li>
                                    <span className="bar" data-width="90%"></span>
                                    <h3>Consultoria e gestão de Negócio</h3>
                                </li>
                                <li>
                                    <span className="bar" data-width="83%"></span>
                                    <h3>Desenvolvimento de sistemas</h3>
                                </li>
                                <li>
                                    <span className="bar" data-width="93%"></span>
                                    <h3>Desenvolvimento de dashboards</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section primary-section" id="service">
                <div className="container">
                    <div className="title">
                        <h1>Onde a NectarTec esta atuando</h1>
                        <p>Atuamos em diversas frentes para atender todas as necessidades dos nossos clientes.</p>
                    </div>
                    <div className="row-fluid">
                        <div className="span4">
                            <div className="centered service">
                                <div className="circle-border zoom-in">
                                    <Image className="img-circle" src={Service1} alt="service 1"/>
                                </div>
                                <h3>Soluções em ERP </h3>
                                <p>Em parceria com a Nectar Sistemas temos o melhor ERP para agronegócio.</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className="centered service">
                                <div className="circle-border zoom-in">
                                    <Image className="img-circle" src={Service2} alt="service 2"/>
                                </div>
                                <h3>Consultoria e gestão de negócio</h3>
                                <p>Quer melhorar os seus resultados mas não sabe como? A consultoria em gestão de negócios pode ser uma aliada.</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className="centered service">
                                <div className="circle-border zoom-in">
                                    <Image className="img-circle" src={Service3} alt="service 3"/>
                                </div>
                                <h3>Desenvolvimento de software</h3>
                                <p>Um conjunto de procedimentos estratégicos e organizados com o propósito de arquitetar, desenvolver e testar o software. Além de prestar manutenção para garantir seu bom funcionamento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="clients">
                <div className="section primary-section">

                    <div className="container">
                    </div>
                </div>
            </div>

            <div className="section third-section">
                <div className="container centered">
                    <div className="sub-section">
                        <div className="title clearfix">
                            <div className="pull-left">
                                <h3>Nossos Parceiros</h3>
                            </div>
                            <ul className="client-nav pull-right">
                                <li id="client-prev"></li>
                                <li id="client-next"></li>
                            </ul>
                        </div>
                        <ul className="row client-slider" id="clint-slider">
                            <li>
                                <a href="https://nectarsistemas.com.br/" target="_blank">
                                    <Image src={Client01} alt="client logo 1"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://muniztec.com.br/" target="_blank">
                                    <Image src={Client02} alt="client logo 2"/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Image src={Client03} alt="client logo 3"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section third-section">
                <div className="container newsletter">
                </div>
            </div>

            <div id="contact" className="contact">
                <div className="section secondary-section">
                    <div className="container">
                        <div className="title">
                            <h1>Contate-nos</h1>
                            <p></p>
                        </div>
                    </div>
                    <div className="map-wrapper">
                        <div className="map-canvas" id="map-canvas"></div>
                        <div className="container">
                            <div className="row-fluid">
                                <div className="span5 center contact-form">
                                    <h3>Entre em Contato</h3>
                                    <div id="successSend" className="alert alert-success invisible">
                                        <strong>Obrigado!</strong>Sua mensagem foi enviada.</div>
                                    <div id="errorSend" className="alert alert-error invisible">Erro no Email.</div>
                                    <form id="contact-form" action="php/mail.php">
                                        <div className="control-group">
                                            <div className="controls">
                                                <input className="span12" type="text" id="name" name="name" placeholder="* Seu nome..." />
                                                <div className="error left-align" id="err-name">Escreva seu nome.</div>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <input className="span12" type="email" name="email" id="email" placeholder="* Seu email..." />
                                                <div className="error left-align" id="err-email">email invalido.</div>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <textarea style={{resize: "none"}} className="span12" name="comment" id="comment" placeholder="* Comente..."></textarea>
                                                <div className="error left-align" id="err-comment">Digite seu comentario.</div>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <button id="send-mail" className="message-btn">Enviar Mensagem</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="span9 center contact-info">
                            <p>Piracicaba, São Paulo</p>
                            <p className="info-mail">contato@nectartec.com.br</p>
                            <p>11 98508-7790 - Richardt Rieper</p>
                            <div className="title">
                                <h3>Social</h3>
                            </div>
                        </div>
                        <div className="row-fluid centered">
                            <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/company/nectartec">
                                        <span className="icon-linkedin-circled"></span>
                                    </a>

                                    <a href="https://api.whatsapp.com/send?phone=5511985087790&text=Tenho interesse em seus produtos ERP/Consultoria, podemos falar?"
                                        target="_blank"
                                        style={{ position: "fixed", bottom: "40px", right: "90px" }}>
                                        <svg enableBackground="new 0 0 512 512" width="40" height="40" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z" fill="#4CAF50" /><path d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" fill="#FAFAFA" /></svg>
                                    </a>

                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>&copy; 2022 Theme by <a href="http://www.graphberry.com">GraphBerry</a>, <a href="http://goo.gl/NM84K2">Documentation</a></p>
            </div>

            <div className="scrollup active">
                <a href="#">
                    <i className="icon-up-open"></i>
                </a>
            </div>

            {/* <AnalyticsComponent /> */}
        </>
    )
}