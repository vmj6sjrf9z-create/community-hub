import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="page-container">
      <TopNav title="Settings" />
      <div className="page-content">
        <section className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Account</h3>
              <p>Manage your account information</p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Appearance</h3>
              <p>Dark mode / Light mode</p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Accessibility</h3>
              <p>App preferences</p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Log Out</h3>
            </div>
          </div>
        </section>
      </div>
      <BottomNav activeTab="Settings" />
    </div>
  );
};

export default Settings;
