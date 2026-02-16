import React from "react";
import "./pdf.css";

export default function ReachUsSection() {
  return (
    <section className="reach-instructions-container">
      {/* REACH US SECTION */}
      <div className="section-block" data-aos="fade-up">
        <h2 className="modern-title">REACH US</h2>
        <div className="glow-card-wrapper">
          <div className="violet-card">
            <p className="reachus-text">
              We have buses operating from <span className="highlight">Tambaram</span>.
              <br />
              <br />
              Participants can use these buses to reach our college. The timings
              will be updated shortly.
            </p>
          </div>
        </div>
      </div>

      {/* INSTRUCTIONS SECTION */}
      <div className="section-block" data-aos="fade-up" data-aos-delay="100">
        <h2 className="modern-title">INSTRUCTIONS</h2>
        <div className="glow-card-wrapper">
          <div className="violet-card">
            <ul className="instructions-list">
              <li>
                <span className="list-num">01.</span>
                <p>Students must carry their <b>college ID card</b> on the day of the event.</p>
              </li>
              <li>
                <span className="list-num">02.</span>
                <p>Buses will only operate from Tambaram. For more details regarding the bus facilities, contact the coordinators.</p>
              </li>
              <li>
                <span className="list-num">03.</span>
                <p>All students must come in <b>formal attire</b>.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}