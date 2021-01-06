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
    const [visible, setVisible] = useState(true)
    
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


    return (
        <div onMouseEnter={showTitle} onMouseLeave={showTitle} style={full}>
            <div className="technos" style={{ position: "relative"}}>
                <h2>Hard skills</h2>
                
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
                <div className="intro center-x recto" style={visible ? show : hide}>
                    <span style={{ fontSize: "1.3rem" }}>TECHNOS</span>
                </div>
            </div>
        </div>

       
    )
}

Technos.propTypes = {
    languages: PropTypes.array,
    stack: PropTypes.array,
    tools: PropTypes.array
}

export default (Technos)
