import React from "react";

interface ExpepienceCard {
  time: string;
  role: string;
  skills: string;
  even?: boolean;
}
export const ExperienceCard = ({
  time,
  role,
  skills,
  even,
}: ExpepienceCard) => {
  return (
    <div
      className={`w-[350px] rounded-2xl bg-[#0c0a3d] p-[30px] md:w-full xl:w-[500px] ${even && "xl:ml-auto"}`}
      // data-aos={`fade-up-${even ? "right" : "left"}`}
      data-aos="fade-up"
    >
      <p className="text-bold text-[18px] text-white md:text-[22px]">{time}</p>
      <div>
        <p className="my-4 text-[14px] text-white md:text-[18px]">{role}</p>
        <span className="text-[12px] text-[#64f7d9] md:text-[16px]">
          {skills}
        </span>
      </div>
    </div>
  );
};
