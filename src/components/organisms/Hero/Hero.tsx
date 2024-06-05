import React from "react";
import "./style.css";
export const Hero = () => {
  return (
    <div className="hero flex h-screen w-full items-center px-20 xxl:px-40">
      <div className="w-[57%]">
        <h1 className="text-[52px] font-bold text-white xxl:text-[60px]">
          Hello! <br /> I'm{" "}
          <span className="underline underline-offset-[10px]">
            Francesco Coriolano.
          </span>
        </h1>
        <p className="mt-10 text-[20px] leading-8 text-white">
          I'm a Italian Frontend developer based in Lisbon. I'm passionate about
          pixel-perfect beautiful interfaces and I love to add a magic touch to
          the internet.
        </p>
      </div>
      <div className="flex hidden h-full w-[43%] items-center justify-center">
        <div className="triangles">
          <div className="un"></div>
          <div className="deux"></div>
          <div className="trois"></div>
          <div className="quatre"></div>
          <div className="cinq"></div>
        </div>
      </div>
    </div>
  );
};
