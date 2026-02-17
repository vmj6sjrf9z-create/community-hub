import React from "react";
import "./TopNavHome.css";

const TopNavHome = () => {
  return (
    <header className="topbar">
      <img src="https://i.pravatar.cc/100" alt="Avatar" className="avatar" />
      <div className="bell">
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
};

export default TopNavHome;
