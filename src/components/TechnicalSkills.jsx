
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGreensock,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiPostman,
  SiNpm,
  SiIntellijidea,
} from "react-icons/si";

export default function TechnicalSkills() {
    const skills = [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "React.js", icon: <FaReact className="text-sky-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "GSAP", icon: <SiGreensock className="text-green-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "REST API", icon: <FaCode className="text-indigo-500" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "NPM", icon: <SiNpm className="text-red-600" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-500" /> },
    ];
  
    return (
      <section className="py-20 bg-white">
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-14
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
          bg-clip-text text-transparent">
          Technical Skills
        </h2>
  
        {/* GRID */}
        <div className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          px-4
        ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
                flex items-center gap-4
                p-5 rounded-2xl
                bg-white
                shadow-md
                hover:shadow-xl
                transition-all
              "
            >
              {/* Icon */}
              <div className="text-4xl">
                {skill.icon}
              </div>
  
              {/* Name */}
              <p className="text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  