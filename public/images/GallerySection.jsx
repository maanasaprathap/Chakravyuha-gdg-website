
// src/pages/Home/GallerySection.jsx
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

const galleryContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
};

const galleryTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "2rem",
  color: "#fff",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
};

const imageWrapperStyle = {
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  transition: "transform 0.3s ease",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  display: "block",
};

const GallerySection = () => {
  return (
    <section style={{ backgroundColor: "#1a0a2e", padding: "4rem 0" }}>
      <div style={galleryContainerStyle}>
        <h2 style={galleryTitleStyle}>Gallery</h2>
        <div style={gridStyle}>
          {images.map((img, index) => (
            <div
              key={index}
              style={imageWrapperStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={img} alt={`Gallery ${index + 1}`} style={imageStyle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;