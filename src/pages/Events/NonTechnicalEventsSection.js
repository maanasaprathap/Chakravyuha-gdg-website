import React from "react";
import events from "../../events.json";
import EventCard from "./EventCard";
import "./TechnicalEvents.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NonTechnicalEventsSection() {
  return (
    <div className="Tech-events container">
      <div className="tech-header">NON-TECHNICAL EVENTS</div>
      <div className="event-container row justify-content-center">
        {events
          .filter((event) => event.eventType === "non-technical")
          .map((event) => (
            <EventCard
              key={event.eventId}
              name={event.eventTitle}
              imgUrl={event.eventImage}
              url={`/${event.eventId}`}
              tagline={event.eventTagline}
            />
          ))}
      </div>
    </div>
  );
}
