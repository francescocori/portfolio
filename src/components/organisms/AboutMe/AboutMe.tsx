"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    // TODO:
    // create a separate component for the card
    // create an array for the data and pass the PROPs to the card
    // improve the style code: ES: ML- AUTO  apply only on even childs
    // make a line on thee middleof the cards
    <div className="flex h-screen w-full flex-col items-center">
      <h2 className="mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        About me
      </h2>
      <p className="mx-20 pt-10 text-[22px] text-[#0c0a3d]">
        I build websites and web applications using React and other
        technologies, such as Next Js, Typescript, and HTML/CSS/SCSS. I work
        with agile development methodologies and collaborate with other
        developers, designers, and clients to deliver high-quality products that
        meet user needs and expectations. I am passionate about learning new
        technologies and skills, and I believe that being a continuous learner
        is essential for every developer.
      </p>
      <div className="relative mt-10 h-screen w-full flex-col px-20">
        <div className="absolute left-[50%] h-[50rem] w-[5px] bg-[#0c0a3d]"></div>
        <div
          className="w-[500px] rounded-2xl bg-[#0c0a3d] p-[30px]"
          data-aos="fade-right"
        >
          <p className="text-bold text-[22px] text-white">May 2022- today</p>
          <div>
            <p className="my-4 text-[18px] text-white">
              Frontend Develoert - Studio Graphene
            </p>
            <span className="text-[#64f7d9]">
              SCSS - JS - Vue - GTM - Figma - Cypress - Sitecore - Gulp -
              Performance - Design - C#
            </span>
          </div>
        </div>
        <div
          className="ml-auto w-[500px] rounded-2xl bg-[#0c0a3d] p-[30px]"
          data-aos="fade-left"
        >
          <p className="text-bold text-[22px] text-white">May 2022- today</p>
          <div>
            <p className="my-4 text-[18px] text-white">
              Frontend Develoert - Studio Graphene
            </p>
            <span className="text-[#64f7d9]">
              SCSS - JS - Vue - GTM - Figma - Cypress - Sitecore - Gulp -
              Performance - Design - C#
            </span>
          </div>
        </div>
        <div
          className="w-[500px] rounded-2xl bg-[#0c0a3d] p-[30px]"
          data-aos="fade-right"
        >
          <p className="text-bold text-[22px] text-white">May 2022- today</p>
          <div>
            <p className="my-4 text-[18px] text-white">
              Frontend Develoert - Studio Graphene
            </p>
            <span className="text-[#64f7d9]">
              SCSS - JS - Vue - GTM - Figma - Cypress - Sitecore - Gulp -
              Performance - Design - C#
            </span>
          </div>
        </div>
        <div
          className="ml-auto w-[500px] rounded-2xl bg-[#0c0a3d] p-[30px]"
          data-aos="fade-left"
        >
          <p className="text-bold text-[22px] text-white">May 2022- today</p>
          <div>
            <p className="my-4 text-[18px] text-white">
              Frontend Develoert - Studio Graphene
            </p>
            <span className="text-[#64f7d9]">
              SCSS - JS - Vue - GTM - Figma - Cypress - Sitecore - Gulp -
              Performance - Design - C#
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
