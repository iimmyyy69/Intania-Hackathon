import React from "react";
import { Heart, Bell, User } from "lucide-react";
import Link from "next/link";
interface UserHUDProps {
  username: string;
  hearts: number; // max: 3
  level: number;
  notifications: number;
}

const UserHUD: React.FC<UserHUDProps> = ({
  username = "GUEST1623",
  hearts = 1,
  level = 28,
  notifications = 2,
}) => {
  const maxHearts = 3;

  return (
    <div className="w-full bg-[#140c29] px-4 py-2 rounded-b-3xl flex items-center justify-between text-white shadow-md">
      {/* Left - Avatar & Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
          <User size={16} />
        </div>
        <div className="flex flex-col text-xs font-bold">
          <span>{username}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: maxHearts }).map((_, i) => (
              <Heart
                key={i}
                size={14}
                className={i < hearts ? "text-red-500" : "text-gray-500"}
                fill={i < hearts ? "#ef4444" : "transparent"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center - Level Bar */}
      <div className="flex flex-col items-end justify-center flex-grow px-4">
        <div className="text-xs font-semibold">Lv. {level}</div>
        <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-green-500 w-[75%]" /> {/* Replace with dynamic % if needed */}
        </div>
      </div>

      {/* Right - Notifications */}
      <Link href="/noti" className="relative">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <Bell size={16} />
        </div>
        {notifications > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {notifications}
          </div>
        )}
      </Link>
    </div>
  );
};

export default UserHUD;
