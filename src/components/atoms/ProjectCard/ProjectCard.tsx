import React from "react";
import { Hkr } from "../../../../public/Images";
interface CardProps {
  image: string;
  title: string;
  description: string;
  liveUrl: string;
  codeUrl?: string;
}
export const ProjectCard = ({
  image,
  title,
  description,
  liveUrl,
  codeUrl,
}: CardProps) => {
  return (
    <div className="shadow-custom object-fit mb-10 mr-[2rem] h-[480px] min-w-[400px] rounded-2xl">
      <div className="group h-[55%] overflow-hidden rounded-t-2xl object-cover">
        <img
          src={image}
          alt="Placeholder"
          className="h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="h-[45%] rounded-b-2xl bg-[#dddcf9] px-10 py-4 text-center">
        <p className="mb-4 text-[20px] font-semibold text-[#0c0a3d]">
          {" "}
          {title}{" "}
        </p>
        <p className="mb-8 text-[14px]">{description}</p>
        <a href={liveUrl} className="mt-10 font-semibold underline">
          Website
        </a>
        <p>{codeUrl}</p>
      </div>
    </div>
  );
};
