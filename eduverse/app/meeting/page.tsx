'use client'
import React, { useState } from "react";
import { Mic, MicOff, Send } from "lucide-react";
import UserHUD from "../components/headerhud/userhud";
import Navbar from "../components/navbar/navbar";

const avatars = [
  { src: "/Char/head.png", name: "Top" },
  { src: "/Char/BB.png", name: "Left Top" },
  { src: "/Char/CC.png", name: "Left Bottom" },
  { src: "/chat/megatron.png", name: "Bottom" },
  { src: "/Char/AA.png", name: "Right Bottom" },
  { src: "/chat/son.png", name: "Right Top" },
];

const MeetingScreen: React.FC = () => {
  const [micOn, setMicOn] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleMic = () => setMicOn((prev) => !prev);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages((prev) => [...prev, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between relative">
      {/* HUD */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Main Content */}
      <div className="flex-grow px-6 pt-6 pb-40"> {/* Adjusted bottom padding for chat */}
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
              <div
                key={index}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-12 h-12 rounded-full relative"
                />
                {index === 0 && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                    {micOn ? (
                      <Mic size={12} className="text-green-500" />
                    ) : (
                      <MicOff size={12} className="text-red-500" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mic Toggle */}
      <div className="fixed bottom-36 w-full flex justify-center z-50">
        <button
          onClick={toggleMic}
          className={`p-4 rounded-full shadow-md ${
            micOn ? "bg-green-500" : "bg-red-500"
          } text-white hover:scale-105 transition`}
        >
          {micOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>
      </div>

      {/* Live Chat Panel */}
      <div className="fixed bottom-20 left-0 w-full bg-white border-t z-40 max-h-[40%] flex flex-col shadow-lg">
        <div className="p-2 border-b font-semibold text-sm">Live Chat</div>

        {/* Message list */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-gray-100 p-2 rounded-lg w-fit max-w-[80%]">
              {msg}
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div className="flex items-center border-t px-3 py-2 gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border bg-gray-50 text-sm focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default MeetingScreen;
