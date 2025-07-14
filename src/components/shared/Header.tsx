"use client";

import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { useTheme } from "@/context/themeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
//import Nav from "./Nav";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center py-4">
        <CgMenuLeft onClick={toggle} size={40} className="text-[var(--color-text)] cursor-pointer" />


        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="hidden"
          />

          <div className="relative w-14 h-8 bg-[var(--color-primary)] rounded-full p-1 flex items-center transition">
            <div
              className={`w-6 h-6 rounded-full bg-black flex items-center justify-center transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <MdDarkMode size={16} className="text-white" />
              ) : (
                <MdLightMode size={16} className="text-white " />
              )}
            </div>
          </div>

          {/*  <span className="text-[var(--color-text)]">
          {theme === "dark" ? "Dark" : "Light"}
        </span> */}
        </label>
      </div>
      {/* <Nav toggle={toggle} isMenuOpen={isMenuOpen} /> */}
    </div>
  );
}
