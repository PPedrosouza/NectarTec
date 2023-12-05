import "./styles.css"
// import '../../../assets/css/animate.css'
// import '../../../assets/css/bootstrap-responsive.css'
// import '../../../assets/css/bootstrap.css'
// import '../../../assets/css/jquery.bxslider.css'
// import '../../../assets/css/jquery.cslider.css'
// import '../../../assets/css/nectartec.css'
// import '../../../assets/css/style.css'

import { Button, Card, CardGroup, Carousel, ProgressBar } from "react-bootstrap";

import MissaoNectarTec from '../../../assets/images/missao_nectartec.jpg';
import Visao from '../../../assets/images/visao.jpg';
import Valores from '../../../assets/images/valores.jpg';
import Service1 from '../../../assets/images/Service1.png';
import Service2 from '../../../assets/images/Service2.png';
import Service3 from '../../../assets/images/Service3.png';

import logo from '../../../assets/images/logo.png';

import Slider1 from '../ImageComponents/Slider1'
import Slider2 from "../ImageComponents/Slider2";
import Slider3 from "../ImageComponents/Slider3";

import Client1 from "../../../assets/images/clients/rieperBI.png";
import Client2 from "../../../assets/images/clients/nectarsistemas_logo.jpg";
import Client3 from "../../../assets/images/clients/muniztec.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useState } from "react";
import { TUser } from "../../../emails/types";
// import { validate } from "../../../contexts/AuthProvider/util";

import { Resend } from 'resend';
import { useNavigate } from "react-router-dom";
import { message, Form } from 'antd';


