import { useState } from "react";
import TopNavTasks from "./TopNavTasks";
import TasksContents from "./TasksContents";
import TaskInfo from "./TaskInfo";

function TasksRender() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [priority, setPriority] = useState("Medium");
  const [dueError, setDueError] = useState("");

  // Modal input refs
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [dueInput, setDueInput] = useState("");

  const colors = ["blue", "green", "red", "purple"];

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const createTask = () => {
    const createdAt = new Date();
    const dueDate = dueInput ? new Date(dueInput) : null;

    // Validate due date
    if (dueDate && dueDate < createdAt) {
      setDueError("Due date cannot be earlier than created date.");
      return;
    }
    setDueError("");

    const formattedCreated = createdAt.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
    const formattedDue = dueDate
      ? dueDate.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
      : "Not set";

    const color = colors[Math.floor(Math.random() * colors.length)];

    const newTask = {
      title: titleInput.trim() || "Not set",
      description: descInput.trim() || "Empty",
      priority: priority || "Not set",
      createdAt: formattedCreated,
      due: formattedDue,
      color: color,
      community: "Xalteam@CommunityHub"
    };

    setTasks(prev => [...prev, newTask]);
    setTitleInput(""); setDescInput(""); setDueInput(""); setPriority("Medium");
    closeModal();
    setCurrentTask(newTask); // Open task info page after creation
  };

  if (currentTask) {
    return <TaskInfo task={currentTask} onBack={() => setCurrentTask(null)} />;
  }

  return (
    <div className="phone">
      <TopNavTasks onAddClick={openModal} />

      <TasksContents tasks={tasks} onTaskClick={setCurrentTask} />

      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h2>Create Task</h2>

            <div className="input-group">
              <input
                placeholder="Task title"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
              />
            </div>

            <div className="input-group">
              <textarea
                placeholder="Description"
                value={descInput}
                onChange={e => setDescInput(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Priority</label>
              <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="input-group">
              <label>Due By</label>
              <input
                type="datetime-local"
                value={dueInput}
                onChange={e => { setDueInput(e.target.value); setDueError(""); }}
              />
              {dueError && (
                <p style={{ color: "red", marginTop: "6px", fontSize: "14px" }}>
                  {dueError}
                </p>
              )}
            </div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
              <button className="create-btn" onClick={createTask}>Create Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksRender;