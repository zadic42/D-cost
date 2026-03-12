import React from 'react';
import './Gallery.scss';

// Import images
import img1 from '../../assets/Images/gallery/1.png';
import img2 from '../../assets/Images/gallery/2.png';
import img3 from '../../assets/Images/gallery/3.png';
import img4 from '../../assets/Images/gallery/4.png';
import img5 from '../../assets/Images/gallery/5.png';
import img6 from '../../assets/Images/gallery/6.png';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      src: img1,
      title: 'Ad Analytics',
      description: 'Real-time performance tracking',
      size: 'large'
    },
    {
      id: 2,
      src: img2,
      title: 'Smart Billboards',
      description: 'Digital reach reimagined',
      size: 'medium'
    },
    {
      id: 3,
      src: img3,
      title: 'Social Campaigns',
      description: 'Viral marketing strategies',
      size: 'small'
    },
    {
      id: 4,
      src: img4,
      title: 'Influencer Reach',
      description: 'Authentic brand collaborations',
      size: 'small'
    },
    {
      id: 5,
      src: img5,
      title: 'Data Insights',
      description: 'Predictive trend analysis',
      size: 'medium'
    },
    {
      id: 6,
      src: img6,
      title: 'Strategic Planning',
      description: 'Next-gen advertising roadmaps',
      size: 'small'
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span>Gallery</span></h2>
          <p className="section-subtitle">Visualizing the future of digital advertising</p>
        </div>
        
        <div className="bento-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item ${item.size}`}>
              <div className="image-wrapper">
                <img src={item.src} alt={item.title} />
                <div className="overlay">
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
