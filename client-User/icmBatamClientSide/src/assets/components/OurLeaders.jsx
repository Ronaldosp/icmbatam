import { useState , useEffect } from "react";
import "../styling/OurLeaders.scss"
import pastor1 from "../images/pastor-1.jpg";
import pastor2 from "../images/pastor-2.jpg";
import pastor3 from "../images/pastor-3.jpg";
import pastor4 from "../images/pastor-4.jpg";
import pastor5 from "../images/pastor-5.jpg";
import pastor6 from "../images/pastor-6.jpg";
import pastor7 from "../images/pastor-7.jpg";

export default function OurLeaders(){
    
    const leaders = [
        {
            image: pastor1,
            name: "ROY UNTU",
            role: "Pastor, Lead"
        },
        {
            image: pastor2,
            name: "THEIS PAMELAY",
            role: "Pastor, Executive"
        },
        {
            image: pastor3,
            name: "ANANTO HANTORO",
            role: "Pastor, Cell Group"
        },
        {
            image: pastor4,
            name: "STANLIE WANGKA",
            role: "Pastor, Care & Counseling"
        },
        {
            image: pastor5,
            name: "BIDIN YUSUF",
            role: "Pastor, Nextgen & Operations"
        },
        {
            image: pastor6,
            name: "ANDRIANI UNTU",
            role: "Pastor, Nextgen & Discipleship"
        },
        {
            image: pastor7,
            name: "YULIANTO",
            role: "Pastor, Nextgen & Discipleship"
        }
    ];

    return(
        <div className="our-leaders-component">
            <div className="our-leaders-component__container">
                <div className="our-leaders-component__content-wrapper">
                    <div className="our-leaders-component__content-title">
                        <h2>OUR LEADERSHIP</h2>
                    </div>
                    <div className="our-leaders-component__content-description">
                        <p>We lead together because we believe in team leadership.</p>
                    </div>

                    <div className="our-leaders-component__content-card-container">

                        {leaders.map((leader, index) => (
                            <div
                                className="our-leaders-component__content-card-wrapper"
                                key={index}
                            >
                                <div className="our-leaders-component__content-card-thumbnail">
                                    <img src={leader.image} alt="" />
                                </div>

                                <div className="our-leaders-component__content-card-title">
                                    <h5>{leader.name}</h5>
                                </div>

                                <div className="our-leaders-component__content-card-sub-title">
                                    <p>{leader.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}