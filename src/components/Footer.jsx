import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div
        className="flex flex-col items-center justify-between gap-6 px-6 mx-auto max-w-7xl py-7 md:flex-row"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center cursor-pointer group md:text-left"
        >
          <h2
            className="text-2xl font-extrabold tracking-wide text-transparent md:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text"
          >
            Portfolio
          </h2>

          <span
            className="block mx-auto md:mx-0 mt-1 h-[2px] w-0
                       bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                       group-hover:w-full transition-all duration-300"
          />
        </motion.div>

        
{/* Social Icons */}
<div className="flex items-center gap-4">
  <motion.a
    href="https://www.instagram.com/your_username"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="p-[2px] rounded-full
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
  >
    <span className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-white rounded-full dark:bg-gray-800 dark:text-gray-300 hover:text-pink-500">
      <FaInstagram size={18} />
    </span>
  </motion.a>

  <motion.a
    href="https://www.facebook.com/your_username"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="p-[2px] rounded-full
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
  >
    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full dark:bg-gray-800">
      <FaFacebookF size={18} />
    </span>
  </motion.a>

  <motion.a
    href="https://github.com/Codingstar365"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="p-[2px] rounded-full
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
  >
    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full dark:bg-gray-800">
      <FaGithub size={18} />
    </span>
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/surendra-8a6334378/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="p-[2px] rounded-full
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
  >
    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full dark:bg-gray-800">
      <FaLinkedinIn size={18} />
    </span>
  </motion.a>
</div>

        {/* Copyright */}
        <p className="text-base text-center text-gray-500 dark:text-gray-400 md:text-right">
          © 2026{" "}
          <span className="font-semibold text-pink-500">
            Surendra
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
