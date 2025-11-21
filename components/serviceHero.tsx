"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative w-full bg-white min-h-[600px] overflow-hidden mt-32">
      <div className="container mx-auto py-8 px-2 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {/* Left Section - Content */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl text-[#00406E] leading-tight mb-6">
              Building high-octane teams with domain experts to fuel your next
              stage of growth.
            </h1>

            {/* Sub-text */}
            <p className="text-lg lg:text-xl text-[#015A9C] leading-relaxed mb-8">
              Colab91 helps mid-market and Private-Equity-backed firms generate
              alpha through specialized procurement and analytics teams that
              accelerate execution, drive digital transformation and enhance
              enterprise value.
            </p>

            {/* Call-to-Action Button */}
            <motion.button
              className="relative w-[200px] lg:w-[200px] px-8 py-1 bg-[#00406E] rounded-lg overflow-hidden cursor-pointer"
              style={{
                fontFamily:
                  '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 4px 8px 0 #B4C3D1",
                  "0 8px 16px 0 rgba(0, 64, 110, 0.4)",
                  "0 4px 8px 0 #B4C3D1",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px 0 rgba(0, 64, 110, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10 text-white uppercase text-lg block tracking-widest">
                REQUEST
              </span>
              <span className="relative z-10 text-white uppercase text-lg block tracking-widest">
                CONSULTATION
              </span>
            </motion.button>
          </div>

          {/* Right Section - Rocket Illustration */}
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center mt-6 lg:mt-8">
            <Image
              src="/rocket.svg"
              alt="Rocket Illustration"
              width={809}
              height={687}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
