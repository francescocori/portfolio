"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <h2 className="mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        About me
      </h2>
      <p className="mx-40 pt-10 text-[22px] text-[#0c0a3d]">
        I build websites and web applications using React and other
        technologies, such as Next Js, Typescript, and HTML/CSS/SCSS. I work
        with agile development methodologies and collaborate with other
        developers, designers, and clients to deliver high-quality products that
        meet user needs and expectations. I am passionate about learning new
        technologies and skills, and I believe that being a continuous learner
        is essential for every developer.
      </p>
      <div className="bg-gray-600 h-[20rem] w-[20rem]" data-aos="fade-up"></div>
    </div>
  );
};
