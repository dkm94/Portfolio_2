import React from "react";
import "./Présentation.css";
import image from "../../img/Flipped_Cards/introduction.jpg"

const FlippedCDV = () => {

    return(
        <div className="flipped-cvd flip-card-front">
            <img alt="" src={image}/>
        </div>
    )
}

export default FlippedCDV;