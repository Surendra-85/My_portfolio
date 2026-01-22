import { useEffect, useState } from "react";
import Photo4 from "../assets/Photo5.png";

export default function Hero() {
  const skills = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "Frontend Specialist",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    if (!deleting && subIndex === skills[index].length) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(skills[index].substring(0, subIndex));
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      className="min-h-screen pt-24 flex items-center
      bg-gradient-to-br from-blue-50 via-white to-blue-100
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      px-5 sm:px-8"
    >
      {/* Outfit font only for Hero */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        `}
      </style>

      <div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        {/* IMAGE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
              rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition" />

            <img
              src={Photo4}
              alt="Surendra"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-106 md:h-106
              object-cover rounded-full border-4 border-white dark:border-gray-700
              shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
              bg-clip-text text-transparent">
              Surendra
            </span>
          </h1>

          {/* Typing text */}
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-pink-600 dark:text-pink-400 min-h-[32px]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I design and develop fast, scalable and user-friendly web applications
            using modern technologies with clean UI & smooth UX.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Surendra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
              text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105
              transition-all duration-300 text-center"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border-2 border-pink-500
              text-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500
              hover:text-white hover:scale-105 transition-all duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
