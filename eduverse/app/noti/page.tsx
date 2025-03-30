"use client"
import React, { useState } from "react";
import UserHUD from "../components/headerhud/userhud";
import NotificationCard from "../components/notifications/noticard";
import NotificationFilter from "../components/notifications/notifilter";
import NotificationList from "../components/notifications/notilist";
import Navbar from "../components/navbar/navbar";


const NotificationScreen: React.FC = () => {
  const [selected, setSelected] = useState("All");

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={3} />

      <div className="flex-grow">
        <div className="flex items-center justify-between px-4 mt-4">
          <h1 className="text-black text-2xl font-bold">Notification</h1>
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            3
          </div>
        </div>

        <NotificationFilter selected={selected} onSelect={setSelected} />
        <NotificationList />
      </div>

      <Navbar/>
    </div>
  );
};

export default NotificationScreen;
