import React, { useState } from "react";
import "./Soft_skills.css";

const Soft_skills = () => {

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
            <div onMouseEnter={showTitle} onMouseLeave={showTitle} style={full}>
                <div className="skills" style={{ position: "relative"}}>
                    <h2>Métier</h2>
                    <div className="skills-list">
                        <p>Je travaille aussi bien sur des projets frontend que backend en client REACT et backend SQL ou NoSQL.</p>
                        <p>J'ai développé quelques projets en collaboration avec d'autres développeurs, mes projets personnels (client/serveur) sont en cours de développement.</p>
                        <p>Je gère le projet en amont avec le client, en proposant des idées suivant ses prérequis, des maquettes, roadmap, charte graphique, user stories...le tout en agilité.</p>
                    </div>
                    <div className="intro center-x recto" style={visible ? show : hide}>
                        <span style={{ fontSize: "1.3rem" }}>MÉTIER</span>
                    </div>
                </div>
            </div>
        )
}

export default Soft_skills