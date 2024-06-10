"use client";
import { ScrollUpBtn } from "@/components/atoms";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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

      <p className="mt-6 text-white underline underline-offset-4">
        francesco.coriolano@gmail.com
      </p>
      <div className="mt-14 flex gap-4">
        <a href="https://www.linkedin.com/in/francesco-coriolano/">
          <FaLinkedin size={30} color="white" />
        </a>
        <a href="https://github.com/francescocori">
          <FaGithub size={30} color="white" />
        </a>
      </div>

      <ScrollUpBtn />
    </div>
  );
};
