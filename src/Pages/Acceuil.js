import React from 'react';
import Navigateur from '../Components/Navigateur';
import "./PageCss/GlobalCss.css";
import "./PageCss/Acceuil.css";


function Acceuil() {
  return (
    <div className="Conteneur">
    <Navigateur/>
    <div className="pageContainer">
        <h1 className="homeHeader">Marc RAMADISON</h1>
        <p>Je suis un dévelopeur web fullstack. J'ai eu mon diplome de licence à la CENTRE NATIONAL DE TELE-ENSEIGNEMENT DE MADEGASCAR.
        Je suis passionné des nouvelles techonologies surtout le développement web et mobile.</p>
        <div className="downloadLink">
          <a href="./assets/CV.pdf" target="_blank">Télécharger Le CV en version PDF</a>
        </div>
    </div>
    </div>
  );
}

export default Acceuil;
