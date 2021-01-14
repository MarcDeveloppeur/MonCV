import React from 'react';
import Navigateur from '../Components/Navigateur';
import './PageCss/contact.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ContactPage() {
  return (
    <div className="Conteneur">
        <Navigateur/>
    <div className="pageContainer">
       <div className="contactblock">
            <div className="contactContent">
               <CopyToClipboard text="0345465316" onCopy={()=>alert("Numero téléphone copié")}><div className="contactRow"><i className="fa fa-phone fa-fw fa-lg contactIcones" ></i><span className="contactClass">0345465316</span></div></CopyToClipboard>
               <CopyToClipboard text="marcramadison006@gmail.com" onCopy={()=>alert("Adresse Email copiée")}><div className="contactRow"><i className="fa fa-envelope fa-fw fa-lg contactIcones"></i><span className="contactClass">marcramadison006@gmail.com</span></div></CopyToClipboard>
            </div>
            <div className="socialBlock">
                <div className="socialBox box1"><i className="fab fa-facebook-square fa-fw fa-3x"></i><br/><a href="www.facebook.com" rel="noopener noreferrer">Facebook</a></div>
                <div className="socialBox box2"><i className="fab fa-twitter-square fa-fw fa-3x"></i><br/><a href="www.Twitter.com" rel="noopener noreferrer">Twitter</a></div>
                <div className="socialBox box3"><i className="fab fa-whatsapp-square fa-fw fa-3x"></i><br/><a href="www.Whatsapp.com" rel="noopener noreferrer">Whatsapp</a></div>
            </div>
       </div>
    </div>
    </div>
  );
}

export default ContactPage;
