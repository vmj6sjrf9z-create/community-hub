import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import TaskCard from "../components/TaskCard";
import "../styles/tasks.css";

const Tasks = () => {
  return (
    <div className="page-container">
      <TopNav title="Tasks" showAddButton={true} />
      <div className="page-content">
        <section className="cards">
          <TaskCard color="blue" title="Finish project report" due="Due: Today, 5 PM" />
          <TaskCard color="green" title="Team meeting prep" due="Due: Tomorrow, 10 AM" />
          <TaskCard color="purple" title="Update website content" due="Due: Friday, 12 PM" />
        </section>
      </div>
      <BottomNav activeTab="Tasks" />
    </div>
  );
};

export default Tasks;