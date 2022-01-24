import React from 'react';
import HeaderBg from '../../assets/img/clonernews.png';
import Header from '../Header';
import Articles from '../../assets/css/Articles.scss';
import Html from '../../assets/img/svg//language-logo/html.svg';
import Css from '../../assets/img/svg//language-logo/css.svg';
import JavaScript from '../../assets/img/svg/language-logo/js.svg';
function Clonernews(){
    return(
        <React.Fragment>
        <Header img={HeaderBg} title="Clonernews" subtitle="Liaison JavaScript avec API Clonernews"/>
                <div id="singlepost" className="post">
                <span className="date">Ecrit le: 20/06/2021</span>
                <div className="post-content">
                        <div>
                        <h4>ClonerNews c'est quoi?</h4>
                        <p>ClonerNews était un petit projet à réaliser en simultané avec un autre projet sur deux semaines. Le but était de faire le lien entre les données envoyés par l'<a href="https://github.com/HackerNews/API">API de HackerNews</a> et le client. <a href="/post.html">Lien vers ClonerNews</a></p>
                        </div>
                        <div>
                        <h4>Langages utilisés:</h4>
                        <div id="language-container" className="d-flex flex-wrap justify-content-center">
                            <img className="col-1" src={Html} title="Html5, langage front end" alt="Logo HTML5"/>
                            <img className="col-1" src={Css} title="CSS3, langage front end" alt="Logo HTML5"/>
                            <img className="col-1" src={JavaScript} title="JavaScript, langage back/front end" alt="Logo HTML5"/>
                        </div>
                        </div>
                        <div>
                        <h4>Expérience acquise:</h4>
                        <ul>
                            <li>Appronfondissement du travail avec AJAX ( <a href="https://www.ionos.fr/digitalguide/hebergement/aspects-techniques/requete-http/#:~:text=GET%20est%20l%E2%80%99%20%C2%AB%20anc%C3%AAtre%20%C2%BB%20des%20requ%C3%AAtes,Web%20et%20lui%20envoie%20la%20requ%C3%AAte%20GET%20%3A">GET method</a> ).</li>
                            <li>Créer une template réutilisable d'un point de vue design. ( pour les posts, commentaires etc...)</li>
                        </ul>
                        </div>
                        <div>
                        <h4>Mon avis sur le projet:</h4>
                        <p>
                        Le projet était composé de 3 personnes en groupe aléatoire. Personnellement ayant déjà terminé le premier raid, j'ai commencé clonernews avant mes camarades. 
                        Je me suis donc retrouvé à produire 15 points sur 20 dans un groupe de trois, sans remerciements. 
                        Mon avis est donc le suivant sur ce projet, il était certes très instructif d'un point de vue technique et socialement, m'a permis de mieux cerner certaines personnes.
                        De plus, les groupes aléatoires sont très négatifs pour la productivité et il vaut mieux se mettre avec des personnes dont nous connaissons l'aptitude à travailler. 
                        Voila la plus grande lecon que j'ai appris durant ce projet et elle compose mon avis.</p>
                        </div>
                </div>  
            </div>
    </React.Fragment>
    )
}

export default Clonernews