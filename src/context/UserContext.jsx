
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  };

  useEffect(() => {
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);