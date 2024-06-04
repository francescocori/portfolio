import Image from "next/image";
import { AboutMe, Hero, Projects, Skills } from "@/components/organisms";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center ">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
