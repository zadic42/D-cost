import React, { useEffect, useRef } from 'react';
import './AppDetails.scss';

const AppDetails = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <section className="app-details-section">
            <div className="container">
                <div className="header-block fade-in" ref={addToRefs}>
                    <h1 className="main-title">About <span className="highlight-text">D'COST App.</span></h1>
                    <div className="title-underline"></div>
                </div>

                <div className="content-block fade-in" ref={addToRefs}>
                    <p className="intro-text">
                        Welcome to the future of shopping, where D'COST blurs the boundaries between the physical and digital worlds into an extraordinary experience. Our innovative platform opens the door to a world of shopping, services, and tourism, elevating your journey to unparalleled heights. Explore leading malls, hypermarkets, supermarkets, and local online sites in one place, unlocking limitless possibilities. But that's just the beginning! D'COST goes beyond shopping, offering comprehensive tourism features for your dream vacation. From affordable travel packages to destination insights, we've got your back. Join us in revolutionising the way you shop and travel; embrace a truly memorable experience with D'COST.
                    </p>
                </div>

                <div className="grid-content">
                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">Revitalizing the Shopping Adventure: Malls, Hypermarkets, Supermarkets, and Brands</h2>
                        <p>
                            Prepare for a shopping revolution as D'COST takes you on a virtual journey through the most remarkable malls in your area. Browse countless products from the comfort of your home, bidding farewell to the hassle of visiting multiple locations. Our app offers exclusive insights into each mall, including floor plans, store hours, and contact information, allowing you to fully immerse yourself in their distinct charm and exceptional features.
                        </p>
                        <p>
                            D'COST not only unites an extensive range of hypermarkets and supermarkets in your vicinity but also introduces you to top local online sites. Experience the ultimate convenience of shopping from the comfort of your couch with our seamless platform.
                        </p>
                    </div>

                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">Experience a World of Services at Your Fingertips</h2>
                        <p>
                            Simplify your life by bidding farewell to the hassle of navigating through numerous apps and websites. With D'COST, we bring you a ground-breaking solution that consolidates all your service needs in one place. From essential requirements to indulgent desires, discover everything you seek with utmost ease. By connecting you with a diverse range of service providers, D'COST expands your options and ensures that you have access to the best choices available. Embrace the convenience and freedom to explore a world of services tailored to your needs and preferences.
                        </p>
                    </div>

                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">Empowerment through Negotiation: Your Gateway to Savings</h2>
                        <p>
                            Picture yourself holding the reins of your purchasing power. With D'COST, you possess the unique ability to negotiate prices directly with providers, unlocking unprecedented savings and sealing unbeatable deals. This empowering feature benefits both customers and businesses, fostering a win-win relationship that drives satisfaction and success.
                        </p>
                    </div>

                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">Comprehensive Product and Service Offerings</h2>
                        <p>
                            While D'COST isn't a selling platform, it holds the key to a treasure trove of affordable products and services. From cutting-edge electronics to elegant jewellery, trendy fashion to stunning home décor and watches, discover a universe of possibilities at prices that won't break the bank. D'COST acts as a haven for brands to introduce their innovative offerings, enabling customers to make informed purchasing decisions by providing detailed descriptions and insights.
                        </p>
                    </div>

                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">A Travel Companion Beyond Compare</h2>
                        <p>
                            Embark on an extraordinary journey with D'COST as your loyal travel companion. Let go of the worries and embrace the wonders of your destination. Our app streamlines travel planning by offering budget-friendly options that range from luxurious resorts to soothing spas and thrilling recreational services. Through our collaboration with the Kerala Tourism Board, D'COST unveils unique and affordable accommodations, ensuring a hassle-free trip to Kerala's mesmerising beauty. Discover the allure of Kerala with D'COST, your ultimate travel partner.
                        </p>
                    </div>

                    <div className="detail-item fade-in" ref={addToRefs}>
                        <h2 className="sub-title">Embark on a Journey Beyond Imagination with D'COST App.</h2>
                        <p>
                            Indulge in a shopping and travel experience like no other with D'COST. We bring together the best of both worlds, seamlessly blending the online and offline realms to provide an exceptional platform that caters to all your needs. From shopping for essentials and availing hassle-free, convenient services to planning your dream vacation, D'COST has got you covered. With our user-friendly app and commitment to delivering value for money, we are here to make your life easier. So, join us on this exciting journey and unlock a world of endless possibilities with D'COST.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDetails;
