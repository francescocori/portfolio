"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { ProjectCard } from "@/components/atoms";
import { projects } from "./ProjectList";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const getDeviseType = (width: number) => {
    if (width < 768) {
      return "mobile";
    } else if (width >= 768 && width < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };
  const [width, setWidth] = useState(0);
  const [devise, setDevise] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDevise(getDeviseType(window.innerWidth));
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
      breakpoint: { max: 864, min: 0 },
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
          centerMode={devise === "tablet" ? true : false}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={devise === "mobile" ? true : false}
          autoPlaySpeed={3500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={devise}
        >
          {projects.map((project) => (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              key={project.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
