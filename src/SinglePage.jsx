import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home_main from "./pages/Home/Home_main";
import Aboutsynsara from "./pages/Home/Aboutsynsara";
import Aboutinst from "./pages/Home/Aboutinst";
import events from "./events.json";
import EventCard from "./pages/Events/EventCard";
import TechnicalEventsSection from "./pages/Events/TechnicalEventsSection";
import NonTechnicalEventsSection from "./pages/Events/NonTechnicalEventsSection";
import ScheduleSection from "./pages/Schedule/ScheduleSection";
import ContactSection from "./pages/Contact/ContactSection";
import ReachUsSection from "./ReachUsSection";
import "./pages/Home/Home.css";
import "./pages/Events/Events.css";
import "./pages/Events/TechnicalEvents.css";
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

  const mainEvents = events.filter((e) => e.eventType === "main");

  const getSectionId = (eventUrl) => {
    if (eventUrl === "Technical") return "technical-events";
    if (eventUrl === "non-technical") return "non-technical-events";
    return null;
  };

  return (
    <div className="body">
      <Nav onNavigate={scrollToSection} />
      <section id="home">
        <Home_main scrollToSection={scrollToSection} />
        <Aboutsynsara />
        <Aboutinst />
      </section>

      <section id="events" style={{ paddingTop: "80px" }}>
        <div className="wrapper">
          {mainEvents.map((event) => {
            const sectionId = getSectionId(event.eventUrl);
            if (sectionId) {
              return (
                <a
                  key={event.eventId}
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card">
                    <div className="card__body">
                      <img
                        src={event.eventImage}
                        className="card__image"
                        alt="card"
                      />
                      <h2 className="card__title">{event.eventTitle}</h2>
                    </div>
                    <button className="card__btn">
                      <span>View Events</span>
                    </button>
                  </div>
                </a>
              );
            }
            return (
              <Link to={`/${event.eventId}`} key={event.eventId} style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="card__body">
                    <img
                      src={event.eventImage}
                      className="card__image"
                      alt="card"
                    />
                    <h2 className="card__title">{event.eventTitle}</h2>
                  </div>
                  <button className="card__btn">
                    <span>View Events</span>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="technical-events" style={{ paddingTop: "80px" }}>
        <TechnicalEventsSection />
      </section>

      <section id="non-technical-events" style={{ paddingTop: "80px" }}>
        <NonTechnicalEventsSection />
      </section>

      <section id="schedule" style={{ paddingTop: "80px" }}>
        <ScheduleSection />
      </section>

      <section id="contact" style={{ paddingTop: "80px" }}>
        <ContactSection />
      </section>

      <section id="reach-us" style={{ paddingTop: "80px" }}>
        <ReachUsSection />
      </section>
    </div>
  );
}
