
import React from "react";

function TaskInfo({ task, onBack }) {
  return (
    <div className="phone">
      <header className="topbar">
        <div className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <h1 style={{ color: task.title === "Not set" ? "red" : "white" }}>
          {task.title}
        </h1>
      </header>

      <section className="hero-card">
        <div className={`hero-icon ${task.color}`}>
          <i className="fas fa-tasks"></i>
        </div>
        <p>Created at: {task.createdAt}</p>
        <p className="due">
          Due:{" "}
          <span style={{ color: task.due === "Not set" ? "red" : "#9aa4b2" }}>
            {task.due}
          </span>
        </p>
      </section>

      <section className="details">
        <h3>Community:</h3>
        <p>{task.community}</p>

        <h3>Description:</h3>
        <div className="description-text">
          {task.description === "Empty" ? (
            <p style={{ color: "red" }}>Empty</p>
          ) : (
            task.description.split("\n").map((line, idx) => <p key={idx}>{line}</p>)
          )}
        </div>

        <h3>Priority:</h3>
        <div className={`priority ${task.color}`}>
          <span style={{ color: "white" }}>{task.priority}</span>
        </div>
      </section>

      <button className="complete-btn">Mark as Completed</button>
    </div>
  );
}

export default TaskInfo;
