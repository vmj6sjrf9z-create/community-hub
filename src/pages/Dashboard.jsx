import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default Dashboard;
