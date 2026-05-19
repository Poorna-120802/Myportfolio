import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Resume } from "@/sections/Resume";
import { GitHubActivity } from "@/sections/GitHubActivity";
import { Blog } from "@/sections/Blog";
import { Contact } from "@/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Resume />
      <GitHubActivity />
      <Blog />
      <Contact />
    </>
  );
}
