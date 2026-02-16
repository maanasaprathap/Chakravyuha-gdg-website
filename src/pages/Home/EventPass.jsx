import React from "react";

const EventPass = () => {
  const passes = [
    {
      tier: "BRONZE PASS",
      title: "6 Events",
      price: "₹499",
      features: ["Access to any 6 Technical Events", "Participation Certificate", "Basic Event Kit"],
      recommended: false,
    },
    {
      tier: "GOLD PASS",
      title: "Full Access",
      price: "₹999",
      features: ["12+ Events Access", "1 Premium Workshop", "Priority Entry", "Full Delegate Kit", "Exclusive Networking"],
      recommended: true, 
    },
    {
      tier: "SILVER PASS",
      title: "9 Events",
      price: "₹750",
      features: ["Access to any 9 Technical Events", "Participation Certificate", "Standard Event Kit", "Workshop Discount"],
      recommended: false,
    },
  ];

  return (
    <section id="event-pass" className="pass-section">
      <style>{`
        .pass-section {
          padding: 80px 20px;
          display: flex;
          flex-direction: column;
          align-items: center; /* Centers the heading */
          justify-content: center;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .pass-header {
          font-family: 'Audiowide-Regular', sans-serif;
          font-size: clamp(2rem, 8vw, 3.5rem);
          color: #fff;
          text-align: center;
          margin-bottom: 70px;
          letter-spacing: 2px;
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
        }

        .pass-grid {
          display: grid;
          /* auto-fit with a max-width of 350px keeps cards centered and prevents stretching */
          grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
          gap: 40px;
          width: 100%;
          max-width: 1200px;
          justify-content: center; /* Crucial for centering the grid items */
          align-items: start;
        }

        .pass-card {
          background: rgba(30, 10, 60, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 24px;
          padding: 50px 30px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          box-sizing: border-box;
        }

        .pass-card.recommended {
          border-color: #a855f7;
          background: rgba(50, 20, 100, 0.6);
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.25);
          transform: scale(1.05); /* Slight lift for the recommended card on desktop */
          z-index: 2;
        }

        .badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff5ef7;
          color: white;
          padding: 6px 24px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 1px;
          box-shadow: 0 0 15px #ff5ef7;
          white-space: nowrap;
          font-family: 'Audiowide-Regular', sans-serif;
        }

        .pass-tier {
          font-family: 'Audiowide-Regular', sans-serif;
          color: #a855f7;
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .pass-title {
          font-size: 2rem;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .pass-price {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: #fff;
          font-weight: 800;
          margin-bottom: 30px;
          display: block;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
          width: 100%;
        }

        .features-list li {
          color: #d1d1f7;
          margin-bottom: 16px;
          font-size: 1.05rem;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.4;
        }

        /* Styling the Checkmark exactly like the image */
        .features-list li::before {
          content: '✓';
          color: #a855f7;
          font-weight: 900;
          font-size: 1.2rem;
        }

        /* Desktop Hover Effects */
        @media (min-width: 1024px) {
          .pass-card:hover {
            transform: translateY(-10px);
            border-color: #a855f7;
          }
          .pass-card.recommended:hover {
            transform: scale(1.1) translateY(-10px);
          }
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 768px) {
          .pass-section {
            padding: 50px 10px;
          }
          .pass-header {
            margin-bottom: 50px;
          }
          .pass-grid {
            gap: 50px; /* Increased gap to prevent badge overlap */
            padding: 20px 10px;
          }
          .pass-card {
            padding: 40px 20px;
          }
          .pass-card.recommended {
            transform: scale(1); /* Reset scale on mobile to avoid layout overlap */
            margin: 10px 0;
          }
          .pass-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <h2 className="pass-header">EVENT PASSES</h2>

      <div className="pass-grid">
        {passes.map((pass, index) => (
          <div
            key={index}
            className={`pass-card ${pass.recommended ? "recommended" : ""}`}
          >
            {pass.recommended && <div className="badge">BEST VALUE</div>}
            
            <div className="pass-tier">{pass.tier}</div>
            <h3 className="pass-title">{pass.title}</h3>
            <div className="pass-price">{pass.price}</div>
            
            <ul className="features-list">
              {pass.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPass;