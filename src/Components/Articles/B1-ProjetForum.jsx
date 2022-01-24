import React from "react"
import Header from "../Header"
import HeaderBg from "../../assets/img/projet-forum.png";
import Golang from "../../assets/img/svg/language-logo/golang.svg";
import Html from "../../assets/img/svg/language-logo/html.svg";
import Css from "../../assets/img/svg/language-logo/css.svg";
import JavaScript from "../../assets/img/svg/language-logo/js.svg";

function ProjetForum(){
    return(
        <React.Fragment>
                <Header img={HeaderBg} title="Projet Forum" subtitle="Projet final de première année. Réalisation d'un forum en Golang."/>
                <div id="singlepost" className="post">
                <span className="date">Ecrit le: 20/06/2021</span>
                <div className="post-content">
                        <div>
                            <h4>But du projet forum:</h4>
                            <p>Ce projet consistait en 5 semaines de travail intensif dans l'optique de créer un forum.</p>
                        </div>

                        <div>
                            <h4>Langages utilisés:</h4>
                            <div id="language-container" className="d-flex flex-wrap justify-content-center">
                                <img className="col-1" src={Html} title="Html5, langage front end" alt="Logo HTML5"/>
                                <img className="col-1" src={Css} title="CSS3, langage front end" alt="Logo CSS3"/>
                                <img className="col-1" src={JavaScript} title="JavaScript, langage back/front end" alt="Logo javascript"/>
                                <img className="col-1" src={Golang} title="Golang, langage back-end" alt="Logo Golang"/>
                            </div>
                        </div>
                        <div>
                            <h4>Expérience acquise:</h4>
                            <p>
                                <ul>
                                    <li>Travail et coordination en équipe</li>
                                    <li>Documentation du code</li>
                                    <li>Conception de l'architecture d'une base de données</li>
                                    <li>Conception d'une maquette pour le design d'un site web</li>
                                    <li>Meilleure utilisation et connaissance du GO</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <h4>Mes pensées sur ce projet:</h4>
                            <p>
                                Je pense que ce projet a été très bénéfique me concernant, j'ai énormément appris, je me suis bien amusé en le réalisant avec mon collègue.
                                Ce projet parassait infaisable dans le temps imparti et sa liste de fonctionnalités qui n'en finissait pas. 
                                Cependant, j'ai pu relativiser et saurais relativiser dans le futur car c'était au final le faire n'a pas été aussi long et fastidieux que prévu.
                                Certes c'était long, mais le projet n'était pas dur, ce qui nous a permis d'avancer à une bonne allure.
                                <br/><br/>
                                Pour conclure, je suis donc très content de ce projet et espère en faire des similaires dans le futur.
                            </p>
                        </div>
                </div>  
            </div>
        </React.Fragment>
    )
}

export default ProjetForum