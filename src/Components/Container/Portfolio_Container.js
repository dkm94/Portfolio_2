import React from 'react';
import "./Portfolio_Container.css";
import photo from "../../img/photoID.png";
import CarteDeVisite from "../Carte_de_visite/Carte_de_visite";
import FlippedIntroduction from "../Présentation/Flipped";
import Introduction from "../Présentation/Présentation";
import Technos from "../Technos/Technos";
import Projets from "../Projets/Projets";
import FlippedProjects from "../Projets/Flipped";
import SoftSkills from "../Soft_skills/Soft_skills";
import Certifications from "../Certifications/Certifications";


const Portfolio_Container = () => {

    return (
        <div className="portfolio-container grid-container" >
            <div className="grid-item item1" >
                <img alt="" src={photo}></img>
            </div>
            {/* <div className="flip-card"> */}
                <div className="grid-item item2 center-x" >
                    {/* <FlippedIntroduction /> */}
                    <Introduction />
                </div>
            {/* </div> */}
            {/* <div className="flip-card"> */}
                <div className="grid-item item3 center-x" >
                    {/* <FlippedProjects /> */}
                    <Projets />
                </div>  
            {/* </div> */}
            <div className="grid-item item4 center-x " >
                <CarteDeVisite />
            </div>
            <div className="grid-item item5 center-x">
                <Technos />
            </div>
            <div className="grid-item item6 center-x" >
                <SoftSkills />
            </div>
            <div className="grid-item item7 center-x" >
                <Certifications />
            </div>
        </div>
    )
}

export default Portfolio_Container