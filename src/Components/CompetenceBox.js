import React from 'react';
import "./ComponentCss/CompetenceBox.css";

const CompetenceBox=(props)=>{



   return(
     <div className="block">
       <div className="blockTitle">
         <h1 className="BoxTitle">{props.title}</h1>
      </div>
         <div className="competenceList">
             {props.data.map((language,id)=><p key={id}>{language}</p>)}
         </div>
    </div>
  );
}

export default CompetenceBox;
