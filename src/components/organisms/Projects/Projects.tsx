"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { ProjectCard } from "@/components/atoms";
import { projects } from "./ProjectList";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const getDeviceType = (width: number) =>
    width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop";

  const [device, setDevice] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDevice(getDeviceType(window.innerWidth));
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div
      className="mx-auto flex w-full max-w-[1600px] flex-col items-center"
      id="projects"
    >
      <h2 className="mb-[100px] mt-[100px] text-[40px] font-bold text-darkBlue">
        Projects
      </h2>
      <div className="gradient-left w-screen items-center xl:w-[98%]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={device}
        >
          {projects.map(({ image, title, description, liveUrl }) => (
            <ProjectCard
              image={image}
              title={title}
              description={description}
              liveUrl={liveUrl}
              key={title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
