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
const skills = [
  { name: "JavaScript", icon: Js },
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: Typescript },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Github", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Sass", icon: Sass },
  { name: "Html", icon: Html },
  { name: "CSS", icon: Css },
  // { name: "Node.js", icon: Nodejs },
  { name: "Visual Studio", icon: VisualStudio },
];

export const Skills = () => {
  return (
    <div className="mt-[100px] flex w-full flex-col items-center bg-[#0c0a3d] py-[100px] md:rounded-tl-[200px] md:px-20">
      <h2 className="mb-10 text-[40px] font-bold text-white" data-aos="fade-up">
        Skills
      </h2>
      <div className="container mx-auto p-4" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard icon={skill.icon.src} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
