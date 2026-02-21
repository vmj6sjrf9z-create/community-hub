import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    const tasks = saved ? JSON.parse(saved) : [];

    const foundTask = tasks.find((t) => String(t.id) === id);

    if (!foundTask) {
      navigate("/tasks");
    } else {
      setTask(foundTask);
    }
  }, [id, navigate]);

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