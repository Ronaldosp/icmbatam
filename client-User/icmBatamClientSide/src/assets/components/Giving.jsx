import { useState , useEffect } from "react";
import "../styling/Giving.scss";

export default function Giving(){
    
    return(
        <div className="giving-component">
            <div className="giving-component__container">
                <div className="giving-component__title">
                    <h2>GIVING</h2>
                </div>
                <div className="giving-component__content">
                    <div className="giving-component__content-title">
                        <h5>
                            BCA Batam Centre
                            <br />
                            a/n ICM Batam Bengkong
                        </h5>
                    </div>

                    <div className="giving-component__content-description">
                        <p>Perpuluhan & Pelayanan <strong>123.123.1231</strong></p>
                    </div>

                    <div className="giving-component__content-description">
                        <p>Misi <strong>123.123.1231</strong></p>
                    </div>

                    <div className="giving-component__content-description">
                        <p>Gedung <strong>123.123.1231</strong></p>
                    </div>
                </div>

                <div className="giving-component__content">
                    <div className="giving-component__content-title">
                        <h5>
                            Rekening Maybank
                            <br />
                            a/n ICM Batam Bengkong
                        </h5>
                    </div>

                    <div className="giving-component__content-description">
                        <p>Acc <strong>12 3123 1231</strong></p>
                    </div>

                    <div className="giving-component__content-description-small">
                        <p>Cabang Nagoya Baru</p>
                    </div>
                    <div className="giving-component__content-description-small">
                        <p>Swift Code: JLYA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}