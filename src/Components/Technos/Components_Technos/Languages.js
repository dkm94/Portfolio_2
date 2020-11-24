import React from 'react';
import PropTypes from "prop-types";

const Languages = (props) => {
    const { language } = props;

    return(
        <li className="techno-list">
            <h3>{language.name}</h3>
            <img alt="logo" src={language.logo}/>
        </li>
    )
}

Languages.propTypes = {
    language: PropTypes.object
}

export default (Languages)