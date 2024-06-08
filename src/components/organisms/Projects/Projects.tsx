"use client";
import { ProjectCard } from "@/components/atoms";
import React, { useEffect } from "react";
import EmblaCarousel from "embla-carousel";

export const Projects = () => {
  return (
    <div
      className="flex w-full flex-col items-center px-10 lg:px-20 xl:px-40"
      id="projects"
    >
      <h2 className="mb-[100px] mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        Projects
      </h2>
      <div className="flex w-full gap-10 overflow-scroll">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
