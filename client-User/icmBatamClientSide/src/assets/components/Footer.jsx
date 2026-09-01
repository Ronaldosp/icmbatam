import { useState , useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styling/Footer.scss";
import youtubeLogo from "../images/youtube-logo.png";
import instagramLogo from "../images/instagram-logo.png";
import whatsappLogo from "../images/whatsapp-logo.png";

export default function Footer(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }, 100);
    };

    const handleAboutUsClick = () => {

        // If already on About Us
        if (window.location.pathname === "/aboutus") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

            return;
        }

        // If coming from another page
        navigate("/aboutus");

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }, 100);
    };

    return(
        <div className="footer-container">
            <div className="footer-logo-container">
                <div className="footer-logo-asset">
                    <a href=""><img src={instagramLogo}/></a>
                </div>
                <div className="footer-logo-asset">
                    <a href=""><img src={youtubeLogo}/></a>
                </div>
                <div className="footer-logo-asset">
                    <a href=""><img src={whatsappLogo}/></a>
                </div>
            </div>

            <div className="footer-nav">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        handleHomeClick();
                    }}
                >
                    HOME
                </a>
                <a
                    href="/aboutus"
                    onClick={(e) => {
                        e.preventDefault();
                        handleAboutUsClick();
                    }}
                >
                    ABOUT US
                </a>

                <Link to="/#cellgroup">CELL GROUP</Link>
                <Link to="/#location">LOCATIONS</Link>
                <Link to="/#giving">GIVING</Link>
                <Link href="/privacypolicy">PRIVACY POLICY</Link>
            </div>

            <div className="footer-text">
                <p>© 2035 by Ronaldo Surya Putra. Powered and secured by ron</p>
            </div>
        </div>
    )
}