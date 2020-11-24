import React, { useState } from 'react';
import Tab_langages from "./Tableau_langages/tableau";
import Tab_stack from "./Tableau_stack/tableau";
import Tab_outils from "./Tableau_outils/tableau";
import Langagues from "./Tableau_langages/Languages";
import Stack from "./Tableau_stack/Stack";
import Tools from "./Tableau_outils/Tools";
import PropTypes from "prop-types";
import axios from "axios";


const Technos = () => {

    // const [languages, setLanguages] = useState([])
    // const [stacks, setStack] = useState([])
    // const [tools, setTools] = useState([])
    // console.log(Tab_langages)
    // console.log(Tab_stack)
    // console.log(Tab_outils)

    axios.get("./Tableau_langages/tableau.js")
        .then((res) => {
            res.json()
            console.log(res)
        })
        .then((data) => {
            console.log(data)
        })

    return (
        <div onClick={test}>
            {/* {languages.map((language, i) => {
                return <Langagues key={i} language={language}/>
            })}
            {stacks.map((stack, i) => {
                return <Stack key={i} stack={stack}/>
            })}
            {tools.map((tool, i) => {
                return <Tools key={i} tool={tool}/>
            })} */}
        </div>
    )
}

Technos.propTypes = {
    languages: PropTypes.array,
    stack: PropTypes.array,
    tools: PropTypes.array
}

const test = () => {
    alert('Test')
}

export default (Technos)
