import TopNavTasks from "./TopNavTasks";
import TasksContents from "./TasksContents";
import BottomNav from "../../components/BottomNav/BottomNav";

function TasksRender() {
  return (
    <div className="phone">
      <TopNavTasks />
      <TasksContents />
      <BottomNav active="tasks" />
    </div>
  );
}

export default TasksRender;
