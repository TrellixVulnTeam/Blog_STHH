import Header from "./Header";
import Headerimg from '../assets/img/header-img.jpg';
import BestArticles from './BestArticles';
import MesLanguages from './MesLanguages';
import React from "react";
function Home(){
    return (
        <React.Fragment>
            <Header img={Headerimg} title="Antoine DESPRES" subtitle="Etudiant en 1ere année d'informatique"/>
            <BestArticles/>
            <MesLanguages/> 
        </React.Fragment>
    )
}
export default Home;