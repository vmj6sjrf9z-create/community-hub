import React from "react";
import "../styles/topnav.css";

const TopNav = ({ title, showAddButton = false, showBell = true, onAddClick }) => {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="top-icons">
        {showAddButton && <i className="fas fa-plus" onClick={onAddClick}></i>}
        {showBell && <i className="fa-regular fa-bell"></i>}
      </div>
    </header>
  );
};

export default TopNav;
