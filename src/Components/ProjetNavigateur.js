import React from 'react';
import"./ComponentCss/ProjetNavigateur.css";
import {Link} from 'react-router-dom';

function ProjetNavigateur() {
  return (
    <div className="ProjetNavConteneur">
        <Link to="/cssProjet" className="Menu" >Projet Css</Link>
        <Link to="/reactProjet" className="Menu">Projet React</Link>
        <Link to="/nodeProjet" className="Menu">Projet NodeJs</Link>
        <Link to="/fullstackProjet" className="Menu">Projet fullstack MERN</Link>
    </div>
  );
}

export default ProjetNavigateur;
