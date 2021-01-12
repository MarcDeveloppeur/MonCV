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
               <CopyToClipboard text="0345465316" onCopy={()=>alert("Numero téléphone copié")}><span className="contactClass">0345465316</span></CopyToClipboard>
               <CopyToClipboard text="marcramadison006@gmail.com" onCopy={()=>alert("Adresse Email copiée")}><span className="contactClass">marcramadison006@gmail.com</span></CopyToClipboard>
            </div>
            <div className="socialBlock">
                <div className="socialBox box1"><img src="./assets/icones/Facebook.png" className="icones"/><br/><a href="www.facebook.com" rel="noopener noreferrer">Facebook</a></div>
                <div className="socialBox box2"><img src="./assets/icones/Twitter.png" className="icones"/><br/><a href="www.Twitter.com" rel="noopener noreferrer">Twitter</a></div>
                <div className="socialBox box3"><img src="./assets/icones/Whatsapp.png" className="icones"/><br/><a href="www.Whatsapp.com" rel="noopener noreferrer">Whatsapp</a></div>
            </div>
       </div>
    </div>
    </div>
  );
}

export default ContactPage;
