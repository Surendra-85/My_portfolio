import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import Hero from '../assets/Photo5.png'
import Logo from '../assets/logo.png'
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
    <section className="bg-gradient-to-b from-white to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center
          text-black">
          Get In Touch
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello?
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl shadow-lg p-8
            hover:shadow-2xl transition-all duration-300 flex flex-col">

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>

            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
  Available for freelance projects and full-time roles.
  Let’s collaborate and build impactful digital experiences.
</p>


            {/* Poster */}
            {/* Poster */}
<div className="mb-8">
  <img
    src={Logo}
    alt="Contact"
className="w-85 h-75 object-cover rounded-xl shadow- ml-0 md:ml-1 lg:ml-12"
  />
</div>


            {/* Contact Details */}
            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">

{/* Email */}
<div
  className="group flex items-center gap-3 flex-1 px-3 py-2 rounded-xl 
   bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:to-indigo-500 border border-gray-100
    hover:border-transparent
    hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500
    transition-all duration-300"
>
  <div
    className="w-9 h-9 rounded-lg bg-purple-100
      flex items-center justify-center
      text-purple-600 text-sm
      group-hover:bg-white transition"
  >
    <FaEnvelope />
  </div>

  <span
    className="text-gray-700 font-medium text-xs break-all
      group-hover:text-white transition text-white"
  >
    skbmzp365@gmail.com
  </span>
</div>

{/* Phone */}
<div
  className="group flex items-center gap-3 flex-1 px-3 py-2 rounded-xl
    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:to-indigo-500 border border-gray-100
    hover:border-transparent
    
    transition-all duration-300"
>
  <div
    className="w-9 h-9 rounded-lg bg-purple-100
      flex items-center justify-center
      text-purple-600 text-sm
      group-hover:bg-white transition"
  >
    <FaPhone />
  </div>

  <span
    className="text-gray-700 font-medium text-xs
      group-hover:text-white transition text-white"
  >
    +91 81279 38279
  </span>
</div>

</div>


          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8
              hover:shadow-2xl transition-all duration-300 space-y-5"
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
                  className="pl-11 border border-gray-300 rounded-xl p-3 w-full
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
                  className="pl-11 border border-gray-300 rounded-xl p-3 w-full
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
              className="border border-gray-300 rounded-xl p-3 w-full
                focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <div className="relative">
              <FaRegCommentDots className="absolute top-4 left-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="pl-11 border border-gray-300 rounded-xl p-3 w-full h-36
                  resize-none focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                text-white py-3 rounded-xl font-semibold text-lg
                hover: opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
