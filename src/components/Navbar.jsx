import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    `relative text-lg font-medium transition
     ${isActive
       ? "text-pink-500 dark:text-pink-400 after:w-full"
       : "text-gray-700 dark:text-gray-300 after:w-0 hover:text-pink-500 dark:hover:text-pink-400"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="h-20 px-6 flex justify-between items-center max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Surendra
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/technicalSkills" className={linkClass}>Skills</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            {/* Dark Mode Icon Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 flex items-center justify-center rounded-xl
                          dark:bg-gray-800
                          dark:hover:bg-pink-900
                         transition"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 text-lg" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <HiX className="w-9 h-9 text-gray-800 dark:text-gray-200" />
              ) : (
                <HiMenu className="w-9 h-9 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 flex flex-col gap-6 shadow-lg">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/technicalSkills" className={linkClass}>Skills</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>

            {/* Mobile Dark Icon */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setOpen(false);
              }}
              className="w-12 h-12 flex items-center justify-center rounded-xl
                         bg-gray-200 dark:bg-gray-800 self-start"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
