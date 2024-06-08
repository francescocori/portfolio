"use client";
import { ScrollUpBtn } from "@/components/atoms";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  return (
    <div
      className="mt-[100px] flex w-full flex-col items-center bg-[#0c0a3d] py-[100px] md:rounded-tr-[200px] md:px-20"
      id="contact"
    >
      <h2 className="mb-10 text-[40px] font-bold text-white">Contact</h2>
      <p className="text-white">
        Don't hesitate to reach out for any question!
      </p>
      <p className="mt-6 text-white underline">francesco.coriolano@gmail.com</p>
      <ScrollUpBtn />
    </div>
  );
};
