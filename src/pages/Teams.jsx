import React from "react";
import "../styles/teams.css"; // Link to CSS for this page

const Teams = () => {
  return (
    <div className="phone">

      {/* HEADER */}
      <header className="topbar">
        <h1>Teams</h1>
        <div className="top-icons">
          <i className="fas fa-plus"></i> {/* Add new team */}
          <i className="fa-regular fa-bell"></i>
        </div>
      </header>

      {/* GREETING / SUBTITLE */}
      <section className="greeting">
        <p>Here are your current teams</p>
      </section>

      {/* TEAM CARDS */}
      <section className="cards">
        <div className="card">
          <div className="card-icon blue"><i className="fas fa-users"></i></div>
          <div className="card-text">
            <h3>Design Team</h3>
            <p>5 members</p>
          </div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div className="card">
          <div className="card-icon green"><i className="fas fa-users"></i></div>
          <div className="card-text">
            <h3>Development Team</h3>
            <p>8 members</p>
          </div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div className="card">
          <div className="card-icon purple"><i className="fas fa-users"></i></div>
          <div className="card-text">
            <h3>Marketing Team</h3>
            <p>4 members</p>
          </div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>

        <div className="nav-item">
          <i className="fas fa-list"></i>
          <span>Tasks</span>
        </div>

        <div className="nav-item active">
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

export default Teams;
