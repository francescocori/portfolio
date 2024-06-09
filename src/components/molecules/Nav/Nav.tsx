"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Contact" },
  ];

  return (
    <div className="mx-auto flex h-12 w-full items-center justify-between bg-[#0c0a3d] px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"></h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="m-2 cursor-pointer rounded-xl p-4 underline-offset-4 duration-300 hover:text-[#0db881]"
          >
            <a href={`#${item.text.toLowerCase()} `}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 z-10 h-full w-[60%] border-r border-r-gray-900 bg-white text-[#0c0a3d] duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">MENU</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:text-black"
          >
            <a href={`#${item.text.toLowerCase()} `}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
