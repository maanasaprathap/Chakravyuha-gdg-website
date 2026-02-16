import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Event-details.css";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import clubEvents from "../../clubEvents.json";



function EventDetails({ eventDetail }) {
    const { eventId } = useParams();
    const [flipped, setFlipped] = useState(false);

    const handleFlipClick = () => {
      setFlipped(!flipped);
    };

    // If eventDetail is not passed as prop, find it from clubEvents
    let event = eventDetail;
    if (!event && eventId) {
        // Search all club events
        for (const club of clubEvents) {
            const allEvents = [
                ...(club.technicalEvents || []),
                ...(club.funTechEvents || []),
                ...(club.workshops || []),
                ...(club.hackathons || [])
            ];
            const found = allEvents.find(e => e.eventId === eventId);
            if (found) {
                event = { ...found, clubName: club.clubName, clubId: club.clubId };
                break;
            }
        }
    }

    if (!event) {
        return (
            <div>
                <Nav />
                <div style={{ color: "#fff", textAlign: "center", marginTop: "100px" }}>
                    <h2>Event not found</h2>
                    <Link to="/" style={{ color: "#a855f7" }}>Go back to home</Link>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <Nav/> 
        <div style={{ overflow: "hidden" }}>
            {event.eventPosterMob && (
                <div className="mobile-img-con">
                    <img className="mobile-img" src={event.eventPosterMob} alt="mobile-icon"></img>
                </div>
            )}
            <div id="event-details-component">
                <div id="event-details">
                  
                    <div className="event-top">
                        <div id="event-title-info">
                            <h2 id="event-title">{event.eventTitle}</h2>
                            {event.clubName && <h5 id="event-name">{event.clubName}</h5>}
                            {event.eventName && <h5 id="event-name">{event.eventName}</h5>}
                            {event.eventTagline && <div id="event-tagline">{event.eventTagline}</div>}
                            
                            {/* About Event */}
                            <div className="event-section">
                                <h5 className="section-title">About Event</h5>
                                <p id="event-description" dangerouslySetInnerHTML={{ __html: event.eventDescription }}></p>
                            </div>

                            {/* Event Details */}
                            <div className="event-section">
                                <h5 className="section-title">Event Details</h5>
                                {event.mode && <div id="event-description"><b>Mode:</b> <i style={{color: "#a855f7"}}>{event.mode}</i></div>}
                                {event.venue && <div id="event-description"><b>Venue:</b> {event.venue}</div>}
                                {(event.EventDate || event.eventDate) && (
                                    <div id="event-description"><b>Event Date:</b> {event.EventDate || event.eventDate}</div>
                                )}
                                {event.ReportingTime && <div id="event-description"><b>Reporting Time:</b> {event.ReportingTime}</div>}
                                {event.EventTime && <div id="event-description"><b>Event Time:</b> {event.EventTime}</div>}
                            </div>

                            {/* Event Instructions */}
                            {event.instructions && event.instructions.length > 0 && (
                                <div className="event-section">
                                    <h5 className="section-title">Event Instructions</h5>
                                    <ul>
                                        {event.instructions.map((instruction, index) => (
                                            <li key={index}>{instruction}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Rounds/Rules */}
                            {event.eventRounds && event.eventRounds.length > 0 && event.eventRounds.map((round, idx) => (
                                <div className="round-rules" key={idx}>
                                    <h5>{round.roundName}</h5>
                                    {round.roundDescription && <p>{round.roundDescription}</p>}
                                    {round.roundRules && (
                                        <ul>
                                            {round.roundRules.map((rule, index) => (
                                                <li key={index}>
                                                    {(/^[A-Z]$/i.test(rule[0]) ? rule[0].toUpperCase() : rule[0]) + rule.slice(1)}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            {event.rounds && event.rounds.length > 0 && (
                                <div className="event-section">
                                    <h5 className="section-title">Rounds</h5>
                                    {event.rounds.map((round, index) => (
                                        <div className="round-info" key={index}>
                                            <h6><b>Round {index + 1}: {round.roundName || `Round ${index + 1}`}</b></h6>
                                            <p>{round.roundDescription || round.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="event-bottom">
                        {/* Prize Section */}
                        {(event.Winners || event.prize1 || event.prizePool || event.prizes) && (
                            <div className="event-section prize-section">
                                <h5 className="section-title">Prizes</h5>
                                {event.Winners && <div id="event-description"><b>Winners:</b> {event.Winners}</div>}
                                {event.prize1 && <div id="event-description"><b>1st Prize:</b> {event.prize1}</div>}
                                {event.prize2 && <div id="event-description"><b>2nd Prize:</b> {event.prize2}</div>}
                                {event.prize3 && <div id="event-description"><b>3rd Prize:</b> {event.prize3}</div>}
                                {event.prizePool && <div id="event-description"><b>Prize Pool:</b> {event.prizePool}</div>}
                                {event.prizes && typeof event.prizes === 'string' && (
                                    <div id="event-description">{event.prizes}</div>
                                )}
                                {event.prizes && Array.isArray(event.prizes) && event.prizes.map((prize, idx) => (
                                    <div id="event-description" key={idx}>{prize}</div>
                                ))}
                                {!event.Winners && !event.prize1 && !event.prizePool && !event.prizes && (
                                    <div id="event-description"><i style={{color: "#888"}}>Prize details to be announced</i></div>
                                )}
                            </div>
                        )}

                        {/* Registration Deadline */}
                        {event.eventCloseDate && (
                            <div id="event-description">
                                <b>Last date for registration:</b> <i style={{color: "#a855f7"}}>{event.eventCloseDate}</i>
                            </div>
                        )}

                        {/* Contact Section */}
                        {(event.coordinatorDetails || event.contacts) && (
                            <div className="event-section">
                                <div id="query" style={{ marginRight: "4px", fontSize: "14px" }}>
                                    <b style={{color: "#a855f7"}}>For queries, contact:</b>
                                </div>
                                <div id="event-queries-list">
                                    {event.coordinatorDetails && event.coordinatorDetails.map((coordinator, index) => (
                                        <div id="event-queries" key={index}>
                                            <b>{coordinator.eventCoordinatorName || coordinator.name}</b>
                                            <pre> </pre>
                                            <a id="con-link" href={"tel:" + (coordinator.eventCoordinatorNumber || coordinator.phone)}>
                                                {coordinator.eventCoordinatorNumber || coordinator.phone}
                                            </a>
                                        </div>
                                    ))}
                                    {event.contacts && event.contacts.map((contact, index) => (
                                        <div id="event-queries" key={index}>
                                            <b>{contact.name}</b>
                                            <pre> </pre>
                                            <a id="con-link" href={"tel:" + contact.phone}>{contact.phone}</a>
                                        </div>
                                    ))}
                                </div>
                                {!event.coordinatorDetails && !event.contacts && (
                                    <div id="event-description"><i style={{color: "#888"}}>Contact details to be announced</i></div>
                                )}
                            </div>
                        )}

                        <div id="button-holder">
                            {event.eventClosed ? (
                                <b className="cld1">
                                    <i>Registration closed</i>
                                </b>
                            ) : event.eventUrl ? (
                                <a target="_blank" href={event.eventUrl} rel="noreferrer"><button className="event__btn reg-btn" id="register"><span>Register</span></button></a>
                            ) : event.clubId === "TEDcMIT" ? (
                                <a target="_blank" href="https://clubs.mitindia.edu/src/TedcMit/" rel="noreferrer">
                                    <button className="event__btn reg-btn" id="register"><span>Registration (External Link)</span></button>
                                </a>
                            ) : (
                                <b className="cld1">
                                    <i>Registration link coming soon</i>
                                </b>
                            )}
                            {event.brochureUrl && (
                                <a href={event.brochureUrl} target="_blank" rel="noreferrer">
                                    <button className="event__btn" id="download"><span>Download Brochure</span></button>
                                </a>
                            )}
                            {event.eventId && !event.brochureUrl && eventDetail && (
                                <Link to={`/${event.eventId}Brochure`} target="_blank">
                                    <button className="event__btn" id="download" target="_blank"><span>Download Brochure</span></button>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>
                {event.eventPoster && <img id="event-image" src={event.eventPoster} alt="event-poster" />}
                {!event.eventPoster && event.eventImage && <img id="event-image" src={event.eventImage} alt="event-poster" />}
            </div>
        </div>
        </div>
    );
}

export default EventDetails;