//bottom nav bar for app

import React from "react";

const navItems = [
  { icon: "fas fa-home", label: "Home", active: true },
  { icon: "fas fa-list", label: "Tasks" },
  { icon: "fas fa-users", label: "Teams" },
  { icon: "fas fa-gear", label: "Settings" },
];

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item, idx) => (
        <div className={`nav-item ${item.active ? "active" : ""}`} key={idx}>
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
