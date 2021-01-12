import React from 'react';
import Navigateur from '../Components/Navigateur';
import CompetenceBox from '../Components/CompetenceBox';
import "./PageCss/Competence.css";

const datas=[
  {
    title:"Language de programmation",
    data:["Javascript (ES6,ES7,ES8)","HTML5","CSS3","Java","C++","Php"]
  },
  {
    title:"FrameWorks et bibliothèques",
    data:["Reactjs","Nodejs","Expressjs","Socket.io","JQuery/Ajax","BootStrap","QTCreator avec C++"]
  },
  {
    title:"Bases de données",
    data:["MySQL","MongoDB","PostgreSQL","Oracle"]
  },
  {
    title:"CMS",
    data:["WorldPress"]
  },
  {
    title:"Autres outils",
    data:["Windev","Windev Mobile"]
  }
]

function CompetencePage() {
  return (
    <div className="Conteneur">
    <Navigateur/>
    <div className="pageContainer">
         {datas.map((elem,i)=><CompetenceBox key={i} title={elem.title} data={elem.data}/>)}
    </div>
    </div>
  );
}

export default CompetencePage;
