"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "./motionVariants";
// Bullet Point Icon
const BulletIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="4" cy="4" r="4" fill="black" />
  </svg>
);

// Document/Building Icon
const DocumentIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path d="M2 2H10V10H2V2Z" stroke="black" strokeWidth="1" fill="none" />
    <path d="M4 4H8M4 6H8M4 8H7" stroke="black" strokeWidth="0.8" />
  </svg>
);

// Blue Circle Icon for divider
const BlueCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#00406E" />
  </svg>
);

interface ExpertiseItem {
  text: string;
  icon: "bullet" | "document";
}

interface ExpertiseCategory {
  title: string;
  items: ExpertiseItem[];
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Sourcing & Procurement",
    items: [
      { text: "Buy-desk Support", icon: "bullet" },
      { text: "Category Management", icon: "bullet" },
      { text: "Contract Lifecycle Management", icon: "bullet" },
      { text: "Spend Analytics & Reporting", icon: "bullet" },
      { text: "P2P Managed Services", icon: "bullet" },
      { text: "Strategic Sourcing", icon: "bullet" },
      { text: "Savings Tracking", icon: "bullet" },
    ],
  },
  {
    title: "Business Analytics",
    items: [
      { text: "Commercial and Revenue Analytics", icon: "document" },
      { text: "Procurement & Supply Chain Analytics", icon: "document" },
      { text: "Diagnostic Analytics", icon: "document" },
      { text: "Predictive Analytics", icon: "document" },
      { text: "Operational Analytics", icon: "document" },
      { text: "Customer Analytics", icon: "document" },
    ],
  },
];

export default function OurFunctional() {
  // Refs for each grid to track scroll visibility
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const grid3Ref = useRef(null);

  // Track when each grid enters viewport
  const grid1InView = useInView(grid1Ref, { once: false, amount: 0.3 });
  const grid2InView = useInView(grid2Ref, { once: false, amount: 0.3 });
  const grid3InView = useInView(grid3Ref, { once: false, amount: 0.3 });

  // Animation variants for scroll-based reveal
  const gridVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // List item text variants
  const itemVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-8 lg:py-16 px-4 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <motion.h2
          className="text-4xl lg:text-5xl font-semibold mb-12 text-center lg:text-left"
          variants={fadeInUp}
        >
          <span className="text-[#00406E]">Our</span>{" "}
          <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
            functional expertise
          </span>
        </motion.h2>

        {/* Two Column Layout with Divider */}
        <div className="relative">
          {/* Animated Vertical Gradient Divider Line */}
          {/* Mobile - Left */}
          <div className="block lg:hidden absolute left-0 top-0 bottom-0 w-[3px] bg-gray-100 overflow-hidden z-0 rounded-full">
             <motion.div 
                className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-[#2E75B7] to-transparent"
                animate={{ top: ['-30%', '130%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
             />
             <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#2E75B7]/20 to-transparent"
             />
          </div>

          {/* Desktop - Center */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gray-100 transform -translate-x-1/2 overflow-hidden z-0 rounded-full">
             <motion.div 
                className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-[#2E75B7] to-transparent opacity-80"
                animate={{ top: ['-40%', '140%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0 }}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" /> 
          </div>

          {/* Mobile Layout: All three grids on the right */}
          <motion.div className="block lg:hidden relative z-10 pl-8" variants={fadeInUp}>
            <div className="space-y-8">
              {/* Sourcing & Procurement - Mobile */}
              <motion.div
                ref={grid1Ref}
                className="relative"
                initial="hidden"
                animate={grid1InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[0].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </motion.div>

              {/* Third box - Mobile */}
              <motion.div
                ref={grid2Ref}
                className="relative"
                initial="hidden"
                animate={grid2InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  Third box
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </motion.div>

              {/* Business Analytics - Mobile */}
              <motion.div
                ref={grid3Ref}
                className="relative"
                initial="hidden"
                animate={grid3InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[1].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[1].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <DocumentIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Layout: Two Column */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Column */}
            <div className="space-y-8 pr-12 lg:pr-10 relative">
              {/* Sourcing & Procurement */}
              <motion.div
                ref={grid1Ref}
                className="relative"
                initial="hidden"
                animate={grid1InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[0].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -right-16 lg:-right-12 top-[30%] z-20"
                />
              </motion.div>

              {/* Third box */}
              <motion.div
                ref={grid2Ref}
                className="relative"
                initial="hidden"
                animate={grid2InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  Third box
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -right-16 lg:-right-12 top-[30%] z-20"
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 lg:mt-64 pl-12 lg:pl-10 relative">
              {/* Business Analytics */}
              <motion.div
                ref={grid3Ref}
                className="relative text-right"
                initial="hidden"
                animate={grid3InView ? "visible" : "hidden"}
                variants={gridVariants}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[1].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[1].items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <DocumentIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -left-16 lg:-left-12 top-[30%] z-20"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
