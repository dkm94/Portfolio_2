import React from "react";

const Stack = (props) => {
    const { stack } = props;

    return(
        <li className="techno-list">
            <h3>{stack.name}</h3>
            <img alt="logo" src={stack.logo}/>
        </li>
    )
}

export default (Stack)