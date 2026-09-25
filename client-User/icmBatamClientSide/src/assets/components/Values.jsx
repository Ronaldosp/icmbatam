import { useState , useEffect } from "react";
import "../styling/Values.scss";

export default function Values() {

    const values = [
        {
            title: "CHRIST CENTERED",
            description: "Mengalami Kristus melalui kedalaman Firman dan penyembahan"
        },
        {
            title: "CHRISTLIKE LIFE",
            description: "Mengalami gaya hidup Kristus melalui sarana pemuridan yang berpusat pada Kristus"
        },
        {
            title: "MISSIONAL LOVE",
            description: "Menjangkau tuaian dan menggenapi misi Tuhan menjadikan semua bangsa murid Kristus"
        }
    ];

    return (
        <div className="values-component">

            <div className="values-component__container">

                <div className="values-component__title">
                    <h2>VALUES</h2>
                </div>

                <div className="values-component__content">

                    {values.map((value, index) => (
                        <div
                            className="values-component__content-item"
                            key={index}
                        >

                            <div className="values-component__content-title">
                                <p>{value.title}</p>
                            </div>

                            <div className="values-component__content-description">
                                <p>{value.description}</p>
                            </div>

                        </div>
                    ))} 

                </div>

            </div>

        </div>
    );
}