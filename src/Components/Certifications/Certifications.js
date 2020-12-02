import React, { useState, useEffect } from "react";
import Certification from "./Certification";

const Certifications = () => {

    const [certifications, setCertifications] = useState([])

    useEffect(() => {
        fetch("../data/tableau_certifications.json")
            .then(res => res.json())
            .then(data => {
                setCertifications(data)
            })
            .catch(err => console.log(err))
    }, [])

    return(

        <div className="certifications">
            <h2>Certifications</h2>
            <ul className="certification-list">
                {certifications.map((certification, index) => {
                    return <Certification certification={certification} key={index}/>
                })}
            </ul>
        </div>
    )
}

export default Certifications;