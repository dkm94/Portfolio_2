import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Contact.css";
import mailgo from "mailgo";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Gmail from "../../img/gmail.png";
import CV from "../../img/cv.png";

const Contact = () => {

    return(
        <Router>
            <div className="contact">
                <h2>En savoir plus</h2>
                <div className="contact-list">
                    <Link to={{ pathname: "https://www.linkedin.com/in/diane-mpk/"}}> <img src={LinkedIn} alt="LinkedIn"/></Link>
                    <Link to={{ pathname: "https://github.com/dkm94"}} target="_blank"><img src={Github} alt="Github"/></Link>
                    <img src={Gmail} alt="Gmail"/>
                    <Link to="/Documents/CV_Dev_web_MPACKO_Diane.pdf" target="_blank" download ><img src={CV} alt="Télécharger mon CV"/></Link>
                </div>
            </div>
        </Router>
    )
}

export default Contact