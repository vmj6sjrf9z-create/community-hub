import "./TasksInfo.css";
import { useLocation, useNavigate } from "react-router-dom";

function TaskInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const task = location.state;

  if (!task) return <p>Task not found</p>;

  return (
    <div className="phone">
      <div onClick={() => navigate(-1)}>⬅ Back</div>

      <h1>{task.title}</h1>
      <p>Created: {task.createdAt}</p>
      <p>Due: {task.due}</p>
      <p>Community: {task.community}</p>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
}

export default TaskInfo;