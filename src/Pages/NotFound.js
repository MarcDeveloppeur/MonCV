import React from 'react';
import {Link} from 'react-router-dom';
import './PageCss/NotFound.css';

function NotFound() {
  return (
    <div className="notfountContainer">
       <h1>Cette page n'existe pas</h1>
       <Link to="/" className="return">Retourner à la page d'acceuil</Link>

    </div>
  );
}

export default NotFound;
