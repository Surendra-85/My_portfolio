import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import ProjectCard from "./Projects";

export default function Home() {
  return (
    <>
    <Hero/>
    <Skills/>
    <ProjectCard/>
    <About/>
    <Contact/>
    </>
  );
}
