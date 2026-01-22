import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "SEPT 2024 – PRESENT",
    role: "Full Stack Developer",
    points: [
      "Contributed to complex web and mobile apps using React.js, Next.js, React Native, and Flutter.",
      "Notable projects include Jane CJ and Coding World.",
      "Worked extensively on backend systems with Node.js, Firebase, and MongoDB.",
      "Ensured seamless integration between frontend and backend components.",
    ],
  },
  {
    period: "FEB 2024 – AUG 2025",
    role: "Full Stack Developer Intern",
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
    <section className="py-24 bg-white dark:bg-gray-900">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Line */}
        <div className="absolute left-6 lg:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 lg:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-16 flex"
          >
            {/* ICON */}
            <div
              className="
                absolute left-0 lg:left-1/2
                -translate-x-1/2
                bg-indigo-500 text-white
                p-3 rounded-full
                shadow-lg z-10
              "
            >
              <Briefcase size={18} />
            </div>

            {/* CARD */}
            <div
              className={`
                ml-16 lg:ml-0
                lg:w-1/2
                ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:ml-auto"}
              `}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                <span className="inline-block mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 rounded-full">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {exp.role}
                </h3>

                

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
