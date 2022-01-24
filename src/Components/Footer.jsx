function Footer(){
    return ( 
    <footer className="footer-16371">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
                <a href="#">Antoine DESPRES</a>
            </div>
            <ul className="list-unstyled nav-links mb-5">
                <li><a href="/Accueil">Accueil</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Apropos">A propos</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>

            <div className="social mb-4">
                <h3>Mes réseaux:</h3>
                <ul className="list-unstyled">
                <span className="logo" id="github-f">
                        <a href="https://github.com/antoine13330">
                            <i className="fab fa-github" title="Mon Github"></i>
                        </a>
                    </span>
                    <span className="logo" id="linked-in-f">
                        <a href="https://www.linkedin.com/in/antoine-despres-13330/">
                            <i className="fab fa-linkedin" title="Mon LinkedIn"></i>
                        </a>
                    </span>
                    <span className="logo" id="instagram-f">
                        <a href="https://www.instagram.com/antwaneuh_dprs/">
                            <i className="fab fa-instagram" title="Mon Instagram"></i>
                        </a>
                    </span>
                    <span className="logo" id="gmail-f">
                        <a href="mailto:antoinedespres13@gmail.com">
                            <i className="fas fa-envelope" title="Mon Adresse mail"></i>
                        </a>
                    </span>
                    <span className="logo" id="phone-f">
                        <a href="tel:0781600619">
                            <i className="fas fa-phone" title="Mon numéro de téléphone"></i>
                        </a>
                    </span>
                </ul>
            </div>

            <div className="copyright">
                <p className="mb-0"><small>Copyright © Antoine Despres</small></p>
            </div>


            </div>
        </div>
        </div>
    </footer>
    )
}


export default Footer