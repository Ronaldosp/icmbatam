import { useState, useEffect } from "react";

import "../styling/HeroBanner.scss";

import appStoreLogo from "../images/app-store-logo.png";
import googlePlayLogo from "../images/google-play-logo.png";
import icmLogo from "../images/icm-logo2.png";

import heroBanner from "../images/hero-banner.jpeg";
import heroBanner2 from "../images/hero-banner2.avif";
import heroBanner3 from "../images/hero-banner3.jpg";

export default function HeroBanner() {

    const heroImages = [
        heroBanner,
        heroBanner2,
        heroBanner3
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((previousImage) =>
                (previousImage + 1) % heroImages.length
            );

        }, 60000);

        return () => clearInterval(interval);

    }, [heroImages.length]);

    return (

        <div className="hero-banner-component">

            <div className="hero-banner-component__container">

                {/* Background Carousel */}

                <div className="hero-banner-component__image-container">

                    <div
                        className="hero-banner-component__image-track"
                        style={{
                            transform: `translateX(-${currentImage * 100}%)`
                        }}
                    >

                        {heroImages.map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt=""
                            />

                        ))}

                    </div>

                </div>


                {/* Content */}

                <div className="hero-banner-component__content-container">

                    <div className="hero-banner-component__content-wrapper">

                        <div className="hero-banner-component__content-left-side">

                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhreW0oTTn8Y7v4mHwCK41nhxrfZe6WtfpDSn8bXI-xVoF7HcQT-mIuA&s=10"
                                alt=""
                            />

                        </div>


                        <div className="hero-banner-component__content-right-side">

                            <div className="hero-banner-component__content-right-side-icon-container">

                                <img src={icmLogo} alt="" />

                            </div>


                            <div className="hero-banner-component__content-right-side-description-container">

                                <div className="hero-banner-component__content-right-side-description-top">

                                    <h3>
                                        Welcome to ICM Batam
                                    </h3>

                                </div>

                                <div className="hero-banner-component__content-right-side-description-bottom">

                                    <h3>
                                        " Home of Discipleship "
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="hero-banner-component__content-icon-container">

                        <div className="hero-banner-component__content-icons">

                            <img src={appStoreLogo} alt="" />

                        </div>

                        <div className="hero-banner-component__content-icons">

                            <img src={googlePlayLogo} alt="" />

                        </div>

                    </div>

                </div>


                {/* Bullets */}

                <div className="hero-banner-component__carousel-indicators">

                    {heroImages.map((_, index) => (

                        <button
                            key={index}
                            className={
                                index === currentImage
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setCurrentImage(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />

                    ))}

                </div>

            </div>

        </div>

    );
}