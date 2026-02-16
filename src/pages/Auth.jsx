import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle.jsx";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false); // default to signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // NEW: loader state
  const navigate = useNavigate();

  useEffect(() => {
    // check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/"); // redirect to home if logged in
      } else {
        setLoading(false); // show auth form
      }
    });

    // listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        navigate("/"); 
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && !username) return alert("Please enter a username");

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return alert(error.message);
      navigate("/"); 
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (error) return alert(error.message);
      await supabase.from("app_users").insert({ id: data.user.id, username });
      navigate("/"); 
    }
  };

  const handleDiscord = async () => {
    setLoading(true); // show loader while redirecting
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: { scopes: "identify email guilds", redirectTo: window.location.origin }
    });
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div></div><div></div><div></div>
        </div>
        <p>Checking session...</p>
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