import "./TaskCard.css";

function TaskCard({ title, due, color }) {
  return (
    <div className="task-card">
      
      <div className={`task-icon ${color}`}>
        <i className="fas fa-tasks"></i>
      </div>

      <div className="task-text">
        <h3>{title}</h3>
        <p>Due: {due}</p>
      </div>

      <i className="fas fa-chevron-right arrow"></i>

    </div>
  );
}

export default TaskCard;