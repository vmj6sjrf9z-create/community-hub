import React from "react";
import "../styles/bottomnav.css";

const BottomNav = ({ activeTab }) => {
  const navItems = [
    { name: "Home", icon: "fas fa-home" },
    { name: "Tasks", icon: "fas fa-list" },
    { name: "Teams", icon: "fas fa-users" },
    { name: "Settings", icon: "fas fa-gear" },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`nav-item ${activeTab === item.name ? "active" : ""}`}
        >
          <i className={item.icon}></i>
          <span>{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
