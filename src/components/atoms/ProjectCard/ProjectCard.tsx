import React from "react";
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
    <div className="object-fit mx-auto mb-10 h-[520px] w-[80%] rounded-2xl shadow-custom md:mr-[2rem] xl:mr-[8rem] xl:min-w-[440px]">
      <div className="group h-[55%] overflow-hidden rounded-t-2xl object-cover">
        <img
          src={image}
          alt="project-image"
          className="h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="h-[45%] rounded-b-2xl bg-[#dddcf9] px-10 py-4 text-center">
        <p className="mb-4 text-[20px] font-semibold text-[#0c0a3d]">{title}</p>
        <p className="mb-4 text-[14px] lg:mb-8">{description}</p>
        <a href={liveUrl} className="mt-10 font-semibold underline">
          Website
        </a>
        <p>{codeUrl}</p>
      </div>
    </div>
  );
};
