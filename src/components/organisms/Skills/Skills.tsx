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
} from "../../../../public/SkillsIcons";
const skills = [
  { name: "Html", icon: Html },
  { name: "CSS", icon: Css },
  { name: "JavaScript", icon: Js },
  { name: "Github", icon: Github },
  { name: "Node.js", icon: Nodejs },
  { name: "Sass", icon: Sass },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "TypeScript", icon: Typescript },
  { name: "Visual Studio", icon: VisualStudio },
  { name: "Figma", icon: Figma },
  { name: "React", icon: ReactIcon },
];

export const Skills = () => {
  return (
    <div className="mt-[200px] flex w-full flex-col items-center rounded-tl-[200px] bg-[#0c0a3d] px-20 py-[100px]">
      <h2 className="mb-10 text-[40px] font-bold text-white">Skills</h2>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard icon={skill.icon.src} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
