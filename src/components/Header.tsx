"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../app/assets/icons/logo.png";
import Globe from "../app/assets/icons/globe.png";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Icons for the hamburger and close

const MenuItem: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col justify-center items-center cursor-pointer transition-colors duration-300 ${
      isActive ? "text-white" : "text-gray-400"
    }`}
  >
    <p className="relative">
      {label}
      <div
        className={`absolute top-full mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </p>
  </div>
);

const Header = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const menuItems = [
    "스튜디오",
    "워크센터",
    "손비서",
    "메타휴먼",
    "영상제작소",
    "공지사항",
    "제휴문의",
  ];

  return (
    <header className="w-full flex justify-between items-center py-6 px-4 md:px-12 text-sm relative">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="logo" width={120} height={120} />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-between items-center gap-8">
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            label={item}
            isActive={active === item}
            onClick={() => setActive(item)}
          />
        ))}
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Right-side (Login and Globe) */}
      <div className="hidden md:flex justify-around items-center gap-8">
        <div>로그인</div>
        <div>
          <Image src={Globe} alt="globe" width={30} height={30} />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-10 md:hidden">
          <div className="w-64 h-full bg-gray-900 p-6 space-y-8 absolute right-0">
            {menuItems.map((item) => (
              <MenuItem
                key={item}
                label={item}
                isActive={active === item}
                onClick={() => {
                  setActive(item);
                  setIsMenuOpen(false); // Close menu on click
                }}
              />
            ))}
            {/* Login and Globe */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <div>로그인</div>
              <div>
                <Image src={Globe} alt="globe" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
