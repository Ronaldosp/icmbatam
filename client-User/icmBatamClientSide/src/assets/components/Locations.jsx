import { useState , useEffect } from "react";
import "../styling/Locations.scss"

export default function Locations(){
    
    return(
        <div className="locations-component">
            <div className="locations-component__container">
                <div className="locations-component__content">
                    <div className="locations-component__content-title">
                        <h2>LOCATIONS</h2>
                    </div>
                    <div className="locations-component__content-location">

                        <div className="locations-component__content-location-wrapper">
                            <div className="locations-component__content-location-title">
                                <h4>GPI ICM Bengkong</h4>
                            </div>
                            <div className="locations-component__content-location-address">
                                <p>Jl. Laksamana Bintan Blok C no 001, Bengkong Indah, Bengkong, Batam City, Riau Islands 29444</p>
                            </div>
                            <div className="locations-component__content-location-services">

                                <div className="locations-component__content-location-services-title">
                                    <h5>Sunday Services</h5>
                                </div>
                                <div className="locations-component__content-location-services-content-wrapper">
                                    <div className="locations-component__content-location-services-location">
                                        <p>ICM Main Hall Lt 2</p>
                                    </div>
                                    <div className="locations-component__content-location-services-list">
                                        <p>Umum 1 : 07.00</p>
                                        <p>Umum 2 : 10.00</p>
                                        <p>Umum 3 : 16.00</p>
                                        <p>Umum 4 : 19.00</p>
                                    </div>
                                </div>

                                <div className="locations-component__content-location-services-content-wrapper">
                                    <div className="locations-component__content-location-services-location">
                                        <p>ICM i-kids room</p>
                                    </div>
                                    <div className="locations-component__content-location-services-list">
                                        <p>Tempat penitipan anak untuk semua ibadah raya umum</p>
                                    </div>
                                </div>

                            </div>

                             <div className="locations-component__content-location-services">

                                <div className="locations-component__content-location-services-title">
                                    <h5>Saturday Services</h5>
                                </div>
                                <div className="locations-component__content-location-services-content-wrapper">
                                    <div className="locations-component__content-location-services-location">
                                        <p>ICM Main Hall Lt 2</p>
                                    </div>
                                    <div className="locations-component__content-location-services-list">
                                        <p>Icm Youth : 15.00</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="locations-component__content-button-container">
                        <button>GET DIRECTION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}