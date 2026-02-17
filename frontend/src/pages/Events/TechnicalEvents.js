import React from 'react'
import events from "../../events.json";
import EventCard from './EventCard';
import "./TechnicalEvents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

export default function TechnicalEvents() {
  return (
    <div>
      <Nav/>
    <div className="Tech-events container">
        <div className="tech-header">TECHNICAL EVENTS</div>
        <div className="event-container row justify-content-center">
            {events
                .filter((event) => event.eventType === "technical")
                .map((event) => (
                  // <div className="event-item">
                    <EventCard
                        key={event.eventId}
                        name={event.eventTitle}
                        imgUrl={event.eventImage}
                        url={`/${event.eventId}`}
                        tagline={event.eventTagline}
                    />
                  // </div>
                ))}
        </div>
    </div>
    </div>
  )
}