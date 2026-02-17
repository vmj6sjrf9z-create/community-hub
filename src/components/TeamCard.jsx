import React from "react";
import "./teamCard.css";

const TeamCard = ({ teamName, teamDescription, color = "purple" }) => {
  return (
    <div className="team-card">
      <div className={`team-icon ${color}`}>
        <i className="fas fa-users"></i>
      </div>
      <div className="team-text">
        <h3>{teamName}</h3>
        <p>{teamDescription}</p>
      </div>
      <i className="fas fa-chevron-right arrow"></i>
    </div>
  );
};

export default TeamCard;
