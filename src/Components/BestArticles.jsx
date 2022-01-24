import ModubloImg from '../assets/img/Modublo.jpg';
import ProjetForumImg from '../assets/img/projet-forum.png';
import ClonernewsImg from '../assets/img/clonernews.png';
import { Link } from 'react-router-dom';

function BestArticles(){
    return(
        
       
        <section id="best-articles">
                <h3>Best articles</h3>
                <a id="best-articles-link" href="#best-articles">
                    <span id="floating-arrow"></span>
                </a>
                {/* <!-- 1 --> */}
                <Link to="/Blog/Clonernews">
                    <div className="article-preview">
                        <div className="image-preview">
                            <img className="image-preview-img" src={ClonernewsImg}/>
                        </div>  
                        <div className="content-preview" title="Voir plus">
                            <h4>Clonernews</h4>
                        </div>
                    </div>
                </Link>
                {/* <!-- 2 --> */}
                <Link to="/Blog/Modublo">
                <div className="article-preview">
                    <div className="image-preview">
                        <img className="image-preview-img" src={ModubloImg}/>
                    </div>  
                    <div className="content-preview" title="Voir plus">
                        <h4>Modublo (Ydays)</h4>
                    </div>
                </div>
                </Link>

                
                {/* <!-- 3 --> */}
                <Link to="/Blog/ProjetForum">
                <div className="article-preview">
                    <div className="image-preview">
                        <img className="image-preview-img" src={ProjetForumImg} />
                    </div>  
                    <div className="content-preview" title="Voir plus">
                        <h4>Projet forum</h4>
                    </div>
                </div>
                </Link>
                <a className="seeMore"href="#"><Link to="/Blog">Voir plus</Link></a>
        </section>
        
    )
}


export default BestArticles