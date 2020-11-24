import React, { useState } from 'react';
import "./Portfolio_Container.css";

export default function Portfolio_Container() {

    const [visible, setVisible] = useState(true);
    const style = {
        display: visible ? "display" : "flex",
        animation: visible ? "fadeIn" : "ease 5.7s", 
    }

    window.addEventListener("load", function(event) {
        setTimeout(() => {
            setVisible()
        }, 3000)
        console.log("Toutes les ressources sont chargées !");
      });
    
    return (
        <div className="portfolio-container grid-container" >
            <div className="grid-item item1" style={style}>Photo</div>
            <div className="grid-item item2" style={style} >2</div>
            <div className="grid-item item3" style={style} >3</div>  
            <div className="grid-item item4" style={style} >4</div>
            <div className="grid-item item5" style={style}>5</div>
            <div className="grid-item item6" style={style}>6</div>
            <div className="grid-item item7" style={style}>7</div>
        </div>
    )
}
