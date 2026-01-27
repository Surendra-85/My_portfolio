import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Online Ecommerces Website",
      year: "2025",
      desc: "Built a full-stack MERN e-commerce application for product browsing, cart management, and secure online ordering.",
      tags: ["React.js", "Node.js", "REST API" ,"Material UI ", "MongoDB" ],
      demo: "#",
      code: "#",
    },
    {
      title: "Robo_Mart",
      year: "2026",
      desc: "Robo_Mart is an Electron-powered desktop e-commerce website focused on performance and usability.",
      tags: ["React.js",  "Node.js" ,"Tailwind CSS", "Material UI ", ],
      demo: "https://robo-ecommerce-shop.vercel.app/",
      code: "#",
    },
    {
      title: "Dashboard_Online_Shop",
      year: "2026",
      desc: "Dashboard_Online_Shop is a responsive admin dashboard for managing products, orders, customers, and sales data of an online store.",
      tags: ["React.js", "Tailwind CSS", "Material UI "],
      demo: "https://dashboard-online-shop-phi.vercel.app/",
      code: "#",
    },
    {
      title: "Portfolio Website",
      year: "2026",
      desc: "Personal portfolio site showcasing projects, blogs, and skills with smooth animations.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://my-portfolio-drab-alpha-44.vercel.app/",
      code: "#",
    },
    {
      title: "Book My Room",
      year: "2024",
      desc: "Book My Room is an online platform that allows users to easily search, view, and book rooms with a simple and user-friendly interface..",
      tags: ["Java", "MySql", "Css", "Html" ,"Bootstrap"],
      demo: "#",
      code: "#",
    },
    {
      title: "Bur_Ger_Project",
      year: "2025",
      desc: "Bur_Ger_Project is a responsive frontend landing page for a burger restaurant with a clean and modern UI.",
      tags: [  "Html","Tailwind CSS",  "JavaScript"],
      demo: "https://bur-ger-project.vercel.app/",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative pt-36 pb-28 bg-gradient-to-b from to-white dark:from-gray-950 dark:to-gray-900"
    >
      {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="font-serif text-4xl font-extrabold text-gray-700 md:text-5xl dark:text-white">
          Featured Projects
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-12 px-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative group rounded-3xl transition-all duration-500 hover:scale-[1.03]"
        >
          {/* Inner Card */}
          <div
            className="relative h-full p-8 overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-3xl dark:bg-gray-900 backdrop-blur-xl dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl"
          >
            {/* Top colored strip (FIXED) */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />
        
            {/* Year Badge */}
            <span className="absolute px-3 py-1 text-xs font-bold text-white rounded-full shadow-sm top-6 right-5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              {p.year}
            </span>
        
            {/* Title */}
            <h3 className="mt-2 mb-4 text-xl font-bold text-gray-900 dark:text-white">
              {p.title}
            </h3>
        
            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {p.desc}
            </p>
        
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm text-black-700 dark:text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
        
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:opacity-90"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
        
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-800 transition border border-gray-300 rounded-full dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
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
