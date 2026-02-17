import TopNavSettings from "./TopNavSettings";
import SettingsContents from "./SettingsContents";
import BottomNav from "../../components/BottomNav/BottomNav";

function SettingsRender() {
  return (
    <div className="phone">
      <TopNavSettings />
      <SettingsContents />
      <BottomNav active="settings" />
    </div>
  );
}

export default SettingsRender;
