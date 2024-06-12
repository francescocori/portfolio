import React from "react";
import { SkillCard } from "@/components/atoms";
import {
  Figma,
  Github,
  Css,
  Html,
  Js,
  Nodejs,
  Sass,
  Tailwind,
  Typescript,
  VisualStudio,
  ReactIcon,
} from "../../../../public/Icons";
interface Skill {
  name: string;
  icon: string;
}
const skills: Skill[] = [
  { name: "JavaScript", icon: Js.src },
  { name: "React", icon: ReactIcon.src },
  { name: "TypeScript", icon: Typescript.src },
  { name: "Tailwind CSS", icon: Tailwind.src },
  { name: "Github", icon: Github.src },
  { name: "Figma", icon: Figma.src },
  { name: "Sass", icon: Sass.src },
  { name: "Html", icon: Html.src },
  { name: "CSS", icon: Css.src },
  { name: "Visual Studio", icon: VisualStudio.src },
];

export const Skills = () => {
  return (
    <div className="bg-darkBlue mt-[100px] flex w-full flex-col items-center py-[100px] md:rounded-tl-[200px] md:px-20">
      <h2 className="mb-10 text-[40px] font-bold text-white" data-aos="fade-up">
        Skills
      </h2>
      <div className="container mx-auto p-4" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard icon={skill.icon} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
