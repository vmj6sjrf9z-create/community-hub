import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import HomeRender from "./pages/homePage/homeRender.jsx";
import TasksRender from "./pages/tasksPage/tasksRender.jsx";
import TeamsRender from "./pages/teamsPage/teamsRender.jsx";
import SettingsRender from "./pages/settingsPage/settingsRender.jsx";

export default function App() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/signup" />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main */}
      <Route path="/home" element={<HomeRender />} />
      <Route path="/tasks" element={<TasksRender />} />
      <Route path="/teams" element={<TeamsRender />} />
      <Route path="/settings" element={<SettingsRender />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}