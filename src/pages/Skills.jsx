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
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "REST API", icon: <FaCode className="text-indigo-500" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-500" /> },

    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },

    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },

    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "NPM", icon: <SiNpm className="text-red-600" /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-gray-950">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
        bg-clip-text text-transparent">
        Technical Skills
      </h2>

      {/* Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5 sm:gap-6 md:gap-8
          px-4
        "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              w-full
              relative group
              flex flex-col items-center justify-center
              text-center
              gap-3
              rounded-2xl
              p-6
              min-h-[160px] sm:min-h-[150px]
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              shadow-md hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r from-pink-500 to-blue-500
              opacity-0 group-hover:opacity-20
              blur-xl transition
            " />

            {/* Icon */}
            <div className="relative text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="relative text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
