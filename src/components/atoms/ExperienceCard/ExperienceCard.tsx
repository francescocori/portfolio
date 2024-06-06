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
      className={`w-[500px] rounded-2xl bg-[#0c0a3d] p-[30px] ${even && "ml-auto"}`}
      data-aos={`fade-up-${even ? "right" : "left"}`}
    >
      <p className="text-bold text-[22px] text-white">{time}</p>
      <div>
        <p className="my-4 text-[18px] text-white">{role}</p>
        <span className="text-[#64f7d9]">{skills}</span>
      </div>
    </div>
  );
};
