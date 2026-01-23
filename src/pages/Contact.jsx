import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20
      bg-gradient-to-b from to-white
      dark:from-gray-900 dark:to-gray-900">

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center
          text-black dark:text-white">
          Get In Touch
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello?
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT CARD */}
          <div className="rounded-3xl shadow-lg p-8 flex flex-col
            bg-white dark:bg-gray-800
            hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-4
              text-gray-800 dark:text-white">
              Contact Information
            </h3>

            <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
              Available for freelance projects and full-time roles.
              Let’s collaborate and build impactful digital experiences.
            </p>

            <div className="mb-8">
              <img
                src={Logo}
                alt="Contact"
                className="w-72 object-cover rounded-xl   lg:ml-16"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Email */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                  <FaEnvelope className="text-purple-600" />
                </div>

                <span className="text-white text-sm break-all">
                  skbmzp365@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                  <FaPhone className="text-purple-600" />
                </div>

                <span className="text-white text-sm">
                  +91 81279 38279
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl shadow-lg p-8 space-y-5
              bg-white dark:bg-gray-800
              hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="pl-11 p-3 w-full rounded-xl
                    bg-white dark:bg-gray-700
                    text-black dark:text-white
                    border border-gray-300 dark:border-gray-600
                    focus:ring-2 focus:ring-purple-400 outline-none"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="pl-11 p-3 w-full rounded-xl
                    bg-white dark:bg-gray-700
                    text-black dark:text-white
                    border border-gray-300 dark:border-gray-600
                    focus:ring-2 focus:ring-purple-400 outline-none"
                  required
                />
              </div>
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-3 w-full rounded-xl
                bg-white dark:bg-gray-700
                text-black dark:text-white
                border border-gray-300 dark:border-gray-600
                focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <div className="relative">
              <FaRegCommentDots className="absolute top-4 left-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="pl-11 p-3 w-full h-36 resize-none rounded-xl
                  bg-white dark:bg-gray-700
                  text-black dark:text-white
                  border border-gray-300 dark:border-gray-600
                  focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-lg
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                text-white hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
