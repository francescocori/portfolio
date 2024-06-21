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
    <div className="mx-auto flex h-16 w-full items-center justify-end bg-darkBlue p-6 text-white">
      <div className="mx-auto flex w-full max-w-[1600px] justify-end">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="m-2 cursor-pointer rounded-xl p-4 underline-offset-4 duration-300 hover:text-aquamarine"
            >
              <a href={`#${item.text.toLowerCase()} `}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div onClick={handleNav} className="mt-2 block md:hidden">
          <AiOutlineMenu size={30} />
        </div>

        {/* Mobile  Menu */}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 !z-[999] mb-[2px] h-full w-[100%] border-b-[6px] border-r border-[#00df9a] border-r-gray-900 bg-darkBlue p-6 text-white duration-500 ease-in-out md:hidden"
              : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
          }
        >
          <div className="flex">
            <div onClick={handleNav} className="ml-auto block md:hidden">
              <AiOutlineClose size={30} />
            </div>
          </div>

          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer rounded-xl p-4 text-[#00df9a] duration-300"
              onClick={handleNav}
            >
              <a href={`#${item.text.toLowerCase()} `} className="text-[2rem]">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
