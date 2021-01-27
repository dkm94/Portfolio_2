import React from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";
import data from "../data/tableau_projets"
import PropTypes from "prop-types";

const Card = ({ projet, prev, next }) => {
    // On récupère les objets projets via props puis tous les attributs de l'objet
    const { index, img, status, titre, legende, website, github } = projet;

    return(
        <div className="slide-container" style={{ backgroundImage : `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
            <div className="container">
                <div className="overlay">
                    <div className = "items project-title">
                        <p>{titre}</p>
                    </div>
                    <div className = "items price">
                        <p className="old">{status}</p>
                    </div>
                    <div className = "items price">
                        <p className="new">{legende}</p>
                    </div>
                <div className="items cart">
                    <Button type="button" href={website} target="_blank" className="btn btn-light demo-btn slideshow-btn" disabled={website === ""}>
                    Voir la démo
                    </Button>
                    <Button type="button" href={github} target="_blank" className="btn btn-light slideshow-btn" >
                    Voir le code
                    </Button>
                </div>
                {/* <div className="items prev-next-btns">
                    <Button type="button" className="btn btn-outline-secondary" onClick={prev} disabled={index === 0}>Prec.</Button>
                    <Button type="button" className="btn btn-outline-secondary" onClick={next} disabled={index === data.projets.length-1}>Suiv.</Button>
                </div> */}
                    
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