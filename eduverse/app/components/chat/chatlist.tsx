import React from "react";
import ChatListItem from "./chatitem";

const ChatList: React.FC = () => {
  const chats = [
    {
      avatar: "/bot.png", // update with your path
      name: "AI",
      message: "Click Here to Start Messaging ...",
    },
    {
      avatar: "/son.png",
      name: "Son Heung min",
      message: "Thank you Jay :3",
    },
    {
      avatar: "/megatron.png",
      name: "Megatron",
      message: "Brubrubrubb whatever hehe..",
    },
  ];

  return (
    <div className="bg-gray-100">
      {chats.map((chat, index) => (
        <ChatListItem
          key={index}
          avatar={chat.avatar}
          name={chat.name}
          message={chat.message}
        />
      ))}
    </div>
  );
};

export default ChatList;
