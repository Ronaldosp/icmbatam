import { useState , useEffect } from "react";
import "../styling/Vision.scss"

export default function Vision(){
    return (
        <div className="vision-component">
            <div className="vision-component__container">
                <div className="vision-component__title">
                    <h2>VISION</h2>
                </div>
                <div className="vision-component__content">
                    <div className="vision-component__content-description">
                        <p>Komunitas murid Kristus yang menghadirkan kasih Bapa di setiap aspek kehidupan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}