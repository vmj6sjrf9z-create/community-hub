import "./TasksContents.css";
import TaskCard from "../../components/TaskCard/TaskCard";

function TasksContents({ tasks, onTaskClick }) {
  return (
    <div className="tasks-page">

      <section className="tasks-greeting">
        <p>Here are your current tasks</p>
      </section>

      <section className="tasks-cards">
        {tasks.length === 0 ? (
          <p style={{ color: "#9aa4b2", textAlign: "center" }}>No tasks yet</p>
        ) : (
          tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              createdAt={task.createdAt}
              due={task.due}
              color={task.color}
              onClick={() => onTaskClick(task)}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default TasksContents;