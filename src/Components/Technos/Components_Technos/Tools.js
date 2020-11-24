import React from "react";

const Tools = (props) => {
    
    const { tool } = props;

    return(
        <li className="techno-list">
            <h3>{tool.name}</h3>
            <img alt="logo" src={tool.logo}/>
        </li>
    )
}

export default (Tools)