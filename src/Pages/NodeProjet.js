import React from 'react';
import Navigateur from '../Components/Navigateur';
import ProjetNavigateur from '../Components/ProjetNavigateur';
import ProjectBox from '../Components/ProjectBox';

const data=[
  {
    title:"Créer une API REST avec MongoDB",
    imageSrc:'./assets/projet.jpg',
    description:"Ce projet consiste a développer une API qui va permettre d\'ajouter,de supprimer,et de mettre à jours la base de données.Il a été réalisé avec express et mongoDB"
  },
  {
    title:"Créer une API REST avec MongoDB et un système d'authentification",
    imageSrc:'./assets/projet.jpg',
    description:"Créer une API REST avec Express et MongoDB mais cette fois ci avec une système d'authentification avec Json Web Tokken. Et un gestion d\'utilisateur en cryptant ses mots de passe avec Crypto"
  },
  {
    title:"Créer une API REST avec MyQL",
    imageSrc:'./assets/projet.jpg',
    description:"Développer une API avec Une base de donnée MySql Avec ExpressJs et Siquelize "
  },
  {
    title:"Créer une API pour Uploader des images",
    imageSrc:'./assets/projet.jpg',
    description:"Développer une API avec ExpressJs et Multer pour uploader des fichiers images dans MongoDB "
  },
]

function NodeProjet() {
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

export default NodeProjet;
