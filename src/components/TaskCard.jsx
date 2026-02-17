import React from "react";
import "../styles/tasks.css";

const TaskCard = ({ color, title, due }) => {
  return (
    <div className="card">
      <div className={`card-icon ${color}`}>
        <i className="fas fa-tasks"></i>
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{due}</p>
      </div>
      <i className="fas fa-chevron-right arrow"></i>
    </div>
  );
};

export default TaskCard;
