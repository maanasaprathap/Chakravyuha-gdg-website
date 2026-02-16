import ContactCard from "./pages/Contact/ContactCard";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home_main from "./pages/Home/Home_main";
import Aboutsynsara from "./pages/Home/Aboutsynsara";
import Aboutinst from "./pages/Home/Aboutinst";
import ClubsSection from "./pages/Clubs/ClubsSection";
import GallerySection from "./pages/Home/GallerySection";
import EventPass from "./pages/Home/EventPass";
import Service from "./pages/Home/Service";
import ReachUsSection from "./ReachUsSection";
import FAQ from "./pages/FAQ/faq";
import "./pages/Home/Home.css";
import "./pages/Clubs/Clubs.css";
import "./pages/Schedule/Schedule.css";
import "./pages/Contact/contact.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SinglePage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <div className="body">
      <Nav onNavigate={scrollToSection} />
      <section id="home">
        <Home_main scrollToSection={scrollToSection} />
        <Aboutsynsara />
        <Aboutinst />
      </section>

      <section id="clubs" style={{ paddingTop: "80px" }}>
        <ClubsSection />
      </section>
      <section id="gallery" style={{ paddingTop: "80px" }}>
       <GallerySection />
      </section>
      <section id="event-pass" style={{ paddingTop: "80px" }}>
        <EventPass />
      </section>
      <section id="services" style={{ paddingTop: "80px" }}>
        <Service />
      </section>
      <section id="reach-us" style={{ paddingTop: "80px" }}>
        <ReachUsSection />
      </section>
      <section id="faq" style={{ paddingTop: "80px" }}>
        <FAQ />
      </section>
      <section id="contact" style={{ paddingTop: "80px" }}>
        <ContactCard />
      </section>
    </div>
  );
}
