import React from "react";
import "./Certifications.css"
import PropTypes from "prop-types";

const Certification = (props) => {
    const { certification } = props;

    return(
            <li>
                <img alt="" src={certification.icone} />
                <span>{certification.titre}</span>
            </li>
    )
}

Certification.propTypes = {
    certification: PropTypes.object
}

export default Certification;