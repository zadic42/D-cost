import React, { useState } from 'react';
import './ExploreApp.scss';

const ExploreApp = () => {
  const [activeNav, setActiveNav] = useState('HOME');

  return (
    <section className="explore-app-section" id="explore">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      
      <div className="explore-container">
        <div className="explore-content">
          <div className="badge-pill">
            <span className="live-dot"></span> Next-Gen Shopping
          </div>
          
          <h2 className="explore-title">
            <span className="gradient-text">EXPLORE</span><br />
            D'COST APP
          </h2>
          
          <p className="explore-description">
            Experience the future of seamless shopping. Unlock exclusive cashbacks, 
            premium rewards, and discover top-tier brands—all curated just for you.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div className="feature-text">
                <h4>90% Cashback</h4>
                <p>Instant rewards on purchases</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div className="feature-text">
                <h4>D'Club Elite</h4>
                <p>Unlock premium member tiers</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div className="feature-text">
                <h4>200+ Outlets</h4>
                <p>Across all major Indian cities</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="feature-text">
                <h4>Real-time Deals</h4>
                <p>Flash sales & instant alerts</p>
              </div>
            </div>
          </div>

          <div className="action-group">
            <button className="download-btn">
              Download App
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
            <button className="learn-more-btn">
              Explore Features
            </button>
          </div>
        </div>

        <div className="explore-visuals">
          <div className="floating-badge badge-top">
            <span className="badge-icon">💎</span> SWA Diamonds
          </div>
          <div className="floating-badge badge-bottom">
            <span className="badge-icon">✨</span> Trusted by 1M+
          </div>

          <div className="phone-mockup-3d">
            <div className="phone-frame">
              <div className="dynamic-island">
                <div className="camera"></div>
                <div className="sensor"></div>
              </div>

              <div className="screen-inner">
                <div className="app-header">
                  <div className="user-profile">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Profile" />
                    <div className="user-greeting">
                      <span className="greeting-small">Good morning,</span>
                      <span className="greeting-name">Alex 👋</span>
                    </div>
                  </div>
                  <button className="notif-btn">
                    <span className="notif-dot"></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </button>
                </div>

                <div className="app-banner swa-banner">
                  <img src="https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="SWA Diamonds" className="bg-img" />
                  <div className="banner-glass">
                    <div className="tags-container">
                      <div className="glass-tag">
                        <span className="label">CASH BACK</span>
                        <span className="value">90%</span>
                      </div>
                      <div className="glass-tag">
                        <span className="label">EXCHANGE</span>
                        <span className="value">95%</span>
                      </div>
                    </div>
                    
                    <div className="brand-title-box">
                      <h3>SWA <span>DIAMONDS</span></h3>
                      <p>200+ Outlets across India</p>
                    </div>

                    <div className="guinness-stamp">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
                      <div>
                        <strong>Guinness</strong>
                        <span>Collections</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-categories">
                  <div className="section-title">
                    <h4>Top Categories</h4>
                    <span>See All</span>
                  </div>
                  <div className="categories-row">
                    {[
                      { name: 'Malls', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> },
                      { name: 'Tourism', icon: <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect> },
                      { name: 'Services', icon: <circle cx="12" cy="12" r="10"></circle> },
                      { name: 'Health', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> }
                    ].map((cat, i) => (
                      <div className="cat-box" key={i}>
                        <div className="cat-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            {cat.icon}
                          </svg>
                        </div>
                        <span>{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="brand-stories-btn">
                  <div className="shimmer-effect"></div>
                  <span>BRAND STORIES</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>

                <div className="app-bottom-nav">
                  {[
                    { id: 'HOME', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> },
                    { id: 'CLUB', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> },
                    { id: 'CARD', icon: <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect> },
                    { id: 'DEALS', icon: <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path> },
                    { id: 'PROFILE', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> }
                  ].map((item) => (
                    <div 
                      key={item.id} 
                      className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                      onClick={() => setActiveNav(item.id)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {item.icon}
                        {item.id === 'PROFILE' && <circle cx="12" cy="7" r="4"></circle>}
                      </svg>
                      {activeNav === item.id && <span className="active-dot"></span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreApp;
