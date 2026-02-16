import React from "react";
import "./ContactCard.css";

const contacts = [
  { name: "SARAVANAN T S", phone: "7708279915" },
  { name: "VEDHA SARADHI S", phone: "6379328450" },
  { name: "AJAY CS", phone: "9003039519" },
  { name: "SRIRAM KANNAN", phone: "6374307845" },
];

const socials = [
  { icon: "fa fa-envelope", label: "mit.chakravyuha@gmail.com", link: "mailto:mit.chakravyuha@gmail.com" },
  { icon: "fa fa-instagram", label: "chakravyuha.mit", link: "https://instagram.com/chakravyuha.mit" },
  { icon: "fa fa-envelope", label: "athenaeum@mitindia.edu", link: "mailto:athenaeum@mitindia.edu" },
  { icon: "fa fa-instagram", label: "mit_athenaeum", link: "https://instagram.com/mit_athenaeum" },
];

const ContactCard = () => (
  <section id="contact" className="contact-outer-wrapper">
    <div className="contact-glass-card">
      <h2 className="contact-main-title">TEAM ATHENAEUM</h2>
      
      <div className="contact-grid">
        {/* Left Side: Team Contacts */}
        <div className="contact-info-side">
          <h3 className="sub-header"><i className="fa fa-phone"></i> CONTACT US</h3>
          <div className="contacts-list">
            {contacts.map((c, i) => (
              <div key={i} className="person-row">
                <span className="person-name">{c.name}</span>
                <a href={`tel:${c.phone}`} className="person-phone">{c.phone}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: QR Codes */}
        <div className="qr-side">
          <div className="qr-container">
            <div className="qr-box">
              <div className="qr-image-wrapper">
                <img src="/web.png" alt="Website QR" />
              </div>
              <span>WEBSITE</span>
            </div>
            <div className="qr-box">
              <div className="qr-image-wrapper">
                <img src="/insta.png" alt="Instagram QR" />
              </div>
              <span>INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Social Links */}
      <div className="socials-footer">
        {socials.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="social-pill">
            <i className={s.icon}></i>
            <span className="pill-text">{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactCard;