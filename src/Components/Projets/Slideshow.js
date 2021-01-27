import React, { Component } from 'react';
import "./Projets.css";
// import Card from "./Card/Card";
import data from "./data/tableau_projets";

export default class Projets extends Component {

    constructor(props){
        super(props);
        this.state = {
            projet: data.projets[0] //current project
        }
    }

    // showTitle = () => {
    //     this.setState({ visible : !this.state.visible })
    // }

    // Ctrl suivant
    // on définit la nouvelle valeur du projet par son index, ce sera le suivant donc current index + 1
    // Puis on attribue la valeur du nouvel index à current index
    // nextProject = () => {
    //     const newIndex = this.state.projet.index+1;
    //     this.setState({
    //         projet: data.projets[newIndex]
    //     })
    // }

    // Ctrl précédent
    // on définit la nouvelle valeur du projet par son index, ce sera le suivant donc current - 1
    // Puis on attribue la valeur du nouvel index à current index
    // prevProject = () => {
    //     const newIndex = this.state.projet.index-1;
    //     this.setState({
    //         projet: data.projets[newIndex]
    //     })
    // }

    render() {

        // const show = {
        //     position: "absolute",
        //     height: "100%",
        //     zIndex: "2000",
        //     top: "0%",
        //     width: "100%",
        //     right: "0%",
        //     backgroundColor: "#f3f3f3"
        // }

        // const hide = {
        //     display: "none"
        // }

        // const full = {
        //     width: "100%",
        //     height: "100%"
        // }

        // Pour éviter les répétitions, on stocke les attributs dans this.state
        // C'est plus simple et plus clair pour faire passer les props

        // const { projet, visible } = this.state;

        return (
            <div className="slideshow">
                    <div className="slides">
                        <input type="radio" name="r" id="r1" checked />
                        <input type="radio" name="r" id="r2" />
                        <input type="radio" name="r" id="r3" />
                        <input type="radio" name="r" id="r4" />

                        <div className="slide s1">
                            <img src={data.projets[0].img} alt="coucou" />
                        </div>
                        <div className="slide">
                            <img src={data.projets[1].img} alt="" />
                        </div>
                        <div className="slide">
                            <img src={data.projets[2].img} alt="" />
                        </div>
                        <div className="slide">
                            <img src={data.projets[3].img} alt="" />
                        </div>

                        <div className="navigation">
                            <label for="r1" className="bar"/>
                            <label for="r2" className="bar"/>
                            <label for="r3" className="bar"/>
                            <label for="r4" className="bar"/>
                        </div>
                    </div>
            </div>
        )
    }
}
