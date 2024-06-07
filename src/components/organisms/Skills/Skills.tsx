import React from "react";

export const Skills = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center rounded-tl-[200px] bg-[#0c0a3d] px-20 py-[100px]">
      <h2 className="mb-10 text-[40px] font-bold text-white">Skills</h2>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 1</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 2</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 3</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 4</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 5</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 6</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 7</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 8</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 9</div>
          <div className="bg-blue-500 p-4 xl:h-[130px]">Item 10</div>
        </div>
      </div>
    </div>
  );
};
