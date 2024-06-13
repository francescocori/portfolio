import React from "react";
interface SkillCardProps {
  icon: string;
}
export const SkillCard = ({ icon }: SkillCardProps) => {
  return (
    <div className="flex min-w-[8rem] transform items-center justify-center rounded-lg bg-white py-10 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <img src={icon} className="h-[48px] w-[48px]" alt="skill-icon" />
    </div>
  );
};
