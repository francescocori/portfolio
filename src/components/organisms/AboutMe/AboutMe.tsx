"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ExperienceCard } from "@/components/atoms";
import { experienceData } from "./ExperienceList";
export const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="flex w-full flex-col items-center bg-[#f2f4f3] px-10 lg:px-20 xl:px-40"
      id="about"
    >
      <h2
        className="mt-[100px] text-[40px] font-bold text-[#0c0a3d]"
        data-aos="fade-up"
      >
        About me
      </h2>
      <p className="py-10 text-[22px] text-[#0c0a3d]" data-aos="fade-up">
        I build websites and web applications using React and other
        technologies, such as Next Js, Typescript, and HTML/CSS/SCSS. I work
        with agile development methodologies and collaborate with other
        developers, designers, and clients to deliver high-quality products that
        meet user needs and expectations. I am passionate about learning new
        technologies and skills, and I believe that being a continuous learner
        is essential for every developer.
      </p>
      <div className="relative mt-10 flex w-full flex-col items-center gap-4 md:items-start xl:gap-0">
        <div className="absolute left-[50%] hidden h-[46rem] w-[5px] bg-[#0c0a3d] xl:block" />
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
