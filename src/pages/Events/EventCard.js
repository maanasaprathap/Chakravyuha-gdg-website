import "./EventCard.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function EventCard({ name, url, imgUrl, tagline }) {
    return (
            <div className="event_card_container box col col-6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <div className="event_card_image_wrapper">
                    <img className="event_card_image" src={imgUrl} alt="event" />
                </div>
                <div className="event_card_content">
                    <h3 className="event_card_title">{name}</h3>
                    <Link to={url} className="event_view_button">
                        View Details
                    </Link>
                </div>
            </div> 
    );
}