//hHomeCards for app

import React from "react";

const cards = [
  { icon: "fas fa-bullhorn", title: "Announcements", subtitle: "Latest updates from your teams", color: "blue" },
  { icon: "fas fa-list", title: "Task List", subtitle: "View and manage your tasks", color: "green" },
  { icon: "fas fa-calendar", title: "Upcoming Events", subtitle: "Meetings and scheduled activities", color: "purple" },
];

const HomeCards = () => {
  return (
    <section className="cards">
      {cards.map((card, idx) => (
        <div className="card" key={idx}>
          <div className={`card-icon ${card.color}`}>
            <i className={card.icon}></i>
          </div>
          <div className="card-text">
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>
      ))}
    </section>
  );
};

export default HomeCards;
