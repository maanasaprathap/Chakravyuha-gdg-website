import React from "react";

const images = [
  "/images/gallery1.jpeg",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
  "/images/gallery7.jpeg",
  "/images/gallery8.jpeg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-container">
      {/* Embedded CSS for high-performance hover effects and responsiveness */}
      <style>{`
        .gallery-container {
          padding: 80px 20px;
          background: transparent;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-title {
          font-family: 'Audiowide-Regular', sans-serif;
          color: #fff;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          text-align: center;
          margin-bottom: 50px;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
          width: 100%;
          max-width: 1200px;
        }

        .gallery-card {
          position: relative;
          height: 250px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(30, 10, 60, 0.4);
          border: 1px solid rgba(168, 85, 247, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .gallery-card:hover {
          transform: translateY(-10px);
          border-color: #a855f7;
          box-shadow: 0 15px 40px rgba(168, 85, 247, 0.4);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.15);
        }

        /* Gradient Overlay that appears on hover */
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20, 0, 50, 0.8), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-text {
          color: #fff;
          font-family: 'Audiowide-Regular', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 2px;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .gallery-container { padding: 50px 15px; }
          .gallery-grid { 
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px; 
          }
          .gallery-card { height: 200px; }
        }

        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gallery-inner">
        <h2 className="gallery-title">EVENT GALLERY</h2>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-card" data-aos="zoom-in">
              <img 
                src={img} 
                alt={`Memory ${index + 1}`} 
                className="gallery-img" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="overlay-text">CHAKRAVYUHA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;