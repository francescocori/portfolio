"use client";
import { ProjectCard } from "@/components/atoms";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Hkr, DaycareSos, FoodieMania } from "../../../../public/Images";
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
  const projects = [
    {
      id: 1,
      title: "HKR",
      description:
        "The HKR website is a platform hosting live auctions for crushed cars, offering a seamless experience for buyers and sellers to engage in real-time bidding on salvaged vehicles.",
      liveUrl: "https://beta.hkr.co.uk/",
      image: Hkr,
    },
    {
      id: 2,
      title: "DaycareSOS",
      description:
        "Daycare SOS connects nurseries with parents, allowing easy booking of childcare spots, including last-minute and backup care. ",
      liveUrl: "https://www.daycaresos.com/",
      image: DaycareSos,
    },
    {
      id: 3,
      title: "FoodieMania",
      description:
        "This is a prototype for a restaurant webpage with Community, Menu and Recipes sections, implemented on the early stage of my developer journey.",
      liveUrl: "https://foodiemania.netlify.app/",
      image: FoodieMania,
      codeUrl: "https://github.com/francescocori/restaurant-website",
    },
  ];
  const deviceType = "mobile";
  return (
    <div className="flex w-full flex-col items-center" id="projects">
      <h2 className="mb-[100px] mt-[100px] text-[40px] font-bold text-[#0c0a3d]">
        Projects
      </h2>
      <div className="w-[100%]">
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
          {projects.map((project) => (
            <ProjectCard
              image={project.image.src}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
            />
          ))}
          {/* <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl bg-slate-600 shadow-md">
            {" "}
          </div>
          <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl">
            {" "}
            <ProjectCard image={""} title={""} description={""} liveUrl={""} />
          </div>
          <div className="mr-[2rem] h-[480px] min-w-[250px] overflow-hidden rounded-2xl bg-slate-600 shadow-md">
            {" "}
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};
