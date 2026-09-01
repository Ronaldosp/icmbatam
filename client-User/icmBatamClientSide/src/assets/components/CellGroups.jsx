import { useState , useEffect } from "react";
import "../styling/CellGroups.scss"

export default function CellGroups(){
    
    return(
        <div className="cell-groups-component">
            <div className="cell-groups-component__container">
                <div className="cell-groups-component__content-wrapper">
                    <div className="cell-groups-component__content-title">
                        <h2>CELL GROUPS</h2>
                    </div>
                    <div className="cell-groups-component__content-description">
                        <p>Kami mempercayai bahwa komunitas adalah salah satu faktor utama pertumbuhan bagi kehidupan orang percaya. Karena itu kami rindu setiap jemaat berkomitmen untuk berada di dalam sebuah komunitas.</p>
                    </div>
                    <div className="cell-groups-component__content-button-container">
                        <button>JOIN CELL GROUPS NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}