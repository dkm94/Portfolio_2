import React, { useState } from 'react';
import "./Présentation.css";

const Présentation = () => {

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

    return (
        <div onMouseEnter={showTitle} onMouseLeave={showTitle} style={full}>
            <div className="intro center-x" style={{ position: "relative"}}>
                <h2>Qui suis-je ?</h2>   
                <p>Après des études de commerce international et de traduction, j'ai développé une appétence pour les métiers du numérique qui me permettent à présent de faire partie de la grande famille des développeurs web.
                Ma maîtrise de l'anglais a été un atout durant ma formation de Développeur web fullstack JS, et reste une ressource indispensable dans l'apprentissage continu de nouveaux outils/langages et veilles technologiques.<br />
                Je suis ouverte aux projets MERN Stack en frontend, backend et fullstack. En tant que junior, je suis prête à mettre en application toutes mes connaissances acquises depuis le début de mon parcours dans le développement et à donner mon maximum afin d'apporter une vraie plus value à votre équipe ! 
                </p>
                <div className="intro center-x" style={visible ? show : hide}>
                    <span>QUI SUIS-JE ?</span>
                </div>
            </div>
        </div>
    )
}

export default (Présentation)
