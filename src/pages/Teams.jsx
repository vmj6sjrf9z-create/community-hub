import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import "../styles/teams.css";

const Teams = () => {
  return (
    <div className="page-container">
      <TopNav title="Teams" />
      <div className="page-content">
        <section className="cards">
          <div className="card">
            <div className="card-icon blue">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-text">
              <h3>Marketing Team</h3>
              <p>10 members</p>
            </div>
            <i className="fas fa-chevron-right arrow"></i>
          </div>
          <div className="card">
            <div className="card-icon green">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-text">
              <h3>Design Team</h3>
              <p>8 members</p>
            </div>
            <i className="fas fa-chevron-right arrow"></i>
          </div>
        </section>
      </div>
      <BottomNav activeTab="Teams" />
    </div>
  );
};

export default Teams;