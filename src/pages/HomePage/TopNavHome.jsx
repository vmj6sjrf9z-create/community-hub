import React from "react";
import "./TopNavHome.css";
import { useUser } from "../../context/UserContext.jsx";

const TopNavHome = () => {
  const { user } = useUser();

  const avatarUrl = user?.user_metadata?.avatar_url || "https://i.pravatar.cc/100";

  return (
    <header className="topbar">
      <img src={avatarUrl} alt="Avatar" className="avatar" />
      <div className="bell">
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
};

export default TopNavHome;