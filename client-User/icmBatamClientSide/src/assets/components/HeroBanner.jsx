import { useState , useEffect } from "react";
import "../styling/HeroBanner.scss"

export default function HeroBanner(){
    
    return(
        <div className="hero-banner-component">
            <div className="hero-banner-component__container">
                <div className="hero-banner-component__image-container">
                    <img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29yc2hpcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt=""/>
                </div>
            </div>
        </div>
    ) 
}

