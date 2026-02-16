import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle.jsx";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && !username) return alert("Please enter a username");

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return alert(error.message);
      navigate("/"); // Redirect to home
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (error) return alert(error.message);
      await supabase.from("app_users").insert({ id: data.user.id, username });
      navigate("/"); // Redirect to home
    }
  };

  const handleDiscord = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: { scopes: "identify email guilds", redirectTo: window.location.origin }
    });
  };

  return (
    <div className="container">
      <h1 className={`fade ${isLogin ? "fade-in" : "fade-out"}`}>
        {isLogin ? "Community Hub Login" : "Community Hub Sign-Up"}
      </h1>
      <form onSubmit={handleSubmit} className={`fade ${isLogin ? "fade-in" : "fade-out"}`}>
        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
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
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>

      <div
        className="login-link"
        onClick={() => setIsLogin(!isLogin)}
      >
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

export default Auth