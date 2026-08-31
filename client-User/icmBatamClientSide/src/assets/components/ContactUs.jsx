import { useState , useEffect } from "react";
import "../styling/ContactUs.scss";

export default function ContactUs(){
    
    return(
        <div className="contact-us-component">
            <div className="contact-us-component__container">
                <div className="contact-us-component__title">
                    <h2>CONTACT US</h2>
                </div>

                <div className="contact-us-component__content">
                    <div className="contact-us-component__content__title">
                        <h5></h5>
                    </div>
                    <div className="contact-us-component__content__description">
                        <p>Jl. Laksamana Bintan Blok C no 001, Bengkong Indah, Bengkong</p>
                    </div>
                    <div className="contact-us-component__content__description">
                        <p>Batam City - Riau Islands 29444</p>
                    </div>
                </div>

                <div className="contact-us-component__credentials">
                    <div className="contact-us-component__credentials-list">
                        <p>Phone: +62 21 1234 1233 333 (Office Hours)</p>
                    </div>
                    <div className="contact-us-component__credentials-list">
                        <p>Whatsapp: +62 899 123 1231</p>
                    </div>
                </div>

                <div className="contact-us-component__content">
                    <div className="contact-us-component__content__title">
                        <h5>Office Hours</h5>
                    </div>
                    <div className="contact-us-component__content__description">
                        <p>Monday to Saturday</p>
                    </div>
                    <div className="contact-us-component__content__description">
                        <p>09.00 - 17.00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}