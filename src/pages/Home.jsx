import React from "react";
import TopBar from "../components/home/TopBar";
import Greeting from "../components/home/Greeting";
import HomeCards from "../components/home/HomeCards";
import BottomNav from "../components/home/BottomNav";
import "../styles/homepage.css";

const Home = () => {
  return (
    <div className="phone">
      <TopBar />
      <Greeting />
      <HomeCards />
      <BottomNav />
    </div>
  );
};

export default Home;