"use client";
import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-scroll-parallax";
import "./style.css";
export const Hero = () => {
  return (
    <Parallax translateY={[-20, 20]}>
      <div
        className="hero flex h-screen w-full items-center justify-center px-20 xl:px-40"
        id="hero"
      >
        <div className="sm:w-[100%] xl:w-[57%]">
          <h1 className="xxl:text-[60px] text-[52px] font-bold text-white">
            Hello! <br /> I'm{" "}
            <div className="relative inline-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text pt-0 text-transparent underline">
              <span>Francesco</span>
              <span> Coriolano.</span>
            </div>
          </h1>
          <div className="mt-10 w-[100%] leading-8 text-white sm:text-[18px] md:text-[20px]">
            <TypeAnimation
              sequence={[
                " I'm a Italian Frontend developer based in Lisbon. I'm passionate about  pixel-perfect beautiful interfaces and I love to add a magic touch to the internet. ✨",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
            />
          </div>
        </div>
        <div className="hidden h-full w-[43%] items-center justify-center sm:block">
          <div className="triangles">
            <div className="one" />
            <div className="two" />
            <div className="three" />
            <div className="four" />
            <div className="five" />
          </div>
        </div>
      </div>
    </Parallax>
  );
};
