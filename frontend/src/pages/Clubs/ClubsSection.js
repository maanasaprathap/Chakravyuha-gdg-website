import React from "react";
import "./Clubs.css";
import ClubCard from "./ClubCard";
import clubs from "../../clubs.json";

export default function ClubsSection() {
  return (
    <div className="clubs_section">
      <div className="clubs_header">
        <h1 className="clubs_title">Our Clubs</h1>
        <p className="clubs_subtitle">Explore our diverse community of tech enthusiasts</p>
      </div>
      <div className="clubs_grid row">
        {clubs.map((club) => (
          <ClubCard
            key={club.clubId}
            name={club.clubName}
            url={`/club/${club.clubId}`}
            imgUrl={club.clubImage}
            tagline={club.clubTagline}
          />
        ))}
      </div>
    </div>
  );
}
