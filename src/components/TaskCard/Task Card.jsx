import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, description }) => {
  return (
    <div className="task-card">
      <div className="card-icon green">
        <i className="fas fa-list"></i>
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <i className="fas fa-chevron-right arrow"></i>
    </div>
  );
};

export default TaskCard;
