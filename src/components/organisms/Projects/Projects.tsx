import { ProjectCard } from "@/components/atoms";
import React from "react";

export const Projects = () => {
  return (
    <div
      className="flex w-full flex-col items-center px-10 lg:px-20 xl:px-40"
      id="projects"
    >
      <h2 className="mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        Projects
      </h2>
      <ProjectCard />
    </div>
  );
};
