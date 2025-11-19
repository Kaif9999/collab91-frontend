"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact-us" className="w-full bg-white">
      <div className="container">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header Section - Contact us heading with light blue background */}
          <div className="bg-[#DEEAF6] py-8 px-4 flex items-center justify-center">
            <h2 className="text-4xl font-normal text-[#00406E] text-center">
              Contact us
            </h2>
          </div>

          {/* Form Section */}
          <div className="bg-white py-8 px-4">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <h3 className="text-2xl font-normal text-black mb-8">
                Send us a brief on your requirements
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name-mobile"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name-mobile"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email-mobile"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email-mobile"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message-mobile"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message-mobile"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button - Full Width on Mobile */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00406E] text-white font-semibold uppercase rounded-lg hover:bg-[#003055] transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:grid grid-cols-1 justify-center md:grid-cols-5">
          {/* Left Section - 40% - Contact us heading with light blue background */}
          <div className="md:col-span-2 bg-[#DEEAF6] flex items-start justify-center min-h-[500px] pt-16 px-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-[#00406E] text-center">
              Contact us
            </h2>
          </div>

          {/* Right Section - 60% - Form */}
          <div className="md:col-span-3 bg-white py-16 px-8 md:px-16 lg:px-20 mx-auto max-w-7xl">
            <form onSubmit={handleSubmit} className="max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-normal text-black mb-10">
                Send us a brief on your requirements
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-normal text-black mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#00406E] text-white font-semibold uppercase rounded-lg hover:bg-[#003055] transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

