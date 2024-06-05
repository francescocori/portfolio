import * as React from "react";
//maybe delete this
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";

export const Hero = () => {
  return (
    <div className="hero flex h-screen w-full items-center px-20 xxl:px-40">
      <div className="sm:w-[100%] xl:w-[57%]">
        <h1 className="text-[52px] font-bold text-white xxl:text-[60px]">
          Hello! <br /> I'm{" "}
          <div className="nom text-transparent from-indigo-500 via-sky-500 to-emerald-500 relative inline-block bg-gradient-to-r from-10% via-30% to-90% bg-clip-text pt-0 underline">
            <span>Francesco</span>
            <span> Coriolano.</span>

            <div className="from-indigo-500 via-sky-500 to-emerald-500 h-[4px] max-w-[full] bg-gradient-to-r from-10% via-30% to-90%" />
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
