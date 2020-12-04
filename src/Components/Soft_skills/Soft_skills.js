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
                <div className="skills center-x" style={{ position: "relative"}}>
                    <h2>Soft skills</h2>
                    <ul className="skills-list">
                        <li>Persévérance</li>
                        <li>Curiosité</li>
                        <li>Autonomie</li>
                        <li>Patience</li>
                        <li>Esprit d'entre-aide</li>
                    </ul>
                    <div className="intro center-x" style={visible ? show : hide}>
                        <span>SOFT SKILLS</span>
                    </div>
                </div>
            </div>
        )
}

export default Soft_skills