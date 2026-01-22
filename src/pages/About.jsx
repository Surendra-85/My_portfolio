import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "SEPT 2023 – PRESENT",
    role: "Full Stack Developer",
    company: "Difmo Pvt. Ltd.",
    points: [
      "Contributed to complex web and mobile apps using React.js, Next.js, React Native, and Flutter.",
      "Notable projects include Jane CJ and Coding World.",
      "Worked extensively on backend systems with Node.js, Firebase, and MongoDB.",
      "Ensured seamless integration between frontend and backend components.",
    ],
  },
  {
    period: "FEB 2023 – AUG 2023",
    role: "Full Stack Developer Intern",
    company: "Difmo Pvt. Ltd.",
    points: [
      "Developed full-stack web applications using the MERN stack.",
      "Built responsive frontends with React.js and Tailwind CSS.",
      "Implemented DSA for performance optimization.",
      "Gained hands-on experience with Node.js and Firebase.",
    ],
  },
];

export default function About() {
  return (
    <section className="py-28 bg-white dark:bg-gray-900">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mb-20 flex flex-col md:flex-row items-center"
          >
            {/* CARD */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:justify-end" : "md:pl-12 md:order-2 md:justify-start"
              } flex`}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
                <span className="inline-block mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 rounded-full">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {exp.role}
                </h3>

                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-5">
                  {exp.company}
                </p>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ICON */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-indigo-500 text-white p-4 rounded-full shadow-xl z-10 flex items-center justify-center">
              <Briefcase size={20} />
            </div>

            {/* SPACER */}
            <div className="md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
