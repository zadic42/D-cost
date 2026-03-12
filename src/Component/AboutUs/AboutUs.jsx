import { useEffect, useRef } from 'react';
import './AboutUs.scss';

// import phoneImage from '../../assets/Images/Page-2.png';
import phoneImage from '../../assets/Images/Page-2.JPEG';

const AboutUs = () => {
    const sectionRef = useRef(null);
    const girlRef = useRef(null);
    const phoneRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (girlRef.current) observer.observe(girlRef.current);
        if (phoneRef.current) observer.observe(phoneRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-us-section" ref={sectionRef} id="about">
            {/* Background Orbs */}
            <div className="blobs-container">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="about-container">

                {/* Left Side: Girl Image */}


                {/* Center: Phone Mockup */}
                <div className="about-phone-wrapper fade-in-up" ref={phoneRef}>
                    <div className="phone-mockup floating-mech">
                        <img src={phoneImage} alt="D'COST App Mockup" className="phone-img" />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="about-text-content fade-in-right" ref={textRef}>
                    <div className="tagline">
                        <span className="line"></span>
                        <p>DISCOVER THE FUTURE</p>
                    </div>
                    <h2 className="about-heading glow-text">
                        <span className="text-pink">Unleash</span> an <span className="text-pink">Unforgettable</span><br />
                        <span className="text-pink">Shopping</span> & <span className="text-pink">Tourism</span><br />
                        <span className="text-pink">Experience</span> with <span className="text-bold-pink gradient-text">D'COST</span> App.
                    </h2>
                    <p className="about-subtext">
                        Elevate your lifestyle with seamless shopping, exclusive deals, and premier tourism bookings all in one place.
                    </p>

                    <button className="premium-btn">
                        <span>Explore Now</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
