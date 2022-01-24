import React from "react";
import Header from "../Header";
import Template from "../../assets/img/Groupie-template.png";
import HeaderBg from "../../assets/img/groupietracker.png";
import Golang from "../../assets/img/svg/language-logo/golang.svg";
import Html from "../../assets/img/svg/language-logo/html.svg";
import Css from "../../assets/img/svg/language-logo/css.svg";
import JavaScript from "../../assets/img/svg/language-logo/js.svg";

function GroupieTracker(){
    return(
        <React.Fragment>
        <Header img={HeaderBg} title="Groupie Tracker" subtitle="Projet Golang/Javascript visant à interragir avec une API en Golang et afficher des informations sur divers artistes musicaux."/>
        <div id="singlepost" className="post">
        <span className="date">Ecrit le: 20/06/2021</span>
        <div className="post-content">
                    <div>
                    <h4>But de groupie-tracker:</h4>
                    <p>Créer un interface utilisateur afin de faire le lien entre les données envoyées par l'<a href="https://groupietrackers.herokuapp.com/api">API groupie tracker</a> et le client. 
                    Les données envoyées permettent de référencer un certain nombre d'artistes, 
                    leurs informations et les dates des concerts passés ou à venir ainsi que leur localisation.</p>
                    </div>
                    <div>
                        <h4>Langages utilisés:</h4>
                        <div id="language-container" className="d-flex flex-wrap justify-content-center">
                            <img className="col-1" src={Html} title="Html5, langage front end" alt="Logo HTML5"/>
                            <img className="col-1" src={Css} title="CSS3, langage front end" alt="Logo CSS3"/>
                            <img className="col-1" src={JavaScript} title="JavaScript, langage back/front end" alt="Logo javascript"/>
                            <img className="col-1" src={Golang} title="Golang, langage back-end" alt="Logo Golang"/>
                        </div>
                        <p>
                        Ce projet était avant tout fait pour nous faire travailler sur les langages JavaScript/Golang. Avec mon binôme, nous avons donc pris l'initiative de répartir 
                        le projet en deux parties. La partie Go, et la partie JS. Ceci nous a permis de travailler de manière beaucoup plus efficace, et comme vous pourrez le voir dans "Expérience acquise",
                        voir au-delà de ses fonctionnalités seulement.
                        </p>
                    </div>
                    <div>
                        <h4>Expérience acquise:</h4>
                        <ul>
                            <li>Utilisation des templates en golang.</li>
                            <li>Meilleure utilisation et connaissance du GO</li>
                            <li>Travail en binôme</li>
                        </ul>
                        <p>
                            Comme dit au-dessus, ce projet a permis d'acquérir plus d'expérience dans le travail en binôme. En effet, en découpant les deux parties principales mais liées du projet,
                            nous avons du réfléchir à l'implémentation de nos fonctionnalités en se mettant à la place de l'autre. Effectivement, il est relativement facile de faire une fonctionnalité 
                            de A à Z sur ce type de projet. Or, étant donné que tout le monde est différent, il fallait imaginer la réalisation de manière la plus compréhensible possible pour l'autre partie.
                            Par exemple, en réalisant les templates en Golang, je devais prévoir quelles informations passer du serveur à la page web afin que mon binôme puisse réailser sa partie. 
                            En l'occurence, je récupérais toutes les informations provenant d'une <a href="https://www.journaldunet.fr/web-tech/dictionnaire-du-webmastering/1203559-api-interface-de-programmation-definition-technos-exemples/">API</a>, 
                            et me devait donc de les lui transmettre dans la structure adéquates et aux bons endroits.
                            <br/><img src={Template} alt="Exemple de template avec golang"/>
                        </p>
                    </div>
                    <div>
                        <h4>Mes pensées sur ce projet:</h4>
                        <p>
                            Ce projet n'était pas forcément compliqué à réaliser et agréable à faire en tout cas.
                            En effet nous avons pu choisir nos groupes et mon binôme et moi avons bien communiqué, avons eu une 
                            bonne coordination et répartition des tâches. Ceci nous a permis de faire le travail correctement et rapidement.
                            Il était relativement instructif concernant le golang, cependant, je n'ai pas appris grand-chose autre.
                        </p>
                    </div>
            </div>  
            </div>
            </React.Fragment>
    )
}

export default GroupieTracker