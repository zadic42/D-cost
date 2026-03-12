import React from 'react';
import Slider from "react-slick";
import './HomeBanner.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImage1 from '../../assets/Images/Page-2.jpeg';
import bannerImage2 from '../../assets/Images/PAGE 1.png';


// Custom Arrow Components
/* eslint-disable react/prop-types */
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
    );
}

const HomeBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true, // Use fade for cinematic feel
        speed: 1500, // Slower fade speed
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Slower autoplay
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div
                style={{
                    bottom: '30px',
                    padding: '10px'
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="custom-dot"></div>
        )
    };

    return (
        <section className="home-banner" id="home">
            <Slider {...settings} className="banner-slider">
                <div className="banner-slide">
                    <div className="img-wrapper">
                        <img src={bannerImage1} alt="Home Banner 1" className="banner-img" />
                        <div className="banner-overlay"></div>
                        <div className="banner-content">
                            <span className="badge">Next-Gen Advertising</span>
                            <h1 className="banner-title">Elevate Your <br /><span>Digital Presence</span></h1>
                            <p className="banner-desc">Transform your brand with D'Cost's cutting-edge advertising solutions and data-driven insights.</p>
                            <div className="banner-actions">
                                <button className="btn-premium">Explore Projects</button>
                                <button className="btn-outline">Our Services</button>
                            </div>
                        </div>
                        <div className="floating-elements">
                            <div className="float-card card-1"></div>
                            <div className="float-card card-2"></div>
                            <div className="float-glow glow-1"></div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide">
                    <div className="img-wrapper">
                        <img src={bannerImage2} alt="Home Banner 2" className="banner-img" />
                        <div className="banner-overlay"></div>
                        <div className="banner-content">
                            <span className="badge">D'Cost Innovations</span>
                            <h1 className="banner-title">Maximize Your <br /><span>Campaign ROI</span></h1>
                            <p className="banner-desc">Unlock the power of personalized deals and smart targeting to reach your ideal audience effectively.</p>
                            <div className="banner-actions">
                                <button className="btn-premium">Get Started</button>
                                <button className="btn-outline">Watch Demo</button>
                            </div>
                        </div>
                        <div className="floating-elements">
                            <div className="float-card card-3"></div>
                            <div className="float-card card-4"></div>
                            <div className="float-glow glow-2"></div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default HomeBanner;