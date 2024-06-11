"use client";
import Image from "next/image";
import { AboutMe, Hero, Projects, Skills } from "@/components/organisms";
import { Footer, Nav } from "@/components/molecules";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="flex w-full">
        <div className="w-full gap-4">
          <Nav />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </main>
    </ParallaxProvider>
  );
}
