'use client'
import UserHUD from "../components/headerhud/page";
import Navbar from "../components/navbar/page";

const QuestMapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between overflow-hidden">
      {/* Top HUD */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Map Area */}
      <div className="relative flex-grow bg-blue-50">
        {/* Central Character */}
        <div className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img src="/Char/head.png" alt="You" className="w-16 h-16" />
        </div>

        {/* Math Section (Circle - Top Left) */}
        <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:scale-105 transition">
          <button onClick={() => console.log("Go to Math")}>Math</button>
        </div>

        {/* Science Section (Hexagon - Top Right) */}
        <div
          className="absolute top-[10%] right-[10%] w-24 h-24 bg-red-400 text-white font-bold shadow-md flex items-center justify-center"
          style={{
            clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
          }}
        >
          <button onClick={() => console.log("Go to Science")}>Science</button>
        </div>

        {/* English Section (Triangle - Bottom Left) */}
        <div
          className="absolute bottom-[10%] left-[15%] w-0 h-0 cursor-pointer"
          onClick={() => console.log("Go to English")}
          style={{
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderTop: "70px solid indigo"
          }}
        ></div>
        <div className="absolute bottom-[3%] left-[13.5%] text-indigo-700 font-bold text-xs">
          English
        </div>

        {/* Music Section (Star - Bottom Center) */}
        <div className="absolute bottom-[10%] left-[45%] flex flex-col items-center">
          <div className="text-yellow-400 text-3xl">⭐</div>
          <button className="text-sm mt-1 text-yellow-700 font-bold">Music</button>
        </div>

        {/* Mystery Quest (Square - Mid Right) */}
        <div className="absolute top-[30%] right-[40%] w-20 h-20 bg-black text-white rounded-lg flex items-center justify-center font-bold hover:scale-105 transition">
          ?
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  );
};

export default QuestMapPage;
