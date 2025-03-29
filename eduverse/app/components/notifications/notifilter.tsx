"use client"
import React from "react";

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

const filters = ["All", "Message", "Energy", "Lesson"];

const NotificationFilter: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="flex gap-2 px-4 py-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-3 py-1 text-sm rounded-full border ${
            selected === filter ? "bg-black text-white" : "bg-gray-100 text-black"
          }`}
          onClick={() => onSelect(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default NotificationFilter;
