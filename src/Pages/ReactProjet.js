import React from 'react';
import Navigateur from '../Components/Navigateur';
import ProjetNavigateur from '../Components/ProjetNavigateur';
import ProjectBox from '../Components/ProjectBox';

const data=[
  {
    title:"Cloner une application Meteo",
    imageSrc:'./assets/projet.jpg',
    description:"Ce projet a été réalisé avec React pour le frontEnd et OPENWEATHER pour l'API "
  },
  {
    title:"Cloner une application cinema en 1 heure",
    imageSrc:'./assets/projet.jpg',
    description:"Développer avec React en frontEnf et MovieDB pour l'API"
  },
  {
    title:"Créer son CV",
    imageSrc:'./assets/projet.jpg',
    description:"Développer mon CV en React ou les personnes pouront voire mes compétences et les mini-projets que j'ai réalisés "
  }
]

function ReactProjet() {
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

export default ReactProjet;
