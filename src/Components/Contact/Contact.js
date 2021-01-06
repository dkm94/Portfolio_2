import React, { useState ,useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Contact.css";
import mailgo, { MailgoConfig } from "mailgo";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Gmail from "../../img/gmail.png";
import CV from "../../img/cv.png";

const mailgoConfig: MailgoConfig = {
    dark: false,
    lang: "fr",
    showFooter: false,
};

const Contact = () => {

    useEffect(() => {
        mailgo(mailgoConfig);
      }, []);

    const [visible, setVisible] = useState(true)

    const showTitle = () => {
        setVisible(!visible)
    }

    const show = {
        position: "absolute",
        height: "100%",
        zIndex: "2000",
        top: "0%",
        width: "100%",
        right: "0%",
        backgroundColor: "#f3f3f3"
    }

    const hide = {
        display: "none"
    }

    const full = {
        width: "100%",
        height: "100%"
    }

    return(
        <Router>
            <div onMouseEnter={showTitle} onMouseLeave={showTitle} style={full}>
                <div className="contact" style={{ position: "relative"}}>
                    <h2>En savoir plus</h2>
                    <div className="contact-list">
                        <Link to={{ pathname: "https://www.linkedin.com/in/diane-mpk/"}}> <img src={LinkedIn} alt="LinkedIn"/></Link>
                        <Link to={{ pathname: "https://github.com/dkm94"}} target="_blank"><img src={Github} alt="Github"/></Link>
                        <a
                        className="App-link"
                        href="mailto:diane.mpacko@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img src={Gmail} alt="Gmail"/>
                        </a>
                        <Link to="/Documents/CV_Dev_web_MPACKO_Diane.pdf" target="_blank" download ><img src={CV} alt="Télécharger mon CV"/></Link>
                    </div>
                    <div className="intro center-x recto" style={visible ? show : hide}>
                        <span style={{ fontSize: "1.3rem" }}>CONTACT & CV</span>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Contact