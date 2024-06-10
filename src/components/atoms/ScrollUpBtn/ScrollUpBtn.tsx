"use client";
import React, { useEffect, useState } from "react";

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full bg-[#0db881] p-3 text-white shadow-lg hover:bg-[#31cf9a] focus:outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
};
