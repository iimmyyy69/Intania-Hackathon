"use client"
import React from "react";
import NotificationCard from "./noticard";

const NotificationList: React.FC = () => {
  return (
    <div>
      {/* Message Notification */}
      <NotificationCard
        type="message"
        icon={<img src="/avatar.png" className="w-10 h-10 rounded-full" />}
        content={
          <p className="text-black text-sm">
            <strong>Yao Ming</strong> sends a request
          </p>
        }
        actions={
          <>
            <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">Accept</button>
            <button className="bg-gray-300 px-3 py-1 rounded-full text-xs">Ignore</button>
          </>
        }
      />

      {/* Energy Notification */}
      <NotificationCard
        type="energy"
        icon={<span className="text-yellow-400 text-xl">⚡</span>}
        content={
          <p className="text-black text-sm">
            <strong>Your energy</strong> has already been recharged<br />
            <span className="text-xs text-gray-500">19 hr 56 m ago</span>
          </p>
        }
        actions={
          <button className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
            Go to Lesson
          </button>
        }
      />

      {/* Lesson Notification */}
      <NotificationCard
        type="lesson"
        icon={<span className="text-red-500 text-xl">❗</span>}
        content={
          <p className="text-black text-sm">
            <strong>New Lesson</strong> just arrived
          </p>
        }
        actions={
          <button className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
            Check it out
          </button>
        }
      />
    </div>
  );
};

export default NotificationList;
