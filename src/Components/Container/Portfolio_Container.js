import React, { useState } from 'react';
import "./Portfolio_Container.css";
import photo from "../../img/photoID.png";
import CarteDeVisite from "../Carte_de_visite/Carte_de_visite";
import Introduction from "../Présentation/Présentation";
import Technos from "../Technos/Technos";
import Projets from "../Projets/Projets";

export default function Portfolio_Container() {

    // const [visible, setVisible] = useState(true);
    // const style = {
    //     display: visible ? "display" : "flex",
    //     animation: visible ? "fadeIn" : "ease 5.7s", 
    // }

    // window.addEventListener("load", function(event) {
    //     setTimeout(() => {
    //         setVisible()
    //     }, 3000)
    //     console.log("Toutes les ressources sont chargées !");
    //   });
    
    return (
        <div className="portfolio-container grid-container" >
            <div className="grid-item item1" >
                <img alt="" src={photo}></img>
            </div>
            <div className="grid-item item2 center-x" >
                <Introduction />
            </div>
            <div className="grid-item item3" >
                <Projets />
            </div>  
            <div className="grid-item item4 center-x " >
                <CarteDeVisite />
            </div>
            <div className="grid-item item5 center-x">
                <Technos />
            </div>
            <div className="grid-item item6" >6</div>
            <div className="grid-item item7" >7</div>
        </div>
    )
}
