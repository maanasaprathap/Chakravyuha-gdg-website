import React, { useState, useEffect, useRef } from "react";
import useIsMobile from "../../components/useIsMobile";
import "./Home_main.css";
import "./Home_main2.css";

const Home_main = () => {
  const registerRef = useRef(null);
  const unstopLink = "https://unstop.com/college-fests/chakravyuha-2026-madras-institute-of-technology-mit-anna-university-chennai-tamil-nadu-439521";
  
  const countDownDate = new Date("28 February, 2026").getTime();
  const isMobile = useIsMobile();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDownDate - now > 0 ? countDownDate - now : 0;
      
      setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  // Helper component for the timer blocks
  const TimerBlock = ({ value, label }) => (
    <div style={{ margin: isMobile ? "0 3px" : "0 10px", textAlign: "center" }}>
      <div style={{
        fontSize: isMobile ? "1.1rem" : "2rem",
        fontWeight: "bold",
        fontFamily: "Audiowide-Regular",
        background: "rgba(255, 255, 255, 0.08)",
        padding: isMobile ? "6px 4px" : "12px 8px",
        borderRadius: "10px",
        minWidth: isMobile ? "45px" : "75px",
        border: "1px solid rgba(180, 150, 255, 0.25)",
        boxShadow: "0 0 15px rgba(180, 150, 255, 0.15)",
        color: "#fff"
      }}>
        {value < 10 ? `0${value}` : value}
      </div>
      <div style={{ 
        fontSize: isMobile ? "8px" : "12px", 
        marginTop: "6px", 
        color: "#E0E0FF", 
        textTransform: "uppercase", 
        letterSpacing: "1px",
        fontFamily: "Audiowide-Regular"
      }}>
        {label}
      </div>
    </div>
  );

  return (
    <div className="home-wrapper" style={{ overflowX: "hidden", position: "relative" }}>
      <div
        className="text-white text-center"
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "100vw", // Force within mobile width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: isMobile ? "0 10px" : "0 20px",
          boxSizing: "border-box",
          transform: isMobile ? "translateY(-20px)" : "translateY(-40px)", 
        }}
      >
        <div
          style={{ zIndex: 10, width: "100%" }}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* MAIN TITLE - OPTIMIZED FOR ALL SCREENS */}
          <h1
            style={{
              fontSize: isMobile ? "clamp(1.8rem, 8.5vw, 2.5rem)" : "calc(32px + 4vw)",
              textShadow: "0px 0px 20px rgba(180, 150, 255, 0.5)",
              fontWeight: "700",
              fontFamily: "Audiowide-Regular",
              color: "white",
              lineHeight: "1.1",
              margin: "0 auto 10px auto",
              textAlign: "center",
              letterSpacing: isMobile ? "1px" : "6px",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            CHAKRAVYUHA '26
          </h1>

          {/* PRIZE POOL SECTION */}
          <div className="prize-pool-container" style={{ marginBottom: "15px" }}>
            <h2
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: isMobile ? "1.8rem" : "3.5rem",
                fontWeight: 900,
                color: "#E0E0FF",
                textShadow: "2px 2px 10px rgba(180, 150, 255, 0.6)",
                margin: "0"
              }}
            >
              5 Lakhs+ Prize Pool
            </h2>
            <p
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: isMobile ? "1.3rem" : "2rem",
                fontWeight: 700,
                color: "#E0E0FF",
                textShadow: "1px 1px 8px rgba(180, 150, 255, 0.5)",
                marginTop: "-8px"
              }}
            >
              10+ Internships
            </p>
          </div>

          {/* COUNTDOWN TIMER DISPLAY */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            margin: isMobile ? "15px 0" : "20px 0"
          }}>
            <TimerBlock value={days} label="Days" />
            <TimerBlock value={hours} label="Hours" />
            <TimerBlock value={minutes} label="Mins" />
            <TimerBlock value={seconds} label="Secs" />
          </div>

          {/* DATE SECTION */}
          <div style={{ margin: "15px 0" }}>
            <strong style={{ 
              fontSize: isMobile ? "11px" : "15px", 
              color: "#fff", 
              fontFamily: "Audiowide-Regular",
              letterSpacing: "2px",
              display: "block",
              marginBottom: "8px"
            }}>
              TUNE IN AND SIGN UP !
            </strong>
            <div 
              style={{ 
                display: "inline-block",
                padding: isMobile ? "8px 15px" : "10px 20px",
                border: "2px solid rgba(180, 150, 255, 0.4)",
                borderRadius: "12px",
                background: "rgba(180, 150, 255, 0.05)",
                fontSize: isMobile ? "0.9rem" : "1.4rem",
                fontWeight: "bold",
                color: "#fff",
                boxShadow: "0 0 15px rgba(180, 150, 255, 0.1)"
              }}
            >
              28-02-2026 — 01-03-2026
            </div>
          </div>

          {/* REGISTER BUTTON */}
          <div style={{ marginTop: isMobile ? "20px" : "30px" }} ref={registerRef}>
            <a
              href={unstopLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-block", position: "relative" }}
            >
              {/* Outer Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  right: "-4px",
                  bottom: "-4px",
                  borderRadius: "50px",
                  background: "rgba(180,150,255,0.5)",
                  filter: "blur(12px)",
                  zIndex: 0,
                }}
              ></div>

              <button
                style={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "#5D3FD3", 
                  color: "white",
                  fontSize: isMobile ? "1.1rem" : "1.6rem",
                  fontWeight: 900,
                  padding: isMobile ? "10px 30px" : "15px 50px",
                  borderRadius: "50px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  fontFamily: "Audiowide-Regular",
                  letterSpacing: "1px"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                REGISTER
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_main;