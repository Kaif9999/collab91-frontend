"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, containerStagger, wordStagger, cardStagger, cardItem } from "./motionVariants";

export default function OurOfferings() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <motion.section
      id="our-offerings"
      className="w-full bg-white py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto">
        <div className="mb-6">
          <motion.h2
            className="text-4xl lg:text-5xl text-center lg:text-left mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerStagger}
          >
            <motion.span className="text-[#00406E] inline-block" variants={wordStagger}>
              Our
            </motion.span>
            <motion.span
              className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block ml-2"
              variants={wordStagger}
            >
              Offerings.
            </motion.span>
          </motion.h2>
        </div>

        {/* Perspective Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16" style={{ perspective: "1000px" }}>
          {/* Left Card */}
          <motion.div
            className="w-80 md:w-96 h-[500px] relative rounded-2xl overflow-hidden cursor-pointer group"
            variants={cardItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: "linear-gradient(135deg, #87CEEB 0%, #69B2F3 100%)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              scale: 1.15,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Smooth Light Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent z-0 pointer-events-none" />
            
            {/* Additional Light Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-transparent z-0 pointer-events-none" />
            
            {/* Animated Smooth Shine Effect */}
            <motion.div
              className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45"
              animate={{
                x: hoveredCard === 1 ? "50%" : "-100%",
                y: hoveredCard === 1 ? "50%" : "-100%",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 z-10 flex flex-col">
              {/* Heading: Starts Bottom-Left, Moves Top-Left */}
              <motion.div
                className="absolute top-8 left-8"
                initial={{ y: 380 }}
                animate={{
                  y: hoveredCard === 1 ? 0 : 380,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.span
                  className="block text-[#69B2F3] text-[10px] font-bold tracking-widest mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  AUTUMN '24
                </motion.span>
                <h4 className="text-3xl font-bold text-[#00406E] tracking-wide leading-none">
                  CARD TITLE 1
                </h4>
              </motion.div>

              {/* Expanded Text Content: Fills card on hover */}
              <motion.div
                className="mt-24 flex flex-col h-full justify-between pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-6">
                  <p className="font-mono text-xs leading-loose border-l-2 border-[#00406E] pl-4 text-[#00406E]/90 text-justify">
                    Your content goes here. This card features a glossy, reflective design with smooth animations that catch the light beautifully.
                  </p>
                  <ul className="text-xs font-mono space-y-2 text-[#00406E]">
                    <li>• Feature One</li>
                    <li>• Feature Two</li>
                    <li>• Feature Three</li>
                  </ul>
                </div>

                <div className="w-full pt-6 border-t border-[#00406E]/30">
                  <button className="flex items-center justify-between w-full text-[#00406E] hover:text-[#69B2F3] transition-colors">
                    <span className="text-xs font-bold tracking-widest">VIEW DETAILS</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="w-80 md:w-96 h-[500px] relative rounded-2xl overflow-hidden cursor-pointer group"
            variants={cardItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: "linear-gradient(135deg, #87CEEB 0%, #69B2F3 100%)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              rotateY: -15,
              rotateX: 5,
              scale: 1.15,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Smooth Light Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-white/40 via-white/10 to-transparent z-0 pointer-events-none" />
            
            {/* Additional Light Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent z-0 pointer-events-none" />
            
            {/* Animated Smooth Shine Effect */}
            <motion.div
              className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45"
              animate={{
                x: hoveredCard === 2 ? "50%" : "-100%",
                y: hoveredCard === 2 ? "50%" : "-100%",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 z-10 flex flex-col">
              {/* Heading: Starts Bottom-Right, Moves Top-Right */}
              <motion.div
                className="absolute top-8 right-8 text-right"
                initial={{ y: 380 }}
                animate={{
                  y: hoveredCard === 2 ? 0 : 380,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.span
                  className="block text-[#69B2F3] text-[10px] font-bold tracking-widest mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 2 ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  LIMITED RUN
                </motion.span>
                <h4 className="text-3xl font-bold text-[#00406E] tracking-wide leading-none">
                  CARD TITLE 2
                </h4>
              </motion.div>

              {/* Expanded Text Content: Fills card on hover */}
              <motion.div
                className="mt-24 flex flex-col h-full justify-between pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === 2 ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-6">
                  <p className="font-mono text-xs leading-loose border-r-2 border-[#00406E] pr-4 text-[#00406E]/90 text-justify">
                    Your content goes here. This card features a glossy, reflective design with smooth animations that catch the light beautifully.
                  </p>
                  <ul className="text-xs font-mono space-y-2 text-[#00406E]">
                    <li>Feature One •</li>
                    <li>Feature Two •</li>
                    <li>Feature Three •</li>
                  </ul>
                </div>

                <div className="w-full pt-6 border-t border-[#00406E]/30">
                  <button className="flex items-center justify-between w-full text-[#00406E] hover:text-[#69B2F3] transition-colors flex-row-reverse">
                    <span className="text-xs font-bold tracking-widest">VIEW DETAILS</span>
                    <span className="text-sm">←</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
