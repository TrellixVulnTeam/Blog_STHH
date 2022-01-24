import React from "react";
import "../assets/css/Contact.scss"
import CPLUS from "../assets/img/svg/language-logo/c++.svg";
import CHSARP from "../assets/img/svg/language-logo/csharp.svg";
import CSS from "../assets/img/svg/language-logo/css.svg";
import DOTNET from "../assets/img/svg/language-logo/dotnet.svg";
import GOLANG from "../assets/img/svg/language-logo/golang.svg";
import HTML from "../assets/img/svg/language-logo/html.svg";
import JS from "../assets/img/svg/language-logo/js.svg";
import LARAVEL from "../assets/img/svg/language-logo/laravel.svg";
import PHP from "../assets/img/svg/language-logo/php.svg";
import PYTHON from "../assets/img/svg/language-logo/python.svg";
import REACT from "../assets/img/svg/language-logo/react.svg";
import SASS from "../assets/img/svg/language-logo/sass.svg";
// import Email from "https://smtpjs.com/v3/smtp.js";
function showLanguageModal(){
    const languageChoice = document.getElementById('languageChoice');
    if (languageChoice.dataset.open === "0"){
        languageChoice.style.display = "flex";
        languageChoice.dataset.open = "1";
    } else {
        languageChoice.style.display = "none";
        languageChoice.dataset.open = "0"; 
    }
    
}

function removeLanguage(id){
    document.getElementById(id).remove();
    document.getElementById(id.replace('-copy','')).dataset.added = '0'
    
}

function addLanguage(id){
    const original = document.getElementById(id);
    var to_add = original.cloneNode(true);
    to_add.id += "-copy";
    if (to_add.dataset.added === '0'){
        document.getElementById('languageTarget').appendChild(to_add);
        //document.getElementById(to_add.id).removeEventListener('click', addLanguage());
        document.getElementById(to_add.id).addEventListener('click',function(){removeLanguage(to_add.id)});
        original.dataset.added = '1';
    }  else  {

    }
}

var templateParams = {
    title: 'James',
    message: 'SAUCISSE',
    languages: [],
    email: 'mone:ma$$$$',
    telephone: '04903030'
  };
function getDataSendMail(){
   
    templateParams.title = document.getElementById("Title").value;
    templateParams.message = document.getElementById("Content").value;
    templateParams.email = document.getElementById("Email").value;
    var emailValid = templateParams.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  
    templateParams.telephone = document.getElementById("Telephone").value;
    if (!emailValid){
        document.body.innerHTML +='<div class="alert alert-danger alert-dismissible fade show" style="position:fixed;top:0;left:0;width:100vw;z-index:10;opacity:1;"><strong>Error!</strong> Please submit a valid email adress. Refresh to send a new message.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
        return;
    } else if ( templateParams.title === "" || templateParams.message === ""|| templateParams.email === "" ){
        document.body.innerHTML +='<div class="alert alert-danger alert-dismissible fade show" style="position:fixed;top:0;left:0;width:100vw;z-index:10;opacity:1;"><strong>Error!</strong> Stop playing with the form`s required attribute >:( Refresh to send a new message.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
        return;
    }
    var alllanguages = document.getElementById("languageTarget").children
    for (var x = 0; x < alllanguages.length; x++){ 
        var language = alllanguages[x].id
        templateParams.languages.push(language)
    };
    document.getElementById("Title").value = "";
    document.getElementById("Content").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Telephone").value = "";
    document.getElementById("languageTarget").innerHTML = "";
    document.body.innerHTML +='<div class="alert alert-success alert-dismissible fade show"  style="position:fixed;top:0;left:0;width:100vw;z-index:10;opacity:1;"><strong>Success!</strong> Your message has been sent successfully. Refresh to send a new message.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
    window['sendMail'](templateParams);


}


function Contact(){
    
    return(
        <div id="contact-container">
            <h1>Contact</h1>
            <form target="EmptyWindow">
                    <input id="Title" name="Title" type="text" placeholder='Sujet' required/>
                    <textarea id="Content" name="Content"  placeholder='Message' type={"textarea"}required>                    
                    </textarea>
                    <input  id="Email" name="Email"  placeholder='Email' type={"text"} required/>
                    <input id="Telephone" name="Telephone"  placeholder='Telephone' type={"text"}/>
                    
                <label htmlFor="languageButton">Languages associés au message: </label>
                <span>
                    <i id="languageButton" name="languageButton"className="far fa-plus-square" onClick={showLanguageModal}>
                        <div data-open="0"id="languageChoice">
                            <img onClick={function(){addLanguage("python")}} data-added="0" src={PYTHON}  id='python' alt='python' />
                            <img onClick={function(){addLanguage("c#")}} data-added="0" src={CHSARP}  id='c#' alt='c#' />
                             <img onClick={function(){addLanguage("c++")}} data-added="0" src={CPLUS} id='c++' alt='c++' />
                            <img onClick={function(){addLanguage("dotnet")}} data-added="0" src={DOTNET}  id='dotnet'alt='dotnet' />
                            <img onClick={function(){addLanguage("golang")}} data-added="0" src={GOLANG}  id='golang'alt='golang' />
                            <img onClick={function(){addLanguage("react")}} data-added="0" src={REACT} id='react'alt='react' />
                            <img onClick={function(){addLanguage("js")}} data-added="0" src={JS} id='js'alt='js' />
                            <img onClick={function(){addLanguage("css")}} data-added="0" src={CSS} id='css'alt='css' />
                            <img onClick={function(){addLanguage("html")}} data-added="0" src={HTML} id='html'alt='html' />
                            <img onClick={function(){addLanguage("laravel")}} data-added="0" src={LARAVEL} id='laravel'alt='laravel' />
                            <img onClick={function(){addLanguage("php")}} data-added="0" src={PHP}  id='php'alt='php' />
                            <img onClick={function(){addLanguage("scss")}} data-added="0" src={SASS}  id='scss'alt='scss' />
                        </div>
                    </i>
                    <span id="languageTarget"></span>
                </span>
            </form>
            <button id="submitButton" onClick={getDataSendMail}>Soumettre</button>
        </div>




        
    )
}

export default Contact;