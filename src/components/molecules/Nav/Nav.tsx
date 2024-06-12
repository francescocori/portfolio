"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export const Nav = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Contact" },
  ];

  return (
    <div className="bg-darkBlue mx-auto flex h-12 w-full items-center justify-end px-4 text-white">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-aquamarine m-2 cursor-pointer rounded-xl p-4 underline-offset-4 duration-300"
          >
            <a href={`#${item.text.toLowerCase()} `}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile  Menu */}
      <ul
        className={
          nav
            ? "bg-darkBlue fixed left-0 top-0 !z-[999] h-full w-[60%] border-r border-r-gray-900 text-white duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">
          <a href="#hero">MENU</a>
        </h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-aquamarine cursor-pointer rounded-xl p-4 duration-300"
          >
            <a href={`#${item.text.toLowerCase()} `}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
