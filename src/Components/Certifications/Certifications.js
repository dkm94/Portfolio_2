import React, { useState, useEffect } from "react";
import "./Certifications.css";
import Certification from "./Certification";

const Certifications = () => {

    const [visible, setVisible] = useState(true)
    const [certifications, setCertifications] = useState([])

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

    useEffect(() => {
        fetch("../data/tableau_certifications.json")
            .then(res => res.json())
            .then(data => {
                setCertifications(data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div onMouseEnter={showTitle} onMouseLeave={showTitle} style={full}>
            <div className="certifications" style={{ position: "relative"}}>
                <h2>Certifications</h2>
                <ul className="certification-list">
                    {certifications.map((certification, index) => {
                        return <Certification certification={certification} key={index}/>
                    })}
                </ul>
                <div className="intro center-x" style={visible ? show : hide}>
                    <span style={{ fontSize: "1.3rem" }}>CERTIFICATIONS</span>
                </div>
            </div>
        </div>
    )
}

export default Certifications;