"use client"
import React from "react";

interface NotificationCardProps {
  type: "message" | "energy" | "lesson";
  icon: React.ReactNode;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const NotificationCard: React.FC<NotificationCardProps> = ({icon, content, actions }) => {
  return (
    <div className="flex items-start gap-3 px-4 py-3 border-t border-gray-200">
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <div className="flex-1">
        <div>{content}</div>
        {actions && <div className="text-black mt-2 flex gap-2">{actions}</div>}
      </div>
    </div>
  );
};

export default NotificationCard;
