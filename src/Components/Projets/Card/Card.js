import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ projet }) => {
    // On récupère les objets projets via props puis tous les attributs de l'objet
    const { index, img, status, titre, legende, website, github } = projet;

    return(
        <div>
            <div className="container" style={{ backgroundImage : `url(${img})` }}>
                <div className="overlay">
                    <div id={`card-${index}`} className = "items"></div>
                    <div className = "items project-title">
                        <p>{titre}</p>
                    </div>
                    <div className = "items price">
                    <p className="old">{status}</p>
                    <p className="new">{legende}</p>
                </div>
                <div className="items cart">
                    <button type="button" className="btn btn-light demo-btn slideshow-btn">
                        <a href={website} target="_blank" rel="noopener noreferrer">Voir la démo</a>
                    </button>
                    <button type="button" className="btn btn-light slideshow-btn">
                        <a href={github} target="_blank" rel="noopener noreferrer">Voir le code</a>
                    </button>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

// On s'attend à récupérer Card en tant qu'objet (donc un projet)
Card.propTypes = {
    projets: PropTypes.object
}


export default Card;