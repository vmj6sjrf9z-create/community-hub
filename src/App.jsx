import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import HomeRender from "./pages/homePage/homeRender.jsx";
import TasksRender from "./pages/tasksPage/TasksRender.jsx";
import TaskInfo from "./pages/tasksPage/TaskInfo.jsx";
import TeamsRender from "./pages/teamsPage/teamsRender.jsx";
import SettingsRender from "./pages/settingsPage/settingsRender.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/home" element={<HomeRender />} />

      <Route path="/tasks" element={<TasksRender />} />
      <Route path="/tasks/:id" element={<TaskInfo />} />

      <Route path="/teams" element={<TeamsRender />} />
      <Route path="/settings" element={<SettingsRender />} />

      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}