import "./TasksContents.css";
import TaskCard from "../../components/TaskCard/TaskCard";
import BottomNav from "../../components/BottomNav/BottomNav";

function TasksContents() {
  return (
    <div className="tasks-page">

      <section className="tasks-greeting">
        <p>Here are your current tasks</p>
      </section>

      <section className="tasks-cards">
        <TaskCard 
          title="Finish project report"
          due="Due: Today, 5 PM"
          color="blue"
        />

        <TaskCard 
          title="Team meeting prep"
          due="Due: Tomorrow, 10 AM"
          color="green"
        />

        <TaskCard 
          title="Update website content"
          due="Due: Friday, 12 PM"
          color="purple"
        />
      </section>

      <BottomNav active="tasks" />
    </div>
  );
}

export default TasksContents;
