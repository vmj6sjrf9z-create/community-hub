import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const [servers, setServers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) return navigate("/auth");
      setUser(session.user);
      fetchServers(session.user.id);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) return navigate("/auth");
      setUser(session.user);
      fetchServers(session.user.id);
    });
  }, []);

  const fetchServers = async (userId) => {
    const { data } = await supabase.from("servers").select("*").eq("member_id", userId);
    setServers(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <div className="container">
      <img
        src={user?.user_metadata?.avatar_url || "https://via.placeholder.com/100"}
        alt="Avatar"
        className="profile-pic"
      />
      <h1>Welcome, {user?.user_metadata?.username || user?.email}!</h1>

      <div className="server-list">
        {servers.length === 0 ? (
          <p>No servers yet.</p>
        ) : (
          servers.map((s) => (
            <div key={s.id} className="server-card">
              <img src={s.icon || "https://via.placeholder.com/50"} />
              <span>{s.name}</span>
            </div>
          ))
        )}
      </div>

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}