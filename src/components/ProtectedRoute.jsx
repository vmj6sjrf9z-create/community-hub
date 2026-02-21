import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();

  // Wait for Supabase session to restore
  if (loading) return <div>Loading...</div>;

  // Redirect if not logged in
  if (!user) return <Navigate to="/signup" replace />;

  return children;
}