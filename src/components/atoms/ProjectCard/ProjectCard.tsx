import React from "react";

export const ProjectCard = () => {
  return (
    <div className="h-[480px] w-[420px] border-2">
      <div className="group h-[55%] overflow-hidden border-2">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="h-[45%] border-2"></div>
      <div></div>
    </div>
  );
};