export default function Content() {

    const navigate = useNavigate();

    const handleClick = () => {
        const phoneNumber = '5511985087790';
        const message = 'Tenho interesse em seus produtos ERP/Consultoria, podemos falar?';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userMessage, setMessage] = useState("");

    const callFunction = () => {
        // handleSendEmail();
    }
    async function handleSendEmail(_values: { userName: string, userEmail: string, userMessage: string }) {
        try {
            await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    message: userMessage,
                })
            });

            navigate('/');
        } catch (error) {
            message.error('Preencha os dados')
        };

    };

    return (
        <div className="wrapper">
            <main>
                <div className="container-primary max-width" id="welcome">
                    <section className="container-primary--title">
                        <h1>Bem-vindo à NectarTec</h1>
                        <p className="gray-dark">Compromisso e Segurança</p>
                        <Button variant="warning" onClick={handleClick} className="button mt-5" style={{ backgroundColor: "#F2C034", borderRadius: "15px", width: "200px", height: "60px" }}>
                            Saiba Mais
                        </Button>

                    </section>
                    <section className="container-primary--logo">
                        <img src={logo} alt="Logo Nectar" />
                    </section>
                </div>

                <div className="container-background-light" id="services">
                    <Carousel>
                        <Carousel.Item>
                            <Slider1 text="First Slide" />
                            <Carousel.Caption className="carousel-caption-background">
                                <h3 className="slider-title">Consultoria e Serviços</h3>
                                <p className="slider-paragraph">Uma empresa especializada no desenvolvimento de software. ERP - Enterprise Resource Planning.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Slider2 text="Second Slide" />
                            <Carousel.Caption>
                                <h3 className="slider-title">Bussiness Intelligence</h3>
                                <p className="slider-paragraph">Crie uma cultura controlada por dados com business intelligence para todos. Compartilhe, interaja e colabore em relatórios baseados em seus dados para encontrar insights, tendências e business intelligence cruciais de que você precisa.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Slider3 text="Third Slide" />
                            <Carousel.Caption>
                                <h3 className="slider-title">Software e Serviços</h3>
                                <p className="slider-paragraph">
                                    Especialista no desenvolvimento de softwares de gestão empresarial com tecnologia Microsoft, com foco em maximizar resultados. As soluções são projetadas para: Agronegócio
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="container-tertiary max-width" id="about">
                    <div className="container-tertiary--title">
                        <h1>Quem Somos?</h1>
                    </div>
                    <section>
                        <CardGroup style={{ justifyContent: 'space-between' }}>
                            <Card style={{ margin: '0 50px 0 0' }} className="cards">
                                <Card.Img variant="top" src={MissaoNectarTec} className="fixed-size" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        Levar a melhor experiência para todos os clientes, colaboradores de todas as áreas para que possamos atingir todos os nossos objetivos comuns e pessoais.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Title className="text-card text-center">
                                    <strong>
                                        Missão
                                    </strong>
                                </Card.Title>
                            </Card>
                            <Card style={{ margin: '0 50px 0 0' }} className="cards">
                                <Card.Img variant="top" src={Visao} className="fixed-size" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        Ter o Cliente como fonte de inspiração para os nossos produtos e serviços e por isso sermos reconhecidos no mercado.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Title className="text-card text-center">
                                    <strong>
                                        Visão
                                    </strong>
                                </Card.Title>
                            </Card>
                            <Card style={{ margin: '0 0 0 0' }} className="cards">
                                <Card.Img variant="top" src={Valores} className="fixed-size" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        Respeito por nossos Clientes e Fornecedores.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Title className="text-card text-center">
                                    <strong>
                                        Valores
                                    </strong>
                                </Card.Title>
                            </Card>
                        </CardGroup>
                    </section>
                    <section className="about-section">
                        <div className="mt-5">
                            <div className="text-center">
                                <h4>Sobre nós</h4>
                                <strong>
                                     <p>
                                    Somos apaixonados por tecnologia.
                                    Com este principio criamos a NectarTec, para apoiar nossos clientes em diversas áreas de negócio e automatizar o seu ambiente de trabalho.
                                    Para isso contamos com uma sólida parceria com a melhor consultoria de ERP para agronegócio a Nectar Sistemas.
                                </p>
                                </strong>
                               
                            </div>
                            <div className="mt-4">
                                <h4>Skills</h4>
                                <div className="progress-bar-container">
                                    <ProgressBar animated now={95} label="Implantação de sistemas" className="custom-progress-bar mt-3 mb-3" />
                                    <ProgressBar animated now={90} label="Consultoria e gestão de negócio" className="custom-progress-bar mb-3" />
                                    <ProgressBar animated now={83} label="Desenvolvimento de sistemas" className="custom-progress-bar mb-3" />
                                    <ProgressBar animated now={93} label="Desenvolvimento de dashboards" className="custom-progress-bar mb-3" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container-tertiary max-width mt-5" id="services">
                    <div className="services-container">
                        <div className="title-container">
                            <div className="titile-content">
                                <h1><strong>Onde a NectarTec está atuando</strong></h1>
                                <Button variant="dark" onClick={handleClick} className="button mt-5" style={{ backgroundColor: "#000000", borderRadius: "15px", width: "200px", height: "60px" }}>
                                    Saiba Mais
                                </Button>
                            </div>
                        </div>
                        <div className="list-container">
                            <div className="list-content">
                                <ul>
                                    <li>
                                        <div className="li-content">
                                            <div className="li-title">
                                                <div className="icon">
                                                    <img src={Service1} alt="service1" />
                                                </div>
                                                <div className="text-title">
                                                    <h5 className="mt-2"><strong>Soluções em ERP</strong></h5>
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <div className="p-content mt-1">
                                                    <strong>
                                                        <p>Em parceria com a Nectar Sistemas temos o melhor ERP para agronegócio.</p>
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li-content">
                                            <div className="li-title">
                                                <div className="icon">
                                                    <img src={Service2} alt="service2" />
                                                </div>
                                                <div className="text-title">
                                                    <h5 className="mt-2"><strong>Consultoria e gestão de negócio</strong></h5>
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <div className="p-content m1-1">
                                                    <strong>
                                                        <p>Quer melhorar os seus resultados mas não sabe como? A consultoria em gestão de negócios pode ser uma aliada.</p>
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li-content">
                                            <div className="li-title">
                                                <div className="icon">
                                                    <img src={Service3} alt="service3" />
                                                </div>
                                                <div className="text-title">
                                                    <h5 className="mt-2"><strong>Desenvolvimento de software</strong></h5>
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <div className="p-content m1-1">
                                                    <strong>
                                                         <p>Um conjunto de procedimentos estratégicos e organizados com o propósito de arquitetar, desenvolver e testar o software. Além de prestar manutenção para garantir seu bom funcionamento.</p>
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-tertiary max-width mt-5" id="clients">
                    <div className="container-tertiary--title">
                        <h4>Nossos Parceiros</h4>
                    </div>
                    <section>
                        <nav className="max-width">
                            <ul className="nav-list--projectsLinks">
                                <li className="project">
                                    <a href="https://nectarsistemas.com.br/">
                                        <img src={Client2} alt="" />
                                    </a>
                                </li>
                                <li className="project">
                                    <a href="https://muniztec.com.br/">
                                        <img src={Client3} alt="" />
                                    </a>
                                </li>
                                <li className="project">
                                    <a href="#welcome">
                                        <img src={Client1} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <div className="container-tertiary max-width mt-5 mb-5" id="contact">
                    <div className="contacts-container">
                        <div className="title-container">
                            <div className="titile-content">
                                <h1>Contate-nos</h1>
                                <div className="text-content">
                                    <strong>
                                        <p>Sinta-se a vontade para entrar em contato a qualquer momento. Iremos responder o mais breve possível!</p>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="form mt-4">
                            <form>
                                <div className="name-div">
                                    <input name="name" id="name" type="text" value={userName} onChange={(e) => setName(e.target.value)} className="styled-input mb-3" placeholder=" "/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                
                                <div className="email-div">
                                    <input name="email" id="email" type="text" value={userEmail} onChange={(e) => setEmail(e.target.value)} className="styled-input mb-3" placeholder=" "/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                
                                <div className="message-div">
                                    <textarea name="message" id="message" cols={30} rows={10} maxLength={150} value={userMessage} onChange={(e) => setMessage(e.target.value)} className="styled-textarea" placeholder=" "></textarea>
                                    <label htmlFor="message">Mensagem</label>
                                </div>
                                
                                <Button variant="warning" onClick={callFunction} className="button text-uppercase mt-3" style={{ backgroundColor: "var(--yellow)", borderRadius: "0.313rem", width: "100%", height: "3.75rem" }}>
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main >
        </div>
    )
}