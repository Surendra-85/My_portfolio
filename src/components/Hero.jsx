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
    }, deleting ? 60 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      className="
        min-h-[90vh] md:min-h-[85vh]
        pt-20 md:pt-16
        flex items-center
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        px-4 sm:px-8
      "
    >
      <div
        className="
          max-w-7xl mx-auto w-full
          grid grid-cols-1 md:grid-cols-2
          gap-10 md:gap-8
          items-start md:items-center
        "
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        {/* IMAGE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            <div
              className="
                absolute -inset-6
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                rounded-full blur-3xl opacity-25
              "
            />

            <img
              src={Photo4}
              alt="Surendra"
              className="
                relative
                w-56 h-56
                sm:w-72 sm:h-72
                md:w-80 md:h-80
                lg:w-96 lg:h-96
                object-cover rounded-full
                border-4 border-white dark:border-gray-700
                shadow-2xl
              "
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Surendra
            </span>
          </h1>

          <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-pink-600 dark:text-pink-400 min-h-[32px]">
            {text}
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I design and develop fast, scalable and user-friendly web applications
            using modern technologies with clean UI & smooth UX.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Surendra_Resume.pdf"
              className="
                px-8 py-3 rounded-xl
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                text-white font-semibold
                hover:scale-105 transition
              "
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="
                px-8 py-3 rounded-xl
                border-2 border-pink-500
                text-pink-500
                hover:bg-pink-500 hover:text-white
                transition
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
