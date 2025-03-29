'use client'
import React from "react";
import UserHUD from "../components/headerhud/page";
import Navbar from "../components/navbar/page";

const avatars = [
  { src: "/avatar1.png", name: "Top" },
  { src: "/avatar2.png", name: "Left Top" },
  { src: "/avatar3.png", name: "Left Bottom" },
  { src: "/avatar4.png", name: "Bottom" },
  { src: "/avatar5.png", name: "Right Bottom" },
  { src: "/avatar6.png", name: "Right Top" },
];

const MeetingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* HUD */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Main Content */}
      <div className="flex-grow px-6 pt-6 pb-20">
        <h1 className="text-2xl font-bold mb-6">Meeting</h1>

        <div className="relative w-full h-[320px] flex items-center justify-center">
          {/* Central Space */}
          <div className="w-32 h-40 bg-black rounded-xl z-10" />

          {/* Avatars Around */}
          {avatars.map((avatar, index) => {
            const angle = (360 / avatars.length) * index;
            const radius = 120;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <img
                key={index}
                src={avatar.src}
                alt={avatar.name}
                className="w-12 h-12 rounded-full absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Nav */}
      <Navbar/>
    </div>
  );
};

export default MeetingScreen;
