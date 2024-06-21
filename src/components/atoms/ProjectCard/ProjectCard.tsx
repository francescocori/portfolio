import React from "react";
interface CardProps {
  image: string;
  title: string;
  description: string;
  liveUrl: string;
}
export const ProjectCard = ({
  image,
  title,
  description,
  liveUrl,
}: CardProps) => {
  return (
    <div className="object-fit mx-auto mb-10 flex h-[520px] w-[80%] max-w-[30rem] flex-col rounded-2xl shadow-custom md:mr-[2rem] xl:mr-[8rem] xl:min-w-[440px]">
      <div className="group h-[50%] overflow-hidden rounded-t-2xl object-cover">
        <img
          src={image}
          alt="project-image"
          className="h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex h-[50%] flex-col justify-between rounded-b-2xl bg-[#dddcf9] px-10 py-4 text-center text-darkBlue">
        <p className="mb-4 text-[20px] font-semibold">{title}</p>
        <p className="mb-4 text-[14px] lg:mb-8">{description}</p>
        <div className="transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <a href={liveUrl} className="mt-10 font-semibold underline">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
