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
    <section className="py-20 bg-gradient-to-b from to-white dark:from-gray-900 dark:to-gray-900">

      <div className="max-w-6xl px-6 mx-auto">
        
        <h2 className="font-serif text-4xl font-extrabold text-center text-gray-700 md:text-5xl dark:text-white">
          Get In Touch
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 dark:text-gray-400">
          Have a project in mind or just want to say hello?
        </p>

        <div className="grid items-stretch gap-12 mt-16 md:grid-cols-2">
          {/* LEFT CARD */}
          <div className="flex flex-col p-8 transition-all duration-300 bg-white shadow-lg rounded-3xl dark:bg-gray-800 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Contact Information
            </h3>

            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              Available for freelance projects and full-time roles.
              Let’s collaborate and build impactful digital experiences.
            </p>

            <div className="mb-8">
              <img
                src={Logo}
                alt="Contact"
                className="object-cover w-72 rounded-xl lg:ml-16"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Email */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

                <div className="flex items-center justify-center bg-white rounded-lg w-9 h-9">
                  <FaEnvelope className="text-purple-600" />
                </div>

                <span className="text-sm text-white break-all">
                  skbmzp365@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

                <div className="flex items-center justify-center bg-white rounded-lg w-9 h-9">
                  <FaPhone className="text-purple-600" />
                </div>

                <span className="text-sm text-white">
                  +91 81279 38279
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-5 transition-all duration-300 bg-white shadow-lg rounded-3xl dark:bg-gray-800 hover:shadow-2xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <FaUser className="absolute text-gray-400 top-4 left-4" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 text-black bg-white border border-gray-300 outline-none pl-11 rounded-xl dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute text-gray-400 top-4 left-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 text-black bg-white border border-gray-300 outline-none pl-11 rounded-xl dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-purple-400"
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
              className="w-full p-3 text-black bg-white border border-gray-300 outline-none rounded-xl dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-purple-400"
            />

            <div className="relative">
              <FaRegCommentDots className="absolute text-gray-400 top-4 left-4" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full p-3 text-black bg-white border border-gray-300 outline-none resize-none pl-11 h-36 rounded-xl dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white transition rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
