import React from "react";

const EventPass = () => {
  const events = [
    {
      title: "12 Events + 1 Workshop",
      price: "₹999",
      link: "https://forms.gle/your-form-link-1",
    },
    {
      title: "9 Events",
      price: "₹750",
      link: "https://forms.gle/your-form-link-2",
    },
    {
      title: "6 Events",
      price: "₹499",
      link: "https://forms.gle/your-form-link-3",
    },
  ];

  return (
    <section
      className="event-pass-section"
      style={{
        padding: "50px 20px",
        backgroundColor: "#0d0221", // dark purple
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3.5rem",
          color: "#ff5ef7",
          textShadow:
            "0 0 10px #ff5ef7, 0 0 20px #ff5ef7, 0 0 30px #a855f7, 0 0 40px #8b5cf6",
          marginBottom: "50px",
        }}
      >
        Event Passes
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 300px",
              backgroundColor: "#1a0033",
              borderRadius: "20px",
              padding: "30px 20px",
              boxShadow:
                "0 0 15px #ff5ef7, 0 0 30px #a855f7, 0 0 45px #8b5cf6",
              transition: "transform 0.3s, box-shadow 0.3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "270px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow =
                "0 0 20px #ff5ef7, 0 0 40px #a855f7, 0 0 60px #8b5cf6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 15px #ff5ef7, 0 0 30px #a855f7, 0 0 45px #8b5cf6";
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "#ff5ef7",
                  textShadow:
                    "0 0 8px #ff5ef7, 0 0 16px #a855f7, 0 0 24px #8b5cf6",
                  marginBottom: "15px",
                }}
              >
                {event.title}
              </h3>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  textShadow:
                    "0 0 6px #ff5ef7, 0 0 12px #a855f7, 0 0 18px #8b5cf6",
                  marginBottom: "15px",
                }}
              >
                {event.price}
              </p>
            </div>

            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  backgroundColor: "#a855f7",
                  color: "#fff",
                  padding: "12px 28px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow:
                    "0 0 10px #ff5ef7, 0 0 20px #a855f7, 0 0 30px #8b5cf6",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px #ff5ef7, 0 0 30px #a855f7, 0 0 45px #8b5cf6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px #ff5ef7, 0 0 20px #a855f7, 0 0 30px #8b5cf6";
                }}
              >
                REGISTER
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPass;
