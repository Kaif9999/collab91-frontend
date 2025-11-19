"use client";

import { useState } from "react";
import Image from "next/image";
export default function Waitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission here
    console.log("Waitlist submission:", email);
  };

  return (
    <section className="w-full bg-white py-16 px-8 mt-16 mb-16">
      <div className="container mx-auto max-w-5xl max-h-4xl">
        {/* Gradient Border Container */}
        <div
          className="relative p-4 sm:p-[46px] rounded-md sm:rounded-lg"
          style={{
            background: "linear-gradient(to top, #DEEAF6, #ffffff)",
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div 
            className="bg-[#F1F1F1] rounded-md sm:rounded-lg p-4 sm:p-8"
            style={{
              boxShadow: "inset -4px -4px 8px rgba(0, 0, 0, 0.1), inset 4px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl text-[#00406E] font-semibold mb-4">
              Join the Waitlist
            </h2>
            <p className="text-base sm:text-xl text-[#00406E] leading-relaxed max-w-2xl mx-auto">
              Be among the first to experience our AI-powered spend intelligence platform when it launches.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00406E] focus:border-transparent text-black"
            />
            <button
              type="submit"
              className="w-48 sm:w-auto sm:px-8 px-6 py-3 bg-[#00406E] text-white font-semibold uppercase rounded-md sm:rounded-lg hover:bg-[#003055] transition-colors shadow-[0_4px_8px_0_#B4C3D1] whitespace-nowrap mx-auto sm:mx-0"
              style={{
                fontFamily:
                  '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              JOIN WAITLIST
            </button>
          </form>
          <p className="text-center text-xs sm:text-sm text-gray-500 p-2 mt-2">We respect your privacy. Your information will never be shared </p>
          <div className="flex justify-center items-center">
            <Image src="/loader.svg" alt="Loader" width={300} height={22} className="mt-4 p-2 sm:p-4 w-[250px] sm:w-[300px]"/>
          </div>
          <p className="text-center text-base sm:text-xl text-gray-500 p-2 mt-2">Launching Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

