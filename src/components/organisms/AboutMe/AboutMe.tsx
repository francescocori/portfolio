"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ExperienceCard } from "@/components/atoms";
export const AboutMe = () => {
  interface ExpepienceCard {
    time: string;
    role: string;
    skills: string;
    even?: boolean;
  }
  const experienceData: ExpepienceCard[] = [
    {
      time: "July 2022 - today",
      role: "Frontend Developer - Studio Graphene",
      skills:
        "React - Typescript - Tailwind - JS - HTML - CSS - Figma - Next.Js -  Git  ",
    },
    {
      time: "2022",
      role: "Frontend Developer Internship - KinderBDay",
      skills: "React -JS - HTML - CSS - Bootstrap - SEO  ",
      even: true,
    },
    {
      time: "2021 ",
      role: "Full Stack Web Development Bootcamp at Wild Code School",
      skills: "HTML5 - CSS3 - JavaScript - React - Node.js - MySQL",
    },
    {
      time: "2020",
      role: "The Complete Javascript Course",
      skills: "JavaScript - CSS - HTML - Bootstrap",
      even: true,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="flex w-full flex-col items-center px-10 lg:px-20 xl:px-40"
      id="about"
    >
      <h2 className="mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        About me
      </h2>
      <p className="pt-10 text-[22px] text-[#0c0a3d]">
        I build websites and web applications using React and other
        technologies, such as Next Js, Typescript, and HTML/CSS/SCSS. I work
        with agile development methodologies and collaborate with other
        developers, designers, and clients to deliver high-quality products that
        meet user needs and expectations. I am passionate about learning new
        technologies and skills, and I believe that being a continuous learner
        is essential for every developer.
      </p>
      <div className="relative mt-10 flex w-full flex-col items-center gap-4 md:items-start xl:gap-0">
        <div className="absolute left-[50%] hidden h-[50rem] w-[5px] bg-[#0c0a3d] xl:block" />
        {experienceData.map((experience, index) => (
          <ExperienceCard
            time={experience.time}
            role={experience.role}
            skills={experience.skills}
            even={experience.even}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
