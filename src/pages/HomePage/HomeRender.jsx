import TopNavHome from "./TopNavHome";
import HomeContents from "./HomeContents";
import BottomNav from "../../components/BottomNav/BottomNav";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HomeRender() {
  const { user } = useUser();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/signup");
  }, [user, navigate]);

  return (
    <div className="phone">
      <TopNavHome />
      <HomeContents user={user} />
      <BottomNav active="home" />
    </div>
  );
}

export default HomeRender;