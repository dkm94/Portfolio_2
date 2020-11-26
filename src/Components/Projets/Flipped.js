import React from "react";
import "./Projets.css";
import image from "../../img/Flipped_Cards/projets.jpg"

const FlippedProjects = () => {

    return(
        <div className="flipped flip-card-front">
            <img alt="" src={image}/>
        </div>
    )
}

export default FlippedProjects;