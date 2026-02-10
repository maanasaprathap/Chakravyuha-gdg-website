import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home_main from "./pages/Home/Home_main";
import Aboutsynsara from "./pages/Home/Aboutsynsara";
import Aboutinst from "./pages/Home/Aboutinst";
import ClubsSection from "./pages/Clubs/ClubsSection";
import ReachUsSection from "./ReachUsSection";
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
      <section id="reach-us" style={{ paddingTop: "80px" }}>
        <ReachUsSection />
      </section>
    </div>
  );
}
