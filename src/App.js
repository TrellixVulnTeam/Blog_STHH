// CSS import 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Layout.scss';
import './assets/css/Articles.scss';
import './assets/css/Accueil.scss';
// JS import 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/js/Layout.js'
import $ from 'jquery';
import Popper from 'popper.js';
// COMPONENTS import 
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Apropos from './Components/Apropos';
import Footer from './Components/Footer';
// Articles
import Clonernews from './Components/Articles/B1-Clonernews';
import MyDiet from './Components/Articles/B1-YDAYS-MyDiet';
import Modublo from './Components/Articles/B2-YDAYS-Modublo';
import ModubloPerso from './Components/Articles/PERSO-Modublo';
import ProjetForum from  './Components/Articles/B1-ProjetForum';
import ServeurApache from './Components/Articles/B1-ServeurApache';
import Synchrinet from './Components/Articles/B2-STAGE-Synchrinet';
import BlogReactSass from './Components/Articles/PERSO-BlogReactSass';
import Librairie from './Components/Articles/B2-Librairie';
import Ecommerce from './Components/Articles/B2-Ecommerce';
import EwsAngola from './Components/Articles/B1-STAGE-EwsAngola';
import GroupieTracker from './Components/Articles/B1-GroupieTracker';
// React import
import React from 'react';
import { Routes, Route} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Accueil" element={<Home />}/>         
          <Route path="/Blog" element={<Blog />}/>
          {/* Routes articles blog */}
          <Route path="/Blog/Clonernews" element={<Clonernews />}/>
          <Route path="/Blog/Modublo" element={<Modublo />}/>
          <Route path="/Blog/MyDiet" element={<MyDiet />}/>
          <Route path="/Blog/ProjetForum" element={<ProjetForum />}/>
          <Route path="/Blog/ServeurApache" element={<ServeurApache />}/>
          <Route path="/Blog/EwsAngola" element={<EwsAngola />}/>
          <Route path="/Blog/Ecommerce" element={<Ecommerce />}/>
          <Route path="/Blog/Librairie" element={<Librairie />}/>
          <Route path="/Blog/Synchrinet" element={<Synchrinet />}/>
          <Route path="/Blog/ModubloPerso" element={<ModubloPerso />}/>
          <Route path="/Blog/BlogReactSass" element={<BlogReactSass />}/>
          <Route path="/Blog/GroupieTracker" element={<GroupieTracker />}/>
          {/* Fin route articles */}
          <Route path="/Apropos" element={<Apropos />}/>
          <Route path="/Contact" element={<Contact />}/>
       
        </Routes>
      
        <hr/>

        <Footer/>
          
    </div>
   
  );
}

export default App;
