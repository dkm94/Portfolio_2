import React, { useState, useEffect } from 'react';
import "./Technos.css";
import Languages from "./Components_Technos/Languages";
import Stack from "./Components_Technos/Stack";
import Tools from "./Components_Technos/Tools";
import PropTypes from "prop-types";

const Technos = () => {

    const [languages, setLanguages] = useState([])
    const [stacks, setStack] = useState([])
    const [tools, setTools] = useState([])
    
    useEffect(() => {
        fetch("../data/tableau_langages.json")
            .then(res => res.json())
            .then(data => {
                setLanguages(data)
            })
            .catch((err) => 
                console.log(err)
            )
    }, [])

    useEffect(() => {
        fetch("../data/tableau_stack.json")
        .then(res => res.json())
        .then(data => {
            setStack(data)
        })
        .catch((err) => 
            console.log(err)
        )
    }, [])

    useEffect(() => {
        fetch("../data/tableau_outils.json")
            .then(res => res.json())
            .then(data => {
                setTools(data)
            })
            .catch((err) => console.log(err))
    })

    return (
        <div className="technos">

            <ul>
                {languages.map((language, i) => {
                    return <Languages key={i} language={language}/>
                })}
            </ul>
            <ul>
                {stacks.map((stack, i) => {
                    return <Stack key={i} stack={stack}/>
                })}
            </ul>
            <ul>
                {tools.map((tool, i) => {
                    return <Tools key={i} tool={tool}/>
                })}
            </ul>

        </div>
    )
}

Technos.propTypes = {
    languages: PropTypes.array,
    stack: PropTypes.array,
    tools: PropTypes.array
}

// const test = () => {
//     alert('Test')
// }

export default (Technos)
