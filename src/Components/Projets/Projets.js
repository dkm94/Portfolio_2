import React, { Component } from 'react';
import "./Projets.css";
import Card from "./Card/Card";
import data from "./data/tableau_projets";

export default class Projets extends Component {

    constructor(props){
        super(props);
        this.state = {
            appearProject: true, // la div s'affiche au chargement
            projet: data.projets[0] //current project
        }
    }
    

    //Pour faire apparaître/disparaîre la div
    // permet de toggle true/false
    toggleAppear = () => {
        this.setState({
            appearProject: !this.state.appearProject
        })
    }

    // Ctrl suivant
    // on définit la nouvelle valeur du projet par son index, ce sera le suivant donc current index + 1
    // Puis on attribue la valeur du nouvel index à current index
    nextProject = () => {
        const newIndex = this.state.projet.index+1;
        this.setState({
            projet: data.projets[newIndex]
        })
    }

    // Ctrl précédent
    // on définit la nouvelle valeur du projet par son index, ce sera le suivant donc current - 1
    // Puis on attribue la valeur du nouvel index à current index
    prevProject = () => {
        const newIndex = this.state.projet.index-1;
        this.setState({
            projet: data.projets[newIndex]
        })
    }

    render() {

        // Pour éviter les répétitions, on stocke les attributs dans this.state
        // C'est plus simple et plus clair pour faire passer les props

        const { appearProject, projet } = this.state;

        return (
            <div className="projets">
                <Card projet={projet} prev={this.prevProject} next={this.nextProject}/>
                <div className="carousel-btns">
                    {/* <button onClick={this.toggleAppear}>Show/Hide: {`${appearProject}`}</button> */}
                    {/* On désactive le bouton Précédent si on est sur l'index 0 donc le 1er projet */}
                    <button onClick={this.prevProject} disabled={projet.index === 0}>Préc.</button>
                    {/* On désactive le bouton Suivant si on est sur le dernier projet, donc longueur du tableau - 1 */}
                    <button onClick={this.nextProject} disabled={projet.index === data.projets.length-1}>Suiv.</button>
                </div>
            </div>
        )
    }
}
