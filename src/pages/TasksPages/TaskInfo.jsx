import "./TasksInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function TaskInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const task = location.state;

  useEffect(() => {
    if (!task) {
      navigate("/tasks");
    }
  }, [task, navigate]);

  if (!task) return null;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Created: {task.createdAt}</p>
      <p>Due: {task.due}</p>
    </div>
  );
}

export default TaskInfo;