'use client'
import React from "react";
import { MessageCircle, Users } from "lucide-react";
import UserHUD from "../components/headerhud/page";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";

const SocialScreen: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* HUD at the top */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Main content */}
      <div className="flex-grow px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Social</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Chat Option */}
          <div
            className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-6 shadow-md hover:bg-gray-200 cursor-pointer"
            onClick={() => router.push('/chat')}
          >
            <MessageCircle size={40} className="text-purple-700 mb-2" />
            <span className="text-md font-semibold">Chat</span>
          </div>

          {/* Meeting Option */}
          <div
            className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-6 shadow-md hover:bg-gray-200 cursor-pointer"
            onClick={() => router.push('/meeting')}
          >
            <Users size={40} className="text-purple-700 mb-2" />
            <span className="text-md font-semibold">Meeting</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <Navbar/>
    </div>
  );
};

export default SocialScreen;
