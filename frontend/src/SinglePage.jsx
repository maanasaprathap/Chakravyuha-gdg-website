import React from "react";
import Header from "./components/Header";
import ParticleCanvas from "./components/ParticleCanvas";
import Hero from "./components/Hero";
import About from "./components/About";
import ClubsSection from "./components/ClubsSection";
import EventPass from "./components/EventPass";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import ReachUs from "./components/ReachUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export default function SinglePage() {
  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <ClubsSection />
        <EventPass />
        <Services />
        <Gallery />
        <FAQ />
        <ReachUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
