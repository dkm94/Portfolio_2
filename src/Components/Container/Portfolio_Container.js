import React from 'react';
import "./Portfolio_Container.css";
import photo from "../../img/photoID.png";
import CarteDeVisite from "../Carte_de_visite/Carte_de_visite";
import Introduction from "../Présentation/Présentation";
import Technos from "../Technos/Technos";
import Projets from "../Projets/Projets";
import SoftSkills from "../Soft_skills/Soft_skills";
import Certifications from "../Certifications/Certifications";
import Contact from "../Contact/Contact";



const Portfolio_Container = () => {

    return (
        <div className="portfolio-container grid-container">
            <div className="grid-item item1">
                <img alt="" src={photo}></img>
            </div>
            <div className="grid-item item2 center-x" >
                <Introduction />
            </div>
            <div className="grid-item item3 center-x" >
                <Projets />
            </div>  
            <div className="grid-item item4 center-x " >
                <CarteDeVisite />
            </div> 
            <div className="grid-item item5 center-x">
                <Technos />
            </div>
            <div className="grid-item item6 center-x" >
                <Certifications />
            </div>
            <div className="grid-item item7 center-x" >
                <SoftSkills />
            </div>
            <div className="grid-item item8 center-x" >
                <Contact />
            </div>
        </div>
        
    )
}

export default Portfolio_Container