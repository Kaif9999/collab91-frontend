"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section className="relative w-full bg-white min-h-[600px] overflow-hidden mt-32">
      <div className="container mx-auto py-8 px-2 bg-white">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden gap-6">
          <h1 className="text-4xl text-[#00406E] leading-tight px-2 text-left">
            AI-powered Spend Intelligence
          </h1>
          <p className="text-lg text-[#00406E] leading-relaxed px-2 text-left">
            We're building something extraordinary: an AI-powered spend intelligence platform that
            transforms how organizations understand, analyze, and act on their most critical business
            data.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col items-start gap-4 px-2">
            <motion.button
              className="relative w-[200px] px-8 py-1 bg-[#00406E] rounded-lg overflow-hidden cursor-pointer"
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
                JOIN THE
              </span>
              <span className="relative z-10 text-white uppercase text-lg block tracking-widest">
                WAITLIST
              </span>
            </motion.button>
          </div>

          {/* Illustration */}
          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            <Image
              src="/productHero.svg"
              alt="AI-powered Spend Intelligence"
              width={794}
              height={554}
              className="w-full h-auto max-w-md"
              priority
            />
          </div>

          {/* Blue Graphic */}
          <div className="-ml-2">
            <Image
              src="/blue-bg.svg"
              alt="Blue Background"
              width={321}
              height={149}
              className="w-auto h-auto max-w-[321px]"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 relative z-10">
          {/* Text Column */}
          <div className="flex mx-2 flex-col -mt-6 lg:mt-6">
           
            <h1 className="text-4xl lg:text-5xl text-[#00406E] leading-tight whitespace-nowrap">
              AI-powered Spend Intelligence
            </h1>
            <p className="mt-4 text-2xl text-[#00406E] leading-relaxed max-w-xl">
              We’re building something extraordinary: an AI-powered spend intelligence platform that
              transforms how organizations understand, analyze, and act on their most critical business
              data.
            </p>

            <div className="flex flex-row flex-wrap gap-4 mt-4 w-full lg:w-[40%]">
              <motion.button
                className="relative flex-1 px-3 py-1 bg-[#00406E] rounded-lg overflow-hidden cursor-pointer"
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
                  JOIN THE
                </span>
                <span className="relative z-10 text-white uppercase text-lg block tracking-widest">
                  WAITLIST
                </span>
              </motion.button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center mt-6 lg:mt-8">
            <Image
              src="/productHero.svg"
              alt="AI-powered Spend Intelligence"
              width={794}
              height={554}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Blue Graphic for Desktop */}
      <div className="hidden lg:block relative min-h-[149px] w-full">
        <Image
          src="/blue-bg.svg"
          alt="Blue Background"
          width={642}
          height={299}
          className="w-auto h-auto max-w-[642px] xl:max-w-[800px] 2xl:max-w-[1000px]"
        />
      </div>
    </section>
  );
}

