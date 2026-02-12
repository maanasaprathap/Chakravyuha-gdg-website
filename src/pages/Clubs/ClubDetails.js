import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import EventCard from "../Events/EventCard";
import clubs from "../../clubs.json";
import clubEvents from "../../clubEvents.json";
import "./ClubDetails.css";

export default function ClubDetails() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.clubId === clubId);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [clubId]);

  if (!club) {
    return (
      <div className="club_not_found">
        <h1>Club Not Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  // Get club events from new structure
  const clubData = clubEvents.find((c) => c.clubId === clubId);
  
  if (!clubData) {
    return (
      <div className="club_not_found">
        <h1>No Events Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const techEvents = clubData.technicalEvents || [];
  const funTechEvents = clubData.funTechEvents || [];
  const workshops = clubData.workshops || [];
  const hackathons = clubData.hackathons || [];
  
  const allEvents = [...techEvents, ...funTechEvents, ...workshops, ...hackathons];

  // Get filtered events based on active category
  const getFilteredEvents = () => {
    switch(activeCategory) {
      case "tech":
        return techEvents;
      case "fun-tech":
        return funTechEvents;
      case "workshops":
        return workshops;
      case "hackathons":
        return hackathons;
      default:
        return allEvents;
    }
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className="club_details_page">
      <Nav />
      <div className="club_hero">
        <div className="club_hero_content">
          <h1 className="club_name">{club.clubName}</h1>
          <p className="club_tagline">{club.clubTagline}</p>
          <p className="club_description">{club.clubDescription}</p>
          {club.website && (
            <a href={club.website} target="_blank" rel="noopener noreferrer" className="club_website_link">
              Visit Website
            </a>
          )}
        </div>
      </div>

      {allEvents.length > 0 && (
        <div className="category_nav_container">
          <div className="category_nav">
            <button 
              className={`category_btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Events
            </button>
            {techEvents.length > 0 && (
              <button 
                className={`category_btn ${activeCategory === "tech" ? "active" : ""}`}
                onClick={() => setActiveCategory("tech")}
              >
                Technical Events
              </button>
            )}
            {funTechEvents.length > 0 && (
              <button 
                className={`category_btn ${activeCategory === "fun-tech" ? "active" : ""}`}
                onClick={() => setActiveCategory("fun-tech")}
              >
                Fun Tech
              </button>
            )}
            {workshops.length > 0 && (
              <button 
                className={`category_btn ${activeCategory === "workshops" ? "active" : ""}`}
                onClick={() => setActiveCategory("workshops")}
              >
                Workshops
              </button>
            )}
            {hackathons.length > 0 && (
              <button 
                className={`category_btn ${activeCategory === "hackathons" ? "active" : ""}`}
                onClick={() => setActiveCategory("hackathons")}
              >
                Hackathons
              </button>
            )}
          </div>
        </div>
      )}

      <div className="club_events_section">
        {filteredEvents.length > 0 ? (
          <div className="event_category">
            <div className="events_grid row">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.eventId}
                  name={event.eventTitle}
                  url={`/event/${event.eventId}`}
                  imgUrl={club.clubImage}
                  tagline={event.eventDescription.substring(0, 80) + "..."}
                />
              ))}
            </div>
          </div>
        ) : null}

        {allEvents.length === 0 && (
          <div className="no_events">
            <p>No events available for this club yet. Stay tuned!</p>
          </div>
        )}
      </div>

      <div className="back_button_container">
        <Link to="/#clubs" className="back_button">
          Back to Clubs
        </Link>
      </div>
    </div>
  );
}
