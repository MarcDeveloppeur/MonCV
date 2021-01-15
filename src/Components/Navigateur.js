import React from 'react';
import {Link} from 'react-router-dom';
import './ComponentCss/Navigateur.css';

function Navigateur() {
  return (
    <div className="NavConteneur">
    <div className="headerNav">
       <img src="./assets/Koala.jpg" alt="image profil" className="profileImg"/>
       <Link className="lien" to='/' ActiveClassName="ActiveLink"><i className="fa fa-home fa-fw fa-lg icones"></i><span className="linkName">Acceuil</span></Link>
       <Link className="lien" to='/competence'><i className="fa fa-gavel fa-fw fa-lg icones"></i><span className="linkName">Mes competences</span></Link>
       <Link className="lien" to='/porfolio'><i className="fa fa-wrench fa-fw fa-lg icones"></i><span className="linkName">Porfolio</span></Link>
       <Link className="lien" to='/contact'><i className="fa fa-id-card fa-fw fa-lg icones"></i><span className="linkName">Contact</span></Link>
    </div>
    <div>
       <div className="social-block">
       <a href="www.Facebook.com" target="_blank" rel="noopener norefferer"><img src="./assets/icones/Facebook.png" className="social_icones" alt="facebook link"/></a>
       <a href="www.twitter.com" target="_blank" rel="noopener norefferer"><img src="./assets/icones/Twitter.png" className="social_icones" alt="twitter link"/></a>
       <a href="www.whatsapp.com" target="_blank" rel="noopener norefferer"><img src="./assets/icones/Whatsapp.png" className="social_icones" alt="whatsapp link"/></a>
    </div>
       </div>
    </div>
  );
}

export default Navigateur;
