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
                        <p>Kami percaya bahwa komunitas memiliki peran penting dalam proses pertumbuhan dan kedewasaan setiap orang percaya. Oleh karena itu, kami rindu agar setiap jemaat berkomitmen untuk hidup, bertumbuh, dan saling membangun di dalam sebuah komunitas.</p>
                    </div>
                    <div className="cell-groups-component__content-button-container">
                        <button>Join Komsel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}