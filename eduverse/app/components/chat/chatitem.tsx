import React from "react";

interface ChatListItemProps {
  avatar: string;
  name: string;
  message: string;
  onClick?: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ avatar, name, message, onClick }) => {
  return (
    <div
      className="flex items-center gap-4 px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-600 truncate">{message}</p>
      </div>
    </div>
  );
};

export default ChatListItem;
