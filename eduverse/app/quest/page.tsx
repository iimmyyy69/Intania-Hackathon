'use client'
import UserHUD from "../components/headerhud/userhud";
import Navbar from "../components/navbar/navbar";

const QuestMapPage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-white flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: "url('/q.png')",
        backgroundSize: "cover",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Top HUD */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  );
};

export default QuestMapPage;
