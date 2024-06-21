"use client";
import { ScrollUpBtn } from "@/components/atoms";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      className="mt-[100px] flex flex-col items-center bg-darkBlue py-[100px] md:rounded-tr-[200px] md:px-20"
      id="contact"
    >
      <h2 className="mb-10 text-[40px] font-bold text-white">Contact</h2>
      <p className="mx-auto text-center text-white">
        Don&apos;t hesitate to reach out for any question!
      </p>

      <a
        href="mailto:francesco.coriolano@gmail.com"
        className="mt-6 cursor-pointer text-white underline underline-offset-4 duration-300 hover:text-aquamarine"
      >
        francesco.coriolano@gmail.com
      </a>
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
