import React from "react";
import MainMenu from "./MainMenu";
import DarkMode from "./DarkMode";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex items-center gap-6">
        <DarkMode />
        <a
          href="/"
          className="text-2xl py-1 px-2 bg-gray-700 font-bold rounded-lg"
        >
          iCode
        </a>
      </div>
    </div>
  );
}
