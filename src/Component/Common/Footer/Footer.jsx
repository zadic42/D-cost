import { useState, useEffect } from 'react';
import './Footer.scss';
import logoUrl from '../../../assets/Images/LOGO.png';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="footer-advanced" id="contact">
            <div className="footer-glass-overlay">
            </div>
            <div className="footer-container">
                <div className="footer-main-grid">
                    {/* Brand Section */}

                    <div className="footer-section brand-info">

                        <div className="footer-logo">
                            <img src={logoUrl} alt="D'COST Logo" />
                            <span className="logo-text">Dcost</span>
                        </div>

                        <p className="brand-description">
                            We are a premier advertising and marketing agency dedicated to elevating brands through innovative digital solutions and strategic storytelling.
                        </p>

                        <div className="contact-info">

                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>+1 (234) 567-890</span>
                                
                            </div>

                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>hello@dcost.com</span>
                            </div>

                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>123 Agency St, Creative City</span>
                            </div>

                        </div>

                    </div>

                    {/* Quick Navigation */}
                    <div className="footer-section nav-links">
                        <h4 className="section-title">Navigation</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/blog">Latest Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="footer-section resource-links">
                        <h4 className="section-title">Resources</h4>
                        <ul>
                            <li><a href="/faq">Support FAQ</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/careers">Join Our Team</a></li>
                            <li><a href="/press">Press Kit</a></li>

                            


                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="footer-section newsletter-box">
                        <h4 className="section-title">Join Our Newsletter</h4>
                        <p>Receive weekly insights and agency updates directly in your inbox.</p>
                        <form className="adv-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-wrapper">
                                <input type="email" placeholder="Email Address" required />
                                <button type="submit">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            </div>
                        </form>
                        <div className="social-connect">
                            <h5>Follow Our Journey</h5>
                            <div className="social-icons">
                                <a href="#" className="social-btn fb"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                <a href="#" className="social-btn tw"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                                <a href="#" className="social-btn ig"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                <a href="#" className="social-btn li"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright-bar">
                    <p>&copy; {new Date().getFullYear()} <span className="highlight">D'COST</span> Agency. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button 
                className={`back-to-top ${isVisible ? 'visible' : ''}`} 
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
        </footer>
    );
};

export default Footer;
