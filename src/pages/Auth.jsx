import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle.jsx";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false); // Default to Sign-Up
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate();

  // Handle normal signup/login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && !username) return alert("Please enter a username");

    if (!isLogin && password !== confirmPassword)
      return alert("Passwords do not match");

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/"); // Redirect to home
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { username } }
        });
        if (error) throw error;
        await supabase.from("app_users").insert({ id: data.user.id, username });
        navigate("/"); // Redirect to home
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Discord OAuth login
  const handleDiscord = async () => {
    setLoading(true); // Show loader after OAuth
    try {
      await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: { scopes: "identify email guilds", redirectTo: window.location.origin }
      });
      // After redirect back from Discord, loader will show while session is verified
      // You can use supabase.auth.onAuthStateChange in Home.jsx for final redirect
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    // Colorful loader post-Discord authentication
    return (
      <div className="loader-container">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading your account...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{isLogin ? "Community Hub Login" : "Community Hub Sign-Up"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
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
        {!isLogin && (
          <PasswordToggle
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>

      <div className="login-link" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </div>

      <button className="discord-btn" onClick={handleDiscord}>
        <i className="fab fa-discord"></i> Sign in with Discord
      </button>
    </div>
  );
}