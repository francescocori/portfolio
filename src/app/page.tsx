import Image from "next/image";
import { AboutMe, Hero, Projects, Skills } from "@/components/organisms";
import { Nav } from "@/components/molecules";
export default function Home() {
  return (
    <main className="flex w-full">
      <div className="w-full gap-4">
        <Nav />
        <Hero />
        <AboutMe />
        <Skills />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
