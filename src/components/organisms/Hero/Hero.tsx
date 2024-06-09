import * as React from "react";
import "./style.css";

export const Hero = () => {
  return (
    <div className="hero flex h-screen w-full items-center justify-center px-20 xl:px-40">
      <div className="sm:w-[100%] xl:w-[57%]">
        <p className="mt-10 w-[100%] text-red-500 sm:text-[18px] md:text-[20px] xl:leading-8">
          cambia style dell navabar on mobile quando hamburger menu è aperto
        </p>
        <h1 className="xxl:text-[60px] text-[52px] font-bold text-white">
          Hello! <br /> I'm{" "}
          <div className="relative inline-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text pt-0 text-transparent underline">
            <span>Francesco</span>
            <span> Coriolano.</span>

            <div className="h-[4px] max-w-[full] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" />
          </div>
        </h1>

        <p className="mt-10 w-[100%] text-white sm:text-[18px] md:text-[20px] xl:leading-8">
          I'm a Italian Frontend developer based in Lisbon. I'm passionate about
          pixel-perfect beautiful interfaces and I love to add a magic touch to
          the internet.
        </p>
      </div>
      <div className="hidden h-full w-[43%] items-center justify-center sm:block">
        <div className="triangles">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
        </div>
      </div>
    </div>
  );
};
