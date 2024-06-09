"use client";
import { ProjectCard } from "@/components/atoms";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const deviceType = "mobile";
  return (
    <div className="flex w-full flex-col items-center" id="projects">
      <h2 className="mb-[100px] mt-[200px] text-[40px] font-bold text-[#0c0a3d]">
        Projects
      </h2>
      <div className="h-[50%] w-[100%]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl bg-slate-600 shadow-md">
            {" "}
          </div>
          <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl">
            {" "}
            <ProjectCard />
          </div>
          <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl bg-slate-600 shadow-md">
            {" "}
          </div>
        </Carousel>
      </div>
    </div>
  );
};
