// React import 
import React from "react";
import {Link} from 'react-router-dom';
// all preview img
import Modublo from '../assets/img/Modublo.jpg';
import ModubloPerso from '../assets/img/ModubloPerso.jpg';
import Clonernews from '../assets/img/clonernews.png';
import ProjetForum from '../assets/img/projet-forum.png';
import GroupieTracker from '../assets/img/groupietracker.png';
import MyDiet from '../assets/img/MyDiet.png';
import Apache from '../assets/img/Apache.png';
import Ews from '../assets/img/Ews.png';
import BlogReact from '../assets/img/Blogreact.png';
import Synchrinet from '../assets/img/Synchrinet.png';
import Ecommerce from '../assets/img/Ecommerce.png';
import Librairie from '../assets/img/Librairie.jpg';
// js import
function AllArticles(){
    return (
        // mettre la categorie avec la classe card => B1 card
    <React.Fragment>
        <div id="filtre-container">
            <span>Voir:</span>
            <div id="filtre">
                <span className="filtre-element">
                    <label>B1</label>
                    <input type="Checkbox" onChange={() => {
                        filterArticles()
                    }} value="B1" name="B1" />
                </span>
                <span className="filtre-element">
                    <label >B2</label>
                    <input type="Checkbox" onChange={() => {
                        filterArticles()
                    }} value="B2" name="B2" />
                </span>
                <span className="filtre-element">
                    <label>Stage</label>
                    <input type="Checkbox" onChange={() => {
                        filterArticles()
                    }} value="STAGE" name="Stage"/>
                </span>
                <span className="filtre-element">
                    <label>Ydays</label>
                    <input type="Checkbox" onChange={() => {
                        filterArticles()
                    }} value="YDAYS" name="Ydays"/>
                </span>
                <span className="filtre-element">
                    <label>Personnel</label>
                    <input type="Checkbox" onChange={() => {
                        filterArticles()
                    }} value="PERSONNEL" name="Personnel"/>
                </span>
            </div>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
            {/* Clonernews */}
           <div className="B1 card" data-affected="0">
                <img src={Clonernews} className="card-img-top h-50" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">B1 - Clonernews</h5>
                    <p className="card-text">Projet JavaScript de première année consistant à interagir avec l'API "HackerNews".</p>
                    <Link className="btn btn-primary" to="/Blog/Clonernews" >Voir plus</Link>
                </div>
            </div>
      
            {/* MyDiet */}
            <div className="B1 YDAYS card" data-affected="0">
                <img src={MyDiet} className="card-img-top h-50" alt="Logo de MyDiet / Myriam Diet"/>
                <div className="card-body">
                    <h5 className="card-title">B1 - YDAYS - MyDiet</h5>
                    <p className="card-text">Présentation du principe des ydays, MyDiet et mon rôle au sein de celle ci.</p>
                    <Link className="btn btn-primary" to="/Blog/MyDiet" >Voir plus</Link>
                </div>
            </div>
            {/* Serveur apache */}
            <div className="B1 card" data-affected="0">
                <img src={Apache} className="card-img-top h-50" alt="Logo de Apache"/>
                <div className="card-body">
                    <h5 className="card-title">B1 - Serveur Apache</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary" to="/Blog/Clonernews" >Voir plus</Link>
                </div>
            </div>

            {/* Groupie tracker */}
            <div className="B1 card" data-affected="0">
                <img src={GroupieTracker} className="card-img-top h-50" alt="Apercu de groupie tracker"/>
                <div className="card-body">
                    <h5 className="card-title">B1 - Groupie Tracker</h5>
                    <p className="card-text">Projet Golang/Javascript visant à interragir avec une API en Golang et afficher des informations sur divers artistes musicaux.</p>
                    <Link className="btn btn-primary" to="/Blog/GroupieTracker" >Voir plus</Link>
                </div>
            </div>

            
            {/* Ews Angola */}
            <div className="B1 card" data-affected="0">
                <img src={Ews} className="card-img-top h-50" alt="Logo de l'entreprise EWS Angola"/>
                <div className="card-body">
                    <h5 className="card-title">B1 - Stage - EWS Angola</h5>
                    <p className="card-text">Dans cet article vous aurez cette fois-ci l'aspect plus personnel et dissocié des Ydays concernant Modublo. Si j'ai su captivé votre attention dans l'<Link  to="Blog/Modublo">article de Modublo associé aux Ydays</Link>, vous adorerez celui-ci.</p>
                    <Link className="btn btn-primary" to="/Blog/ModubloPerso" >Voir plus</Link>
                </div>
            </div>
            {/* Projet forum */}
            <div className="B1 card" data-affected="0">
                <img src={ProjetForum} className="card-img-top h-50" alt="Apercu de mon projet forum"/>
                <div className="card-body">
                    <h5 className="card-title">B1 - Projet Forum</h5>
                    <p className="card-text">Projet final de première année. Réalisation d'un forum en Golang.</p>
                    <Link className="btn btn-primary" to="/Blog/ProjetForum" >Voir plus</Link>
                </div>
            </div>
            

                  {/* Modublo */}
                  <div className="B2 YDAYS card" data-affected="0">
                <img src={Modublo} className="card-img-top h-50" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">B2 - YDAYS - Modublo </h5>
                    <p className="card-text">Co - Gestionnaire/Fondateur d'une start au sein des Ydays, vous y découvrirez la start-up en elle même et mon rôle au sein de cette dernière.</p>
                    <Link className="btn btn-primary" to="/Blog/Modublo">Voir plus</Link>
                </div>
            </div>
            {/* Librairie */}
            <div className="B2 card" data-affected="0">
                <img src={Librairie} className="card-img-top h-50" alt="Apercue de la librairie réalisée en C#"/>
                <div className="card-body">
                    <h5 className="card-title">B2 - Librairie</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary" to="/Blog/Librairie" >Voir plus</Link>
                </div>
            </div>
            {/* Synchrinet */}
            <div className="B2 STAGE card" data-affected="0">
                <img src={Synchrinet} className="card-img-top h-50" alt="Apercu de Synchrinet"/>
                <div className="card-body">
                    <h5 className="card-title">B2 - STAGE - Synchrinet</h5>
                    <p className="card-text">Contenu de mon stage de deuxième année réalisé en binôme dans l'optique de réaliser un interface administrateur d'ajout de produits.</p>
                    <Link className="btn btn-primary" to="/Blog/Synchrinet" >Voir plus</Link>
                </div>
            </div>
            {/* Ecommerce */} 
            <div className="B2 card" data-affected="0">
                <img src={Ecommerce} className="card-img-top h-50" alt="dessin ecommerce"/>
                <div className="card-body">
                    <h5 className="card-title">B2 - Ecommerce</h5>
                    <p className="card-text">Article dédié au site sur lequel vous lisez cet article. Première utilisation de React et SASS pour ma part dans ce blog, vous apprendez la construction de ce dernier.</p>
                    <Link className="btn btn-primary" to="/Blog/ModubloPerso" >Voir plus</Link>
                </div>
            </div>
              {/* Modublo perso */}
                <div className="PERSONNEL card" data-affected="0">
                    <img src={ModubloPerso} className="card-img-top h-50" alt="Logo de la start-up Modublo"/>
                    <div className="card-body">
                        <h5 className="card-title">PERSONNEL - Modublo</h5>
                        <p className="card-text">Dans cet article vous aurez cette fois-ci l'aspect plus personnel et dissocié des Ydays concernant Modublo. Si j'ai su captiver votre attention dans l'<Link  to="/Blog/Modublo">article de Modublo associé aux Ydays</Link>, vous adorerez celui-ci.</p>
                        <Link className="btn btn-primary" to="/Blog/ModubloPerso" >Voir plus</Link>
                    </div>
                </div>

              {/* Blog React Sass */}
              <div className="PERSONNEL card" data-affected="0">
                <img src={BlogReact} className="card-img-top h-50" alt="Crayon de papier et carnet avec logo react et sass"/>
                <div className="card-body">
                    <h5 className="card-title">PERSONNEL - Blog en React et Sass</h5>
                    <p className="card-text">Article dédié au site sur lequel vous lisez cet article. Première utilisation de React et SASS pour ma part dans ce blog, vous apprendez la construction de ce dernier.</p>
                    <Link className="btn btn-primary" to="/Blog/ModubloPerso" >Voir plus</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}



var checkboxElems;

function filterArticles(){
    const actualCheckedValue = getCheckedValue();
    const allcard = document.querySelectorAll('.card');
    console.log(allcard)
    allcard.forEach(x =>{
        const cardClassList = x.classList;
        const arrayClass = [];
        cardClassList.forEach(classN =>{
            arrayClass.push(classN)
        });
        actualCheckedValue.forEach(value => {
            if (arrayClass.includes(value) && x.dataset.affected === "0" ){
                x.style.display = "flex";
                x.dataset.affected = "1"
            }
        });
        if (x.dataset.affected === "0"){
            x.style.display = "none";
        } else {
            x.dataset.affected = "0";
        }
    });
}




function getCheckedValue(){
    var checkedValue = [];
    checkboxElems = document.querySelectorAll("input[type='checkbox']");
    checkboxElems.forEach(element => {

        if (element.checked === true ) {
            checkedValue.push(element.value);
        } else {
            if (checkedValue.includes(element.value)){
                console.log(checkedValue.filter(function(value){
                    return value !== element.value;
                }));
            }
        }
    });
    return checkedValue
}


export default AllArticles