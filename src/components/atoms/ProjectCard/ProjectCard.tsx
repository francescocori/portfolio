import React from "react";
import { Hkr } from "../../../../public/Images";

export const ProjectCard = () => {
  return (
    <div className="h-[480px] min-w-[400px] rounded-2xl">
      <div className="group h-[55%] overflow-hidden rounded-t-3xl object-cover">
        <img
          //   src="https://via.placeholder.com/150"
          src={Hkr.src}
          alt="Placeholder"
          className="h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="h-[45%] rounded-b-3xl border-2">
        <p> Site Web -></p>
      </div>
    </div>
  );
};
