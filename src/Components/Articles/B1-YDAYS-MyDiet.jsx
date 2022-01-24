import Html from "../../assets/img/svg/language-logo/html.svg";
import Css from "../../assets/img/svg/language-logo/css.svg";
import JavaScript from "../../assets/img/svg/language-logo/js.svg";
import Php from "../../assets/img/svg/language-logo/php.svg";
import Laravel from "../../assets/img/svg/language-logo/laravel.svg";
import React from "react";
import Header from "../Header";
import HeaderBg from "../../assets/img/MyDiet.png";

function MyDiet(){
    return(
        <React.Fragment>
        <Header img={HeaderBg} title="MyDiet" subtitle="Présentation du principe des ydays, MyDiet et mon rôle au sein de celle ci."/>
        <div id="singlepost" className="post">
        <span className="date">Ecrit le: 20/06/2021</span>
            <div className="post-content">
                <div>
                    <h4>Principe des Ydays:</h4>
                    <p>
                    Les <a href="https://www.ynov.com/ydays/">Ydays</a>  c'est un concept propre à <a href="https://www.ynov.com/">Ynov</a>. Il consistent à faire participer des étudiants à des start up créées par des étudiants.
                    Ceci permet d'avoir un avant-goût de la vie au sein d'une entreprise avec des tâches à effectuer et rendre, tout en apprenant.
                    Les Ydays permettent aussi à des étudiants de monter leur start-up et potentiellement rentrer dans la vie active 
                    avec une entreprise à un stade plus ou moins avancé. Les Ydays c'est donc fait pour apprendre, obtenir de l'expérience profesionnelle,
                    et innover.
                    <br/>
                    Ces derniers sont aussi une très bonne occasion pour les élèves ayant le souhait de réaliser des projets, leurs ambitions,
                    et manager des petites équipes de sauter le pas et ainsi s'avancer dans la vie active, à l'aide de l'école.
                    <br/>
                    Cependant, dans les Ydays il y a aussi des projets propres à l'école tel que le Bureau des étudiants, le Bureau du service informatique, mais aussi des préparations à des certifications tel que le <a href="https://www.netacad.com/fr/courses/networking/ccna-introduction-networks">CCNA1/2</a>.
                    En conclusion, les Ydays c'est un concept riche de par leur diversité, les compétences, et les valeurs instruites.
                    </p>
                </div>
                <div>
                    <h4>Concept derrière MyDiet, une start-up Ydays:</h4>
                    <p>MyDiet est donc une start-up créée par des étudiants de chez Ynov. Le but est de réaliser un outil pour le suivi de diète 
                    avec l'aide d'une <a href="https://www.instagram.com/mydiet_moussier/">diététicienne</a>, et permettre aux personnes de suivre leur plan nutrionnel, non aux calories près, 
                    mais au nombre d'aliments glucidiques, protéinés etc... ingérés dans la journée.
                    </p>
                </div>
                <div>
                    <h4>Pourquoi avoir choisi ce projet?</h4>
                    <p>J'ai choisi ce projet pour ma première année car je me suis mis au sport de manière régulière en essayant de suivre au maximum ma nutrition.
                        Or, ceci n'est pas forcément facile en tant que débutant, et je me suis donc penché sur le concept de MyDiet. Ce dernier me paraissait tout à fait réalisable,
                        mais surtout, qui s'adressait et s'adresse à tout le monde, sans trop de restrictions, tel que le fait de compter chaques calories ingérées. 
                        Pour l'avoir déjà fait ceci est un travail très fastidieux. Heureusement, une application que j'apprécie aussi beaucoup de par son concept et est un concurrent direct à MyDiet 
                        <a href="https://www.foodvisor.io/fr/">FoodVisor</a>. Le TripAdvisor de la nourriture. "Est-ce que MyDiet saura se démarquer par rapport à ce géant?" me-suis je demandé avant de m'engager dans ce projet,
                        la réponse est "Non, je ne pense pas, mais pourquoi pas?". Et me voilà donc à écrire mon article de blog racontant cette expérience enrichissante. 
                    </p>
                </div>
                <div>
                    <h4>Technologies utilisées:</h4>
                    <div id="language-container" className="d-flex flex-wrap justify-content-center">
                            <img className="col-1" src={Html} title="Html5, langage front end" alt="Logo HTML5"/>
                            <img className="col-1" src={Css} title="CSS3, langage front end" alt="Logo CSS3"/>
                            <img className="col-1" src={JavaScript} title="JavaScript, langage back/front end" alt="Logo javascript"/>
                            <img className="col-1" src={Php} title="Php, langage back-end" alt="Logo PHP"/>
                            <img className="col-1" src={Laravel} title="Laravel8, framework PHP" alt="Logo Laravel"/>   
                    </div>
                    <p>
                    Ces Ydays m'ont donc permis de m'améliorer sur les technologie web front-end mais surtout de m'initier au PHP,
                    même si c'était avec en plus le framework laravel. J'ai donc appris le PHP mélangé au blade ce qui peut être à la fois considéré comme une erreur ou un bienfait. 
                    Dans un sens, j'aurais préféré apprendre le PHP sans surcouche, cependant m'être sensibilisé aux frameworks web avec l'architecture MVC m'a beaucoup plus et appris beaucoup de choses. 
                    La tâche était certes plus ardue, mais je suis satifait de ce que j'ai pu réaliser.
                    </p>
                </div>
                    <div>
                        <h4>Tâches effectuées au sein de la start-up:</h4>
                        <ul>
                            <li>Mise en place du responsive sur les pages du site web.</li>
                            <li>Installation de Cron sur Laravel.</li>
                            <li>Création de graphiques sur Laravel ( à l'aide du chef de projet ).</li>
                            <li>CSS de la maquette des PDF de recettes.</li>
                        </ul>
                        <p>
                        D'un point de vue technique, le plus compliqué a été je pense de réussir à reproduire le fonctionnement de la caractéristiques de box model <a href="https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a>.
                        J'ai du faire cela car le plugin de génération PDF sur le framework Laravel était trop ancien pour supporter la version de CSS implémentant Flexbox.
                        Ce retour aux bases était cependant très intéréssant! (mais ce n'est pas pour autant que je m'y replongerais)
                        </p>
                    </div>
                    <div>
                            <h4>Expérience acquise:</h4>
                            <ul>
                                <li>Fonctionnement basique d'un framework PHP ( <a href="https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur">Architecure MVC</a> ).</li>
                                <li>Utilisation basique du DevTools.</li>
                                <li>Concept des méthodes POST et GET.</li>
                                <li>Coordination dans les tâches en équipe avec GIT, Trello mais aussi avec les moyens de communications Teams/Discord. </li>
                            </ul>
                            <p>
                            Autre que d'un point de vue technique, j'ai réellement pu acquérir une pseudo expérience professionnelle en travaillant en groupe avec des étudiants de niveau, 
                            mais aussi de pôles différents. Ceci m'a amené à devoir m'adapter à leurs termes, m'instruire sur des notions de niveau supérieur au mien, et ainsi grandir socialement et technniquement parlant plus vite.
                            Les Ydays démontrent à quels points le travail en équipe bien réalisé peut-être bénéfique pour tout le monde. Tout le monde car j'ai pu apprendre, et ainsi les aider, et non être un poids durant l'année.
                            </p>
                    </div>
                    <div>
                        <h4>Mon avis sur les Ydays au sein de MyDiet:</h4>
                        <p>
                            Ceci était ma première expérience Ydays et je n'en suis pas décu. En effet, le concept est accrocheur et bien réalisé (chez MyDiet tout du moins).
                            Le chef de projet était très présent pour aider, assigner les tâches, et faire attention à ce qu'il y ait une bonne entente et coordination.
                            Je n'ai pas forcément beaucou appris techniquement bien que j'ai trouvé très intéréssant le peu que j'ai appris. 
                            Je pense que ceci me servira d'ailleurs dans les prochaines années nottamment l'architecture Model View Controller.
                            Cependant, voir des étudiants plus expérimentés dans le domaine coder, chercher devant moi était une expérience très enrichissante.
                            Essayer de comprendre des concepts pas forcément accessibles aux premiers années permet aussi de faire relativiser sur la difficulté de l'année de Bachelor1.
                            <br/>
                            <br/>
                            Pour conclure, que ce soit techniquement ou d'un point de vue expérience "professionnelle", je suis très satisfait de cette année chez MyDiet.
                        </p>
                    </div>
            </div>  
        </div>
        </React.Fragment>
    )
}

export default MyDiet