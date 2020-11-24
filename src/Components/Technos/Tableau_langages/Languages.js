import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";


const Languages = (props) => {
    const { language } = props;

    return(
        <div className="techno-list">
            <h3>{language.name}</h3>
            <img alt="logo" src={language.logo}/>
            <p>Coucou</p>
        </div>
    )
}

Languages.propTypes = {
    language: PropTypes.object
}

export default (Languages)