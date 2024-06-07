import React from "react";
interface SkillCardProps {
  icon: any;
}
export const SkillCard = ({ icon }: SkillCardProps) => {
  return (
    // <div className="flex items-center justify-center bg-white py-10">
    <div className="flex transform items-center justify-center rounded-lg bg-white py-10 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <img src={icon} className="h-[48px] w-[48px]" />
    </div>
  );
};
