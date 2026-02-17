import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle.jsx";
import ExternalAuth from "../components/ExternalAuth.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);

    navigate("/"); // redirect to home
  };

  return (
    <div className="container">
      <h1>Community Hub Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <PasswordToggle
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <div className="login-link" onClick={() => navigate("/signup")}>
        Don't have an account? Sign up
      </div>

      <ExternalAuth />
    </div>
  );
}