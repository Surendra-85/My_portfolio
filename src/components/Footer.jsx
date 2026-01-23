import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 
                 border-t border-gray-200 dark:border-gray-700"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-7
                   flex flex-col md:flex-row
                   items-center justify-between gap-6"
      >
        {/* Logo / Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group cursor-pointer text-center md:text-left"
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold
                       bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                       bg-clip-text text-transparent tracking-wide"
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
          {[FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="p-[2px] rounded-full
                         bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            >
              <span
                className="w-10 h-10 flex items-center justify-center
                           rounded-full
                           bg-white dark:bg-gray-800
                           text-gray-600 dark:text-gray-300
                           hover:text-pink-500 dark:hover:text-pink-400
                           transition-colors"
              >
                <Icon size={18} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-base text-gray-500 dark:text-gray-400 text-center md:text-right">
          © 2026{" "}
          <span className="text-pink-500 font-semibold">
            Surendra
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
