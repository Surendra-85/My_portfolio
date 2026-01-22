import { ExternalLink, Github } from "lucide-react";

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
  ];

  return (
    <section
      id="projects"
      className="relative pt-36 pb-28 bg-gradient-to-b from-slate-100 to-white dark:from-gray-950 dark:to-gray-900"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative group rounded-3xl p-[2px]
            bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500
            hover:scale-[1.03] transition-all duration-500"
          >
            {/* Inner Card */}
            <div className="relative rounded-3xl p-8 h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl">
              {/* Year Badge */}
              <span className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full
                bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                {p.year}
              </span>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full
                    bg-gradient-to-r from-purple-100 to-pink-100
                    dark:from-purple-900/40 dark:to-pink-900/40
                    text-purple-700 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                  hover:opacity-90 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                  border border-gray-300 dark:border-gray-700
                  text-gray-800 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
