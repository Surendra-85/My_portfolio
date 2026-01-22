import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiPostman,
  SiNpm,
} from "react-icons/si";

export default function TechnicalSkills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },

    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "REST API", icon: <FaCode className="text-indigo-500" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-500" /> },

    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },

    { name: "Java", icon: <FaJava className="text-red-500" /> },

    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "NPM", icon: <SiNpm className="text-red-600" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="mt-4 w-24 h-1 mx-auto rounded-full
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative flex items-center gap-4
            rounded-2xl p-6
            bg-white/80 dark:bg-gray-800/70
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-700
            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl
              bg-gradient-to-r from-pink-500 to-blue-500
              opacity-0 group-hover:opacity-15 blur-xl transition"
            />

            {/* Icon */}
            <div className="text-4xl md:text-5xl flex-shrink-0
              group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="text-base md:text-lg font-semibold
              text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
