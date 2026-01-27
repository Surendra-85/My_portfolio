import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Dec 2025 – PRESENT",
    role: "Full Stack Developer",
    company: "Coding Pvt. Ltd.",
    points: [
      "Contributed to complex web using React.js, Next.js,",
      "Notable projects include Study Group and Coding  Star Development",
      "Worked extensively on backend systems with Node.js, Firebase, and MongoDB.",
      "Ensured seamless integration between frontend and backend components.",
    ],
  },
  {
    period: "FEB 2025 – Nov 2025",
    role: "Full Stack Developer Intern",
    company: "Codbig Pvt. Ltd.",
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
      <div className="mb-20 text-center">
        <h2 className="font-serif text-4xl font-extrabold text-gray-700 md:text-5xl dark:text-white">
          Work Experience
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-indigo-500 rounded-full" />
      </div>

      <div className="relative max-w-5xl px-6 mx-auto">
       
        <div className="absolute left-6 lg:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 lg:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex mb-16"
          >
            {/* ICON */}
            <div
              className="absolute left-0 z-10 p-3 text-white -translate-x-1/2 bg-indigo-500 rounded-full shadow-lg lg:left-1/2"
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
              <div className="p-8 transition shadow-md bg-gray-50 dark:bg-gray-800 rounded-3xl hover:shadow-xl">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
                  {exp.period}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="mb-5 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 mt-1 bg-indigo-500 rounded-full" />
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
