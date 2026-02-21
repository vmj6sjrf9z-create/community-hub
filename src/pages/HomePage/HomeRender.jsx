import React from "react";
import TopNavHome from "./TopNavHome";
import HomeContents from "./HomeContents";
import BottomNav from "../../components/BottomNav/BottomNav";

function HomeRender() {
  return (
    <div className="phone">
      <TopNavHome />
      <HomeContents />
      <BottomNav active="home" />
    </div>
  );
}

export default HomeRender;