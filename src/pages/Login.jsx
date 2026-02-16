import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <p>This will become your login page.</p>

      <Link to="/">Create account</Link>
    </div>
  );
}

export default Login;
