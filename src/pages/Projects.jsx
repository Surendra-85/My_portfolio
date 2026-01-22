import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Jane CJ App (User Platform)",
      year: "2025",
      desc: "A cross-platform mobile app for the US market allowing users to record, upload, and monetize video content.",
      tags: ["Flutter", "BLoC", "Node.js", "REST API"],
      demo: "#",
      code: "#",
    },
    {
      title: "Jane CJ Media App",
      year: "2025",
      desc: "News channel platform for agencies to browse and license user-uploaded content with secure licensing workflows.",
      tags: ["Flutter", "BLoC", "Node.js", "Android / iOS"],
      demo: "#",
      code: "#",
    },
    {
      title: "The 8th Element Website",
      year: "2024",
      desc: "Responsive business website for a US-based healthcare consulting firm with SEO optimization.",
      tags: ["React.js", "Tailwind CSS", "SEO"],
      demo: "#",
      code: "#",
    },
    {
      title: "Portfolio Website",
      year: "2024",
      desc: "Personal portfolio site showcasing projects, blogs, and skills with smooth animations.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      demo: "#",
      code: "#",
    },
    {
      title: "E-Commerce Platform",
      year: "2023",
      desc: "Fully functional e-commerce website with cart, payment gateway integration, and admin dashboard.",
      tags: ["React.js", "Node.js", "MongoDB", "Stripe API"],
      demo: "#",
      code: "#",
    },
    {
      title: "Blog CMS",
      year: "2023",
      desc: "Content management system for bloggers with rich text editor and SEO-friendly design.",
      tags: ["Next.js", "Tailwind CSS", "MongoDB"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative pt-24 sm:pt-32 pb-20 sm:pb-28
      bg-white dark:bg-gray-950"
    >
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl mx-auto
        grid gap-8 sm:gap-10 lg:gap-12
        px-4 sm:px-6
        sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative rounded-3xl transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Card */}
            <div
              className="relative h-full rounded-3xl
              p-6 sm:p-8
              bg-white dark:bg-gray-900
              shadow-lg hover:shadow-2xl
              transition-all duration-500 overflow-hidden"
            >
              {/* Top strip */}
              <div className="absolute top-0 left-0 w-full h-2
                bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

              {/* Year */}
              <span className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white">
                {p.year}
              </span>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mt-4 mb-3">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full
                    bg-gray-100 dark:bg-gray-800
                    text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2
                  px-4 py-2 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
                  text-white hover:opacity-90 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2
                  px-4 py-2 rounded-full text-sm font-semibold
                  border border-gray-300 dark:border-gray-700
                  text-gray-800 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
