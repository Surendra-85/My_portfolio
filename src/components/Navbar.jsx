import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="h-20 px-6 flex justify-between items-center max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Surendra
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 flex items-center justify-center rounded-xl
                         dark:bg-gray-800 dark:hover:bg-pink-900 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <HiX className="w-9 h-9" /> : <HiMenu className="w-9 h-9" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 flex flex-col gap-6 shadow-lg">
            <NavLink onClick={() => setOpen(false)} to="/" end className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>

            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setOpen(false);
              }}
              className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  );
}
