import React from "react";
import { FaUtensils, FaBed, FaPhoneAlt, FaClipboardList } from "react-icons/fa";

const Service = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSeXmj8NnAdywRKsXzN9pCURWp2S5rtw9qM0U1nN_sYln3CkPg/viewform?usp=send_form";

  return (
    <section id="services" className="services-outer-container">
      <style>{`
        .services-outer-container {
          padding: 60px 20px;
          display: flex;
          justify-content: center; /* Horizontal Center */
          align-items: center;     /* Vertical Center */
          background: transparent;
          min-height: 100vh;       /* Takes full screen height to center card */
          width: 100%;
          box-sizing: border-box;
        }

        .services-glass-card {
          background: rgba(30, 10, 60, 0.6);
          backdrop-filter: blur(15px);
          width: 100%;
          max-width: 850px;
          border-radius: 24px;
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 50px 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
          margin: auto; /* Fallback centering */
        }

        .services-glass-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
        }

        .services-title {
          font-family: 'Audiowide-Regular', sans-serif;
          color: #fff;
          /* Adjusted clamp for better mobile fit */
          font-size: clamp(1.5rem, 7vw, 2.5rem);
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 0 15px rgba(168, 85, 247, 0.7);
          line-height: 1.2;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 40px;
        }

        .service-item {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          padding: 30px 20px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-item:hover {
          background: rgba(168, 85, 247, 0.2);
          transform: translateY(-5px);
          border-color: #a855f7;
        }

        .service-icon {
          font-size: 2.5rem;
          color: #a855f7;
          margin-bottom: 15px;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }

        .service-item h3 {
          color: #fff;
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }

        .service-item p {
          color: #d1d1f7;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .contact-footer {
          margin-top: 20px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          width: 100%;
        }

        .contact-label {
          color: #a855f7;
          font-family: 'Audiowide-Regular', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 20px;
        }

        .button-group {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          min-width: 180px;
        }

        .btn-primary {
          background: #a855f7;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }

        .btn-primary:hover {
          background: #b875ff;
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
        }

        .btn-outline {
          background: rgba(168, 85, 247, 0.05);
          border: 2px solid #a855f7;
        }

        .btn-outline:hover {
          background: rgba(168, 85, 247, 0.15);
          transform: translateY(-3px);
        }

        /* MOBILE RESPONSIVE QUERIES */
        @media (max-width: 768px) {
          .services-outer-container {
            padding: 40px 15px;
          }
          .services-glass-card {
            padding: 35px 20px;
            width: 100%;
          }
          .services-grid {
            grid-template-columns: 1fr; /* Stacks cards on mobile */
            gap: 20px;
          }
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          .action-button {
            width: 100%; /* Full width buttons on mobile */
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 1.6rem;
          }
          .service-item {
            padding: 20px 15px;
          }
        }
      `}</style>

      <div className="services-glass-card">
        <h2 className="services-title">Services & Hospitality</h2>

        <div className="services-grid">
          {/* FOOD SERVICE */}
          <div className="service-item">
            <FaUtensils className="service-icon" />
            <h3>Hospitality</h3>
            <p>Delicious food and refreshments will be provided to all registered participants during the event.</p>
          </div>

          {/* ACCOMMODATION */}
          <div className="service-item">
            <FaBed className="service-icon" />
            <h3>Stay</h3>
            <p>Comfortable accommodation is available both inside the campus and in nearby hostels on prior request.</p>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="contact-footer">
          <span className="contact-label">PLAN YOUR VISIT — REACH OUT FOR SUPPORT</span>
          
          <div className="button-group">
            {/* ACCOMMODATION FORM BUTTON */}
            <a 
              href={formLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-button btn-primary"
            >
              <FaClipboardList size={18} />
              BOOK 
            </a>

            {/* CONTACT BUTTON */}
            <a href="tel:9363595133" className="action-button btn-outline">
              <FaPhoneAlt size={16} />
              Sudhahar R — 9363595133
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;