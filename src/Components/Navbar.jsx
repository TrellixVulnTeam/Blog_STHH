import React from "react"

function Navbar(){
    return (
        <React.Fragment>
            {/* <!-- navbar desktop --> */}
            <nav id="navbar">
                <ul id="navbar-links">
                    <li><a href="/Accueil">Accueil</a></li>
                    <li><a href="/Blog">Blog</a></li>
                    <li><a href="/Apropos">A propos</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
                <div id="logo-container">
                    <span className="logo" id="github">
                        <a href="https://github.com/antoine13330">
                            <i className="fab fa-github" title="Mon Github"></i>
                        </a>
                    </span>
                    <span className="logo" id="linked-in">
                        <a href="https://www.linkedin.com/in/antoine-despres-13330/">
                            <i className="fab fa-linkedin" title="Mon LinkedIn"></i>
                        </a>
                    </span>
                    <span className="logo" id="instagram">
                        <a href="https://www.instagram.com/antwaneuh_dprs/">
                            <i className="fab fa-instagram" title="Mon Instagram"></i>
                        </a>
                    </span>
                    <span className="logo" id="gmail">
                        <a href="mailto:antoinedespres13@gmail.com">
                            <i className="fas fa-envelope" title="Mon Adresse mail"></i>
                        </a>
                    </span>
                    
                </div>

                
            </nav>

            {/* <!-- navbar mobile --> */}
            <nav id="navbar-responsiv">
                <ul className="semi-menu">
                    <li><a href="/Accueil"><i className="fas fa-home"></i></a></li>
                    <li><a href="/Blog"><i className="fas fa-newspaper"></i></a></li>
                </ul>
                <div id="burger-button" data-open="0">
                    <span id="first-span"></span>
                    <span id="second-span"></span>
                    <span id="third-span"></span>
                </div>
                <ul className="semi-menu">
                    <li><a href="/Apropos"><i className="fas fa-user-alt"></i></a></li>
                    <li><a href="/Contact"><i className="fas fa-phone"></i></a></li>
                </ul>
            </nav>

            <div id="logo-container-responsiv">
                    <span className="logo" id="r-github">
                        <a href="https://github.com/antoine13330">
                            <i className="fab fa-github" title="Mon Github"></i>
                        </a>
                    </span>
                    <span className="logo" id="r-linked-in">
                        <a href="https://www.linkedin.com/in/antoine-despres-13330/">
                            <i className="fab fa-linkedin" title="Mon LinkedIn"></i>
                        </a>
                    </span>
                    <span className="logo" id="r-instagram">
                        <a href="https://www.instagram.com/antwaneuh_dprs/">
                            <i className="fab fa-instagram" title="Mon Instagram"></i>
                        </a>
                    </span>
                    <span className="logo" id="r-gmail">
                        <a href="mailto:antoinedespres13@gmail.com">
                            <i className="fas fa-envelope" title="Mon Adresse mail"></i>
                        </a>
                    </span>
                    
                </div>
        </React.Fragment>
    )
}


export default Navbar