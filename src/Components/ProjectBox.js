import React,{useState} from 'react';
import "./ComponentCss/ProjectBox.css";

const ProjectBox=(props)=>{

   const [modal,setModal]=useState(false);

   const handleClick=()=>{
     setModal(!modal);
   }

   return(

     <div className="ProjectBlock">
    /* {
       let mainBlock=document.querySelector('.pageContainer');
       modal && mainBlock.classList.add('toggleDetail');
     }*/
       <img src={props.imageSrc} alt="image du projet" className="imageBlock"/>
      <div className="description">
             <p className="descriptionText">{props.description}</p><br/>
             <a href="#" rel="noopener noreferrer" onClick={(e)=>{
               e.preventDefault();
               handleClick();
             }} className="detailLink">Voir plus de détail</a>
      </div>
           <h1 className="BoxTitre">{props.title}</h1>
    </div>


  );
}

export default ProjectBox;
