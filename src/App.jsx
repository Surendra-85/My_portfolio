import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectCard from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      {/* 🌙 Dark mode wrapper */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technicalskills" element={<TechnicalSkills />} />
          <Route path="/projectCart" element={<ProjectCard/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
    
  );
}
