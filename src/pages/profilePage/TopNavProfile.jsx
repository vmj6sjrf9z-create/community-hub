import React from 'react';
import './TopNavProfile.css';

const TopNavProfile = () => {
  return (
    <header className="top-nav">
      <button className="back-btn"><i className="fas fa-arrow-left"></i></button>
      <h1>Profile</h1>
      <div className="top-icons">
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
};

export default TopNavProfile;
