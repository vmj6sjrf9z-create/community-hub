
import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();

  if (!user) return <Navigate to="/signup" />; // redirect if not logged in
  return children;
}
