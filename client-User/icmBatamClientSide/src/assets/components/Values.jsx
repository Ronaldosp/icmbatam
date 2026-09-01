import { useState , useEffect } from "react";
import "../styling/Values.scss";

export default function Values() {

    const values = [
        {
            title: "CHRIST CENTERED",
            description: "Hidup yang berpusatkan pada Kristus"
        },
        {
            title: "ACCOUNTABLE LIFE",
            description: "Hidup yang dapat dipertanggungjawabkan"
        },
        {
            title: "REAL LOVE",
            description: "Mengasihi sama seperti Yesus mengasihi"
        },
        {
            title: "EXCELLENT SERVANTHOOD",
            description: "Memberi yang terbaik dalam sikap kehambaan"
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