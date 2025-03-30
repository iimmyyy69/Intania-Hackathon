'use client'
import React from "react";
import UserHUD from "../components/headerhud/userhud";
import Navbar from "../components/navbar/navbar";
import ChatList from "../components/chat/chatlist";
const ChatScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      <div className="flex-grow">
        <h1 className="text-2xl font-bold px-4 mt-4 mb-2">Chat</h1>
        <ChatList />
      </div>

      <Navbar/>
    </div>
  );
};

export default ChatScreen;
