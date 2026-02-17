//tasks page 

import React from "react";
import "../styles/tasks.css";
import { FaPlus, FaTasks, FaChevronRight, FaBell } from "react-icons/fa";

const TaskCard = ({ title, dueDate, colorClass }) => {
  return (
    <div className="card">
      <div className={`card-icon ${colorClass}`}>
        <FaTasks />
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{dueDate}</p>
      </div>
      <FaChevronRight className="arrow" />
    </div>
  );
};

const Tasks = () => {
  const tasks = [
    { title: "Finish project report", dueDate: "Due: Today, 5 PM", colorClass: "blue" },
    { title: "Team meeting prep", dueDate: "Due: Tomorrow, 10 AM", colorClass: "green" },
    { title: "Update website content", dueDate: "Due: Friday, 12 PM", colorClass: "purple" },
  ];

  return (
    <div className="phone">
      {/* HEADER */}
      <header className="topbar">
        <h1>Tasks</h1>
        <div className="top-icons">
          <FaPlus />
          <FaBell />
        </div>
      </header>

      {/* GREETING */}
      <section className="greeting">
        <p>Here are your current tasks</p>
      </section>

      {/* TASK CARDS */}
      <section className="cards">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            dueDate={task.dueDate}
            colorClass={task.colorClass}
          />
        ))}
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="nav-item active">
          <i className="fas fa-list"></i>
          <span>Tasks</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-users"></i>
          <span>Teams</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-gear"></i>
          <span>Settings</span>
        </div>
      </nav>
    </div>
  );
};

export default Tasks;
