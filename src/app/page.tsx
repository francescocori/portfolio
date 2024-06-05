import Image from "next/image";
import { AboutMe, Hero, Projects, Skills } from "@/components/organisms";
export default function Home() {
  return (
    <main className="flex px-8">
      <div className="w-full">
        <Hero />
        {/* <AboutMe />
        <Skills />
        <Projects /> */}
      </div>
    </main>
  );
}
