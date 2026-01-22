import Hero from "../components/Hero";
import TechnicalSkills from "../components/TechnicalSkills";
import About from "./About";
import Contact from "./Contact";
import ProjectCard from "./Projects";

export default function Home() {
  return (
    <>
    <Hero/>
    <TechnicalSkills/>
    <ProjectCard/>
    <About/>
    <Contact/>
    </>
  );
}
