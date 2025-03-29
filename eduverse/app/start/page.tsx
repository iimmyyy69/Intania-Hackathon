// WelcomeScreen.tsx
import Link from "next/link";
import React from "react";

const WelcomeScreen: React.FC = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="relative w-[320px] h-[660px] bg-white rounded-[32px] overflow-hidden shadow-xl">
        {/* Header Section */}
        <div className="h-[40%] bg-gradient-to-tr from-purple-900 via-blue-400 to-emerald-700 p-6">
          <p className="text-white text-lg font-bold mt-6">WELCOME,</p>
          <p className="text-white text-2xl font-black tracking-wider">GUEST1623 🎉</p>
        </div>

        {/* Character & Room */}
        <div className="relative -mt-12 flex justify-center">
          <img
            src="/room1 1.png" // replace with your asset
            alt="Character Room"
            className="w-[260px] h-auto transform rotate-[-10deg] drop-shadow-lg"
          />
                    <img
            src="/girl.png" // replace with your asset
            alt="Girl"
            className="w-[260px] h-auto transform rotate-[-10deg] drop-shadow-lg"
          />
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <p className="text-black text-sm font-medium cursor-pointer hover:underline">
            <Link href ="/home">click to start</Link>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
