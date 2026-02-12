import "./ClubCard.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ClubCard({ name, url, imgUrl, tagline }) {
    return (
            <div className="club_card_container box col col-6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <div className="club_card_image_wrapper">
                    <img className="club_card_image" src={imgUrl} alt="club" />
                </div>
                <div className="club_card_content">
                    <h3 className="club_card_title">{name}</h3>
                    <Link to={url} className="club_view_button">
                        View Events
                    </Link>
                </div>
            </div> 
    );
}
