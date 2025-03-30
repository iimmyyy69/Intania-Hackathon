'use client'
import React from "react";
import {
  User,
  Settings,
  Bell,
  Lock,
  Info,
  Mail,
  LogOut,
  Home,
  HelpCircle,
  Users,
  Cog
} from "lucide-react";
import UserHUD from "../components/headerhud/userhud";
import SettingsMenuItem from "../components/settingmenuitem/setting";
import Navbar from "../components/navbar/navbar";
const SettingsScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top HUD */}
      <UserHUD username="GUEST1623" hearts={1} level={28} notifications={2} />

      {/* Settings Content */}
      <div className="flex-grow">
        <h1 className="text-center text-lg font-bold my-4">Settings</h1>
        <div className="space-y-1">
          <SettingsMenuItem icon={<User size={18} />} label="Account" />
          <SettingsMenuItem icon={<Settings size={18} />} label="Preferences" />
          <SettingsMenuItem icon={<Bell size={18} />} label="Notifications" />
          <SettingsMenuItem icon={<Lock size={18} />} label="Privacy" />
          <SettingsMenuItem icon={<Info size={18} />} label="App Info" />
          <SettingsMenuItem icon={<Mail size={18} />} label="Feedback" />
        </div>

        {/* Logout */}
        <div className="flex justify-center mt-6">
          <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-red-600">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    <Navbar/>

      </div>
   
  );
};

export default SettingsScreen;
