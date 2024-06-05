import React from "react";
import "./style.css";
export const Hero = () => {
  return (
    <div className="h-screen w-full flex  items-center border-2 bg-gradient-to-b from-black/90 to-white">
      <div className="w-[57%] ">
        <h1 className=" text-[40px] text-[60px] font-bold">
          Hello! <br /> I'm
          <span className="underline underline-offset-[10px]">
            {" "}
            Francesco Coriolano.
          </span>
        </h1>
        <p className="mt-10 leading-8">
          I'm a Italian Frontend developer based in Lisbon. I'm passionate about
          pixel-perfect beautiful interfaces and I love to add a magic touch to
          the internet.
        </p>
      </div>
      <div className="border-orange w-[43%] h-full flex items-center justify-center">
        <div className="triangles ">
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
