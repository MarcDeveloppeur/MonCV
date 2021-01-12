import React from 'react';
import Navigateur from '../Components/Navigateur';
import ProjetNavigateur from '../Components/ProjetNavigateur';
import ProjectBox from '../Components/ProjectBox';

const data=[
  {
    title:"Créer un layover",
    imageSrc:'./assets/projet.jpg',
    description:"Ce projet a été réalisé avec du html5 et du Css3, Le layover permet de faire apparaitre une description avec une annimation "
  },
  {
    title:"DropDown menu",
    imageSrc:'./assets/projet.jpg',
    description:"Ce projet utilise HTML5 et CSS3 pour afficher les sous menu avec du dropdown"
  }
]

function CssProjet() {
  return (
    <div className="Conteneur">
       <Navigateur/>
    <div className="pageContainer">
       <ProjetNavigateur/>
       {data.map((el,id)=><ProjectBox key={id} title={el.title} imageSrc={el.imageSrc} description={el.description}/>)}
    </div>
    </div>
  );
}

export default CssProjet;
