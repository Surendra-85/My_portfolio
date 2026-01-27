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
        className="grid items-start w-full grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2 md:gap-8 md:items-center"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        {/* IMAGE */}
        <div className="flex justify-center order-1 md:justify-end md:order-2">
          <div className="relative group">
            <div
              className="absolute rounded-full opacity-25 -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl"
            />

            <img
              src={Photo4}
              alt="Surendra"
              className="relative object-cover w-56 h-56 border-4 border-white rounded-full shadow-2xl sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 dark:border-gray-700"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 text-center md:text-left md:order-1">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I’m{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
              Surendra
            </span>
          </h1>

          <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-pink-600 dark:text-pink-400 min-h-[32px]">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 sm:text-lg dark:text-gray-400 md:mx-0">
          I build fast, scalable, and user-friendly web applications using modern technologies. Experienced in React.js, Node.js, Express.js, MongoDB, Java, and MySQL, with a strong focus on clean UI, smooth UX, and secure backend APIs.

          </p>

          <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row md:justify-start">
            <a
              href="/Surendra2_Resume.pdf"
              className="px-8 py-3 font-semibold text-white transition rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 text-pink-500 transition border-2 border-pink-500 rounded-xl hover:bg-pink-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
