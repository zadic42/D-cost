import { useState, useEffect } from 'react';
import './Navbar.scss';
import logoUrl from '../../../assets/Images/LOGO.png';

const Navbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll(); // Initialize state on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Left Side Logo */}
                <div className="navbar-logo">
                    <img src={logoUrl} alt="D'COST Logo" />
                    <span className="logo-text">Dcost</span>
                </div>

                {/* Center Part Content (Desktop) */}
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#explore">Explore</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Right Side Icons & Mobile Menu Toggle */}
                <div className="navbar-right">
                    <button className="icon-btn" aria-label="Search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Profile">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>

                    <div className="mobile-toggle" onClick={toggleOffcanvas}>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </div>
                </div>
            </div>

            {/* Mobile Offcanvas Menu */}
            <div className={`offcanvas-menu ${isOffcanvasOpen ? 'active' : ''}`}>
                <div className="offcanvas-header">
                    <h2>Menu</h2>
                    <button className="close-btn" onClick={toggleOffcanvas}>&times;</button>
                </div>
                <div className="offcanvas-body">
                    <ul className="mobile-nav-links">
                        <li><a href="#home" onClick={toggleOffcanvas}>HOME</a></li>
                        <li><a href="#about" onClick={toggleOffcanvas}>ABOUT US</a></li>
                        <li><a href="#explore" onClick={toggleOffcanvas}>EXPLORE</a></li>
                        <li><a href="#gallery" onClick={toggleOffcanvas}>GALLERY</a></li>
                        <li><a href="#contact" onClick={toggleOffcanvas}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
            {/* Overlay for Offcanvas */}
            <div
                className={`offcanvas-overlay ${isOffcanvasOpen ? 'active' : ''}`}
                onClick={toggleOffcanvas}
            ></div>
        </nav>
    );
};

export default Navbar;
