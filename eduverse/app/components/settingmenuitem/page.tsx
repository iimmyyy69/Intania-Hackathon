import React from "react";
import { ChevronRight } from "lucide-react";

interface SettingsMenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center gap-3 text-black">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <ChevronRight size={18} className="text-gray-500" />
    </div>
  );
};

export default SettingsMenuItem;
