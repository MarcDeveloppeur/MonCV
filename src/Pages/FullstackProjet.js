import React from 'react';
import Navigateur from '../Components/Navigateur';
import ProjetNavigateur from '../Components/ProjetNavigateur';
import ProjectBox from '../Components/ProjectBox';

const data=[
  {
    title:"Créer un Todolist avec MongoDB-Express-React-NodeJs",
    imageSrc:'./assets/projet.jpg',
    description:"Créer un interface graphique avec React et une API pour que l'on puisse ajouter, modifier, supprimer un Todo "
  },
  {
    title:"Créer un CRUD acec React et NodeJs",
    imageSrc:'./assets/projet.jpg',
    description:"Ce projet utilise React, Express, NodeJs et MongoDB pour créer un créer un CRUD c'est à dire Create-Read-Update-Delete"
  },
  {
    title:"Créer un TodoList avec React et Redux",
    imageSrc:'./assets/projet.jpg',
    description:"Développer une mini-application avec React et Redux"
  },
  {
    title:"Créer un CRUD acec React et NodeJs avec un système d'authentification",
    imageSrc:'./assets/projet.jpg',
    description:"Créer un CRUD avec MongoDB-Express-React-NodeJs avec un système d'authentification JWT pour le backEnd et avec Rédux pour le frontEnd"
  }
]

function FullstackProjet() {
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

export default FullstackProjet;
