import "./TaskCard.css";

function TaskCard({ title, due, createdAt, color, onClick }) {
  return (
    <div className="task-card" onClick={onClick}>

      <div className={`task-icon ${color}`}>
        <i className="fas fa-tasks"></i>
      </div>

      <div className="task-text">
        <h3>{title}</h3>
        <p className="created">Created: {createdAt}</p>
        <p className="due">Due: {due}</p>
      </div>

      <i className="fas fa-chevron-right arrow"></i>

    </div>
  );
}

export default TaskCard;