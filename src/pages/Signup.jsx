import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Sign up</h1>
      <p>This will become your signup page.</p>

      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Signup;
