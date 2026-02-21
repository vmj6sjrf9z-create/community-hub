
import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const { user } = useUser();

  if (user) return <Navigate to="/home" />; // redirect if already logged in
  return children;
}
