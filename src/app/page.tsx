import Image from "next/image";
import { AboutMe, Hero, Projects, Skills } from "@/components/organisms";
import { Footer, Nav } from "@/components/molecules";
export default function Home() {
  return (
    <main className="flex w-full">
      <div className="w-full gap-4">
        <Nav />
        <Hero />
        <AboutMe />
        <Skills />
        {/* <Projects /> */}
        <Footer />
      </div>
    </main>
  );
}
