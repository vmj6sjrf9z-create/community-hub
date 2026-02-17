//ttop bar for app

import React from "react";

const TopBar = () => {
  return (
    <header className="topbar">
      <img src="https://i.pravatar.cc/100" alt="Avatar" className="avatar" />
      <div className="bell">
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
};

export default TopBar;
